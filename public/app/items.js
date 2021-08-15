import ItemListComponent from "./itemlist.js";

class Item {

    name
    date
    quantity

    /**
     *
     * @param {string}name
     * @param {Date}date
     * @param {int}quantity
     */
    constructor(name, date, quantity) {
    this.name = name;
    this.date = date;
    this.quantity = quantity;
    }
}

/**
 *
 * @param {Item}item
 */

function renderItem(item) {

    const $element = document.createElement('div')

    $element.innerHTML = `<div class="row reload">
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
        document.dispatchEvent(new CustomEvent('delete-item', {
            detail: {
                item: item
            }
        }))
        console.log('x')
    }
    document.querySelector('.putithere').appendChild($element)
    //return $element.firstChild;
}


const ItemComponent = {
    Item,
    renderItem
}

export default ItemComponent;