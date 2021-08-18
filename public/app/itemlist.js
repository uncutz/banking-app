import ItemComponent from "./items.js";
import items from "./items.js";

class ItemList {

    /**
     * @param list
     */
    constructor(list = []) {
        this.list = list;
    }
    delete(item) {
        const index = this.list.indexOf(item)
        this.list.splice(index, 1);
    }

}

/**
 *
 * @param {ItemList}itemList
 * @return {ChildNode}
 */

function render (itemList){


    const $element = document.createElement('div')
    $element.innerHTML =`<div class="container">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand -title" href="#">Bank<span class="title-it">It</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active -home" aria-current="page" href="#">Home</a>
                        <!--<button type="button" class="btn btn-dark btn-sm add-new">Add New</button>-->
                    </div>
                </div>
                <button type="button" class="btn btn-dark btn-sm add-new">Add New</button>
            </div>
        </nav>

    <div class="row">
        <div class="col">diagramm</div>
    </div>

    <div class="row">
        <div class="col -balance">Balance</div>
    </div>
    <div class="row putithere">

    </div>
    <div class="row -sum">
        <div class="col-md-6 -total-income">
        Income: 
        </div>
        <div class="col-md-6 -total-expenses">
        Expenses:
        </div>
        <div class="col-12 -total">
            <p>Total: </p>        
        </div>
    
    </div>
    
</div>`;


    document.addEventListener('click', function (){
        let income = 0;
        let expenses = 0;
        const incomeItem = itemList.list.filter(item => item.type === "income");
        const expensesItem = itemList.list.filter(item => item.type === "expenses");
        for (let i=0; i < expensesItem.length; i++) {
            expenses += parseInt(expensesItem[i].quantity)
        }
        for (let i=0; i < incomeItem.length; i++) {
            income += parseInt(incomeItem[i].quantity)
        }
        document.dispatchEvent(new CustomEvent('total-quantity', {
                detail: {
                    income: income,
                    expenses: expenses
                }
        }))
    })


    const list = $element.querySelector('.putithere')
    document.addEventListener('reload-list', function (){
            list.innerHTML = ''

            for (let i = 0; i < itemList.list.length; i++) {

                const listItem = itemList.list[i]
                ItemComponent.renderItem(listItem);

            }

        }
    )

    return $element.firstChild;
}


const ItemListComponent = {
    ItemList,
    render
}

export default ItemListComponent;