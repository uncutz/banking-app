import ItemListComponent from "./app/itemlist.js";
import ItemComponent from "./app/items.js";
import PopupComponent from "./app/pop-up.js";

function App() {


    this.run = function () {
        const itemList = new ItemListComponent.ItemList();//neu erstellte Variable die ein Object mit einem Array als Eigenschaft besitzt

        document.body.appendChild(ItemListComponent.render(itemList));
        PopupComponent.popupAndPass();


        //----------------------------------Evetnlistener hinzufügen mit custom event type--------------------------------------------
        document.addEventListener('add-new', newItem);//AddNew Button

        document.addEventListener('save-item', saveItem);//SaveButton

        document.addEventListener('delete-item', deleteItem);//DeleteButton

        document.addEventListener('total-quantity', totalQuantity);


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
                console.log(itemList)
            }
        }

        function newItem(event) {
            const element = event.detail.element;
            element.style.display = "flex";
        }

        console.log(itemList)

        function deleteItem(event) {
            itemList.delete(event.detail.item)
            console.log(itemList)
            reloadList()


        }

        function reloadList() {
            document.dispatchEvent(new CustomEvent('reload-list'))
        }

        function totalQuantity(event) {
            const expenses = event.detail.expenses;
            const income = event.detail.income;

            const totalExpenses = document.createElement('div')
            totalExpenses.innerHTML='';
            totalExpenses.innerHTML= `<p>${expenses}</p>`;
            //document.querySelector('.-total-expenses').appendChild('div')
            const totalIncome = document.createElement('div')
            totalIncome.innerHTML='';
            totalIncome.innerHTML = `<p>${income}</p>`;

            document.querySelector('.-total-expenses').appendChild(totalExpenses)
            document.querySelector('.-total-income').appendChild(totalIncome)

        }

    }
}


export default App;