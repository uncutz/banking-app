import ItemComponent from "./items.js";
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


function render (){
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
</div>
</div>`;

    return $element.firstChild;
}

function renderItem(item) {

    const $element = document.createElement('div')

    $element.innerHTML = `<div class="row">
                            <div class="col-6 col-md-4">${item.name}</div>
                            <div class="col-6 col-md-4">${item.date}</div>
                            <div class="col-6 col-md-4">${item.quantity}</div>
                            <div class="col-6 col-md-4"><button type="button" class="btn btn-light btn-delete">Del</button></div>
                            </div>`;
 //If Else für Farben
    /*const $select = document.querySelector('.selectType').value;
    if ($select === "expenses") {
        $element.innerHTML = `<div class="row">
                            <div class="col-6 col-md-4">${item.name}</div>
                            <div class="col-6 col-md-4" style="color: red">-${item.date}</div>
                            <div class="col-6 col-md-4">${item.quantity}</div>
                            <div class="col-6 col-md-4"><button type="button" class="btn btn-light btn-delete">Del</button></div>
                            </div>`
    }
    else {
        $element.innerHTML = `<div class="row">
                            <div class="col-6 col-md-4">${item.name}</div>
                            <div class="col-6 col-md-4" style="color: green">+${item.date}</div>
                            <div class="col-6 col-md-4">${item.quantity}</div>
                            <div class="col-6 col-md-4"><button type="button" class="btn btn-light btn-delete">Del</button></div>
                            </div>`
    }*/
    $element.querySelector('.btn-delete').addEventListener('click', deleteItem)
    function deleteItem() {
        dispatchEvent(new CustomEvent('delete-item', {
            detail: {
                item: item
            }
        }))
        console.log('x')
    }


    document.querySelector('.putithere').appendChild($element)
    //return $element.firstChild;
}


const ItemListComponent = {
    ItemList,
    renderItem,
    render
}

export default ItemListComponent;