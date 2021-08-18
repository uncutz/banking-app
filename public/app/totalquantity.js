

function render () {
    const $element = document.createElement('div')
    $element.innerHTML = `<div class="row -sum">
        <div class="col-md-6 -total-income">
        Income: 
        </div>
        <div class="col-md-6 -total-expenses">
        Expenses:
        </div>
        <div class="col-12 -total">
        Total:      
        </div>
    
    </div>`;

    return $element.firstChild;
}



function reloadTotalQuantity(itemList){
    let income = 0;
    let expenses = 0;
    const incomeItem = itemList.list.filter(item => item.type === "income");
    const expensesItem = itemList.list.filter(item => item.type === "expenses");
    for (let i = 0; i < expensesItem.length; i++) {
        expenses += parseInt(expensesItem[i].quantity)
    }
    for (let i = 0; i < incomeItem.length; i++) {
        income += parseInt(incomeItem[i].quantity)
    }

    const totalExpenses = document.createElement('div')
    totalExpenses.innerHTML= `Expenses: <p>${expenses}</p>`;
    const totalIncome = document.createElement('div')
    totalIncome.innerHTML = `Income: <p>${income}</p>`;
    const total = income - expenses;
    const totalQuantity = document.createElement('div')

    if (income > expenses) {
        totalQuantity.innerHTML = `Total: <p style="color: green">+${total}</p>`
    }
    else if (income < expenses) {
        totalQuantity.innerHTML = `Total: <p style="color: red">-${total}</p>`
    }
    else {
        totalQuantity.innerHTML = `Total: <p style="color: dimgrey">${total}</p>`
    }

    document.querySelector('.-total-expenses').innerHTML='';
    document.querySelector('.-total-income').innerHTML='';
    document.querySelector('.-total').innerHTML='';
    document.querySelector('.-total-expenses').appendChild(totalExpenses);
    document.querySelector('.-total-income').appendChild(totalIncome);
    document.querySelector('.-total').appendChild(totalQuantity);

}

const totalQuantityComponent = {
    reloadTotalQuantity,
    render
}

export default totalQuantityComponent;