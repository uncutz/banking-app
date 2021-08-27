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


    toJSON() {
        let list = []

        for (let i = 0; i < this.list.length; i++) {

            const item = this.list[i]

            list.push({
                name: item.name,
                date: item.date,
                quantity: item.quantity,
                type: item.type

            })
        }
        return JSON.stringify(list)
    }

    static fromJSON(json) {
        const list = JSON.parse(json)
        console.log(list)
        const itemList = new ItemList();
        for (let i = 0; i < list.length; i++) {
            const record = list[i];
            console.log(i)

            itemList.list.push(
                new ItemComponent.Item(
                    record.name,
                    record.date,
                    record.quantity,
                    record.type
                )
            )
        }
        return itemList;
    }

}

/**
 *
 * @param {ItemList}itemList
 * @return {ChildNode}
 */

function render(itemList) {


    const $element = document.createElement('div')
    $element.innerHTML = `<div class="container">

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

          <div class="mt-4">
            <label for="select-chart-type">Chart Type:</label>
            <select class="-chart-type mx-2" id="select-chart-type">
                <option value="bar">Bar Chart</option>
                <option value="line">Line Chart</option>
            </select>
        </div>
    <div class="row justify-content-center -place-for-chart"> <!-- LAAAAAAADEEENN der Chart muss noch korrekt implementiert werden -->
      
    </div>

    <div class="row">
        <div class="col -balance">Balance</div>
    </div>
    <div class="row putithere">

    </div>
    
</div>
`;


    const list = $element.querySelector('.putithere')
    document.addEventListener('reload-list', function () {
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