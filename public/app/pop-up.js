

function popupAndPass () { //wenn man auf Button save klickt wird object in list gespeichert
    const $element = document.createElement('div');
    $element.innerHTML = `
                            <div class = "popup">
                                <div class="popup-content">
                            
                                    <label for="select-source">Choose if it's an income or expense: </label>
                                    <select class="selectType" id="select-source">
                                        <option value="">--Please choose type of entry--</option>
                                        <option value="income">Income</option>
                                        <option value="expenses">Expenses</option>
                                    </select>
                                    <input class = "inp-name" type="text" placeholder="name">
                                    <input class ="inp-date" type="text" placeholder="date">
                                    <input class ="inp-quantity" type="text" placeholder="amout"><br>
                                    <button type="button" class="btn btn-dark btn-sm save">Save</button>
                                </div>
                            </div>`;


    document.querySelector('.add-new').addEventListener('click', function () {
        document.dispatchEvent(new CustomEvent('add-new', {
            detail: {
                element: $element.querySelector('.popup')
            }
        }))
    });

    $element.querySelector('.save').addEventListener('click', function () {


        const inpName = document.querySelector('.inp-name').value;
        const inpDate = document.querySelector('.inp-date').value;
        const inpQuantity = document.querySelector('.inp-quantity').value;
        const item = {inpName, inpDate, inpQuantity}
        //erstes Custom event
        document.dispatchEvent(new CustomEvent('save-item', {
            detail: {

                select: $element.querySelector('.selectType').value,
                item: item,
                name: inpName,
                date: inpDate,
                quantity: inpQuantity
            }
        }))

    });




    document.body.appendChild($element)
    //return $element.firstChild;
}

const PopupComponent = {
    popupAndPass
}

export default PopupComponent;