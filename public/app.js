import ItemListComponent from "./app/itemlist.js";
import ItemComponent from "./app/items.js";
import PopupComponent from "./app/pop-up.js";
import totalQuantityComponent from "./app/totalquantity.js";
import store from "./app/store.js";

function App() {


    this.run = function () {

        const json = store.getItem('items');
        let itemList;
        if (json) {
            itemList = ItemListComponent.ItemList.fromJSON(json)
            console.log(itemList)
        }
        else {
            itemList = new ItemListComponent.ItemList();//neu erstellte Variable die ein Object mit einem Array als Eigenschaft besitzt
            console.log(itemList)
        }

        console.log(localStorage)

        document.body.appendChild(ItemListComponent.render(itemList));
        PopupComponent.popupAndPass();
        document.body.appendChild(totalQuantityComponent.render())
        reloadList()
        totalQuantityComponent.reloadTotalQuantity(itemList)

        //----------------------------------Evetnlistener hinzufügen mit custom event type--------------------------------------------
        document.addEventListener('add-new', newItem);//AddNew Button

        document.addEventListener('save-item', saveItem);//SaveButton

        document.addEventListener('delete-item', deleteItem);//DeleteButton



        //------------------------Event Listener Funktionen deklariert --------------------------------------
        //weist dem Object itemList einen weitergegebenen Wert (Eigenschaft 'item' vom Eventobject) des Eventobjekts 'event' vom cutom event typ 'add-item' zu
        //funktion gehört zum obigen eventlistener welcher durch event type 'add-item' auf das custom event referenziert
        function saveItem(event) {

            const select = event.detail.select;
            if (select !== "income" && select !== "expenses") {
                alert('Please select Type!')
            } else {
                const name = event.detail.name;
                const date = event.detail.date;
                const quantity = event.detail.quantity;
                const type = event.detail.type;
                const item = new ItemComponent.Item(name, date, quantity, type)
                itemList.list.push(item);
                ItemComponent.renderItem(item);
                document.querySelector('.popup').style.display = "none";
                totalQuantityComponent.reloadTotalQuantity(itemList)
                storeItems();
            }
        }

        function newItem(event) {
            const element = event.detail.element;
            element.style.display = "flex";
        }

        console.log(typeof(itemList))

        function deleteItem(event) {
            itemList.delete(event.detail.item)
            reloadList()
            totalQuantityComponent.reloadTotalQuantity(itemList)
            storeItems();


        }

        function reloadList() { //Funktion zum neuladen der Liste, definiert in itemlist.js mit bezug auf die renderfunktion (der Objekte in HTML) im items.js
            document.dispatchEvent(new CustomEvent('reload-list'))
        }


        //speichert alles im Localstorage indem Funktion die Methode toJSON vom Object itemList der Klasse ItemList aufruft
        function storeItems() {
            store.setItem('items', itemList.toJSON())
        }



    }
}


export default App;