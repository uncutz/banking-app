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
/*function render(item) {

    const $element = document.createElement('div')

    const $select = document.querySelector('.selectType').value;
    //const $displayValue = $element.createElement('div')
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
    }



        document.querySelector('.putithere').appendChild($element)
    //return $element.firstChild;
}*/

const ItemComponent = {
    Item
}

export default ItemComponent;