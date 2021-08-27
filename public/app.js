import ItemListComponent from "./app/itemlist.js";
import ItemComponent from "./app/items.js";
import PopupComponent from "./app/pop-up.js";
import totalQuantityComponent from "./app/totalquantity.js";
import store from "./app/store.js";
import calc from "./app/chartcalc.js";

function App() {


    this.run = function () {

        const json = store.getItem('items');
        let itemList;
        if (json) {
            itemList = ItemListComponent.ItemList.fromJSON(json)
            console.log(itemList.list)
        }
        else {
            itemList = new ItemListComponent.ItemList();//neu erstellte Variable die ein Object mit einem Array als Eigenschaft besitzt
        }

        console.log(localStorage)


        document.body.appendChild(ItemListComponent.render(itemList));
        PopupComponent.popupAndPass();
        document.body.appendChild(totalQuantityComponent.render())
        reloadList()
        totalQuantityComponent.reloadTotalQuantity(itemList)
        calc.loadChart(itemList);//Chart zum ersten Mal implementiert


        //----------------------------------Eventlistener hinzufügen mit custom event type--------------------------------------------
        document.addEventListener('add-new', newItem);//AddNew Button  ##pop-up.js

        document.addEventListener('save-item', saveItem);//SaveButton  ##pop-up.js

        document.addEventListener('delete-item', deleteItem);//DeleteButton ##itemlist.js

        document.querySelector('.-chart-type').addEventListener('change', function () {  //#chartcalc.js
            console.log('changed')
            const selectChartType = document.querySelector('.-chart-type').value;
            reloadChart(selectChartType);
        })




        //------------------------Event Listener Funktionen deklariert --------------------------------------
        //weist dem Object itemList einen weitergegebenen Wert (Eigenschaft 'item' vom Eventobject) des Eventobjekts 'event' vom cutom event typ 'add-item' zu
        //funktion gehört zum obigen eventlistener welcher durch event type 'save-item' auf das custom event referenziert
        function saveItem(event) {  //##pop-up.js

            const name = event.detail.name;
            const date = event.detail.date;
            const quantity = event.detail.quantity;
            const type = event.detail.type;
            if ( type === '' || name === '' || date === '' || quantity === '' ) { //fordert auf alle Felder auszufüllen
                alert('Please enter all information!')
            } else {

                const item = new ItemComponent.Item(name, date, quantity, type)
                itemList.list.push(item);
                ItemComponent.renderItem(item);
                document.querySelector('.popup').style.display = "none";
                totalQuantityComponent.reloadTotalQuantity(itemList)
                storeItems();
                reloadChart();

            }
        }

        function newItem(event) {  //##pop-up.js
            const element = event.detail.element;
            element.style.display = "flex";
        }


        function deleteItem(event) { //##item.js + itemlist.js
            itemList.delete(event.detail.item) //##item.js
            reloadList()
            totalQuantityComponent.reloadTotalQuantity(itemList)
            storeItems();
            reloadChart();


        }

        function reloadList() { //Funktion zum neuladen der Liste, definiert in itemlist.js mit bezug auf die renderfunktion (der Objekte in HTML) im items.js ##item.js
            document.dispatchEvent(new CustomEvent('reload-list'))
        }


        //speichert alles im Localstorage indem Funktion die Methode toJSON vom Object itemList der Klasse ItemList aufruft
        function storeItems() { //#app.js
            store.setItem('items', itemList.toJSON())
        }

        function reloadChart(selectChartType) { //lädt die Chart neu #chartcalc.js
            const chart = document.querySelector('.-place-for-chart')
            chart.innerHTML='';
            calc.loadChart(itemList, selectChartType);
        }



    }
}


export default App;