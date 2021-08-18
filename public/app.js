import ItemListComponent from "./app/itemlist.js";
import ItemComponent from "./app/items.js";
import PopupComponent from "./app/pop-up.js";
import totalQuantityComponent from "./app/totalquantity.js";

function App() {


    this.run = function () {
        const itemList = new ItemListComponent.ItemList();//neu erstellte Variable die ein Object mit einem Array als Eigenschaft besitzt

        document.body.appendChild(ItemListComponent.render(itemList));
        PopupComponent.popupAndPass();
        document.body.appendChild(totalQuantityComponent.render())


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
            }
        }

        function newItem(event) {
            const element = event.detail.element;
            element.style.display = "flex";
        }

        console.log(itemList)

        function deleteItem(event) {
            itemList.delete(event.detail.item)
            reloadList()
            totalQuantityComponent.reloadTotalQuantity(itemList)


        }

        function reloadList() {
            document.dispatchEvent(new CustomEvent('reload-list'))
        }


    }
}


export default App;