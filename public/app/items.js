class Item {

    name
    date
    quantity
    type

    /**
     *
     * @param {string}name
     * @param {Date}date
     * @param {int}quantity
     * @param {select} type
     */
    constructor(name, date, quantity, type) {
        this.name = name;
        this.date = date;
        this.quantity = quantity;
        this.type = type;
    }
}

/**
 *
 * @param {Item}item
 */

function renderItem(item) {

    const $element = document.createElement('div')


    //If Else für Farben
    const $select = document.querySelector('.selectType').value;
    if (item.type === null) { //wenn wir die Liste neu laden hat select keinen Wert aber der Typ Ausgabe/Eingabe ist im localstorage gespeichert
        item.type = $select
    }
    if (item.type === "expenses") {
        $element.innerHTML = `<div class="row">
                            <div class="col-md-3">${item.name}</div>
                            <div class="col-md-3">${item.date}</div>
                            <div class="col-md-3" style="color: red">-${item.quantity}</div>
                            <div class="col-md-3"><button type="button" class="btn btn-light btn-delete">Del</button></div>
                            </div>`
    } else {
        $element.innerHTML = `<div class="row">
                            <div class="col-md-3">${item.name}</div>
                            <div class="col-md-3">${item.date}</div>
                            <div class="col-md-3" style="color: green">+${item.quantity}</div>
                            <div class="col-md-3"><button type="button" class="btn btn-light btn-delete">Del</button></div>
                            </div>`
    }

    $element.querySelector('.btn-delete').addEventListener('click', deleteItem);
    function deleteItem() {
        document.dispatchEvent(new CustomEvent('delete-item', {
            detail: {
                item: item
            }
        }))
    }

    document.querySelector('.putithere').appendChild($element);
    //return $element.firstChild;
}


const ItemComponent = {
    Item,
    renderItem
}

export default ItemComponent;