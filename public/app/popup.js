/*import ItemComponent from "./items.js";

function render (){
    const $element = document.createElement('div')
    $element.innerHTML =`<div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BankIt</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <!--<button type="button" class="btn btn-dark btn-sm add-new">Add New</button>-->
                    </div>
                </div>
            </div>
        </nav>
    <button type="button" class="btn btn-dark btn-sm add-new">Add New</button>
    <div class="row">
        <div class="col">diagramm</div>
    </div>

    <div class="row">
        <div class="col">Balance</div>
    </div>
    <div class="row">
        <div class="col income">
            Einnahmen
        </div>
        <div class="col expenses">
            Ausgaben
        </div>

    </div>
</div>`;

    $element.addEventListener('click', function (){

        //Variavlen mit Input Werten deklarieren
        const inpName = $element.querySelector('.inp-name').value;
        const inpDate = $element.querySelector('.inp-date').value;
        const inpQuantity = $element.querySelector('.inp-quantity').value;

        document.dispatchEvent(new CustomEvent('add-item', {
            detail: {
                item:  new ItemComponent.Item(inpName, inpDate, inpQuantity)
            }
        }))
        document.querySelector('.popup').style.display = "none";
    });

    return $element.firstChild;
}


const Popup = {
    render
}

export default Popup; */