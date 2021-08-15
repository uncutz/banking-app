import ItemListComponent from "./app/itemlist.js";
import ItemComponent from "./app/items.js";
import PopupComponent from "./app/pop-up.js";

function App() {


    this.run= function () {
        const itemList = new ItemListComponent.ItemList();//neu erstellte Variable die ein Object mit einem Array als Eigenschaft besitzt

        document.body.appendChild(ItemListComponent.render());
        PopupComponent.popupAndPass();


        //----------------------------------Evetnlistener hinzufügen mit custom event type--------------------------------------------
        document.addEventListener('add-new', newItem);//AddNew Button

        document.addEventListener('save-item', saveItem);//SaveButton

        document.addEventListener('delete-item', deleteItem);//DeleteButton

        //------------------------Event Listener Funktionen deklariert --------------------------------------
        //weist dem Object itemList einen weitergegebenen Wert (Eigenschaft 'item' vom Eventobject) des Eventobjekts 'event' vom cutom event typ 'add-item' zu
        //funktion gehört zum obigen eventlistener welcher durch event type 'add-item' auf das custom event referenziert
        function saveItem(event) {

            const select = event.detail.select;
            if (select !== "income" && select !=="expenses") {
                alert('Please select Type!')
            }

            else {
                const item = event.detail.item
                itemList.list.push(item);
                ItemListComponent.renderItem(item);
                document.querySelector('.popup').style.display = "none";
            }
        }

        function newItem(event) {
        const element = event.detail.element;
        element.style.display = "flex";
        }
        console.log(itemList)

        function deleteItem(event) {
            //itemList.delete(event.detail.item)
            itemList.delete(event.detail.item)
            console.log('xy')
        }
    }
}


export default App;