/**
 *
 * @param {ItemListComponent.ItemList}itemList
 */

function calcExpenses(itemList) {

    let janExpense = 0;
    let febExpense = 0;
    let marExpense = 0;
    let aprExpense = 0;
    let mayExpense = 0;
    let junExpense = 0;
    let julExpense = 0;
    let augExpense = 0;
    let sepExpense = 0;
    let octExpense = 0;
    let novExpense = 0;
    let decExpense = 0;

    for (let i = 0; i < itemList.list.length; i++) {
        if (itemList.list[i].type === 'expenses') {
            const date = itemList.list[i].date.substr(5, 2);//nimmt Eigenschaft date des Objectes Item (aus der Eigenschaft list als Array) aus dem Object itemlist und sucht mit substr ab Position 5 genau 2 Zeichen und speichert sie in der Konstante Date
            switch (date) { //addiert den Betrag aus itemlist.list.quantity für jeden entsprechrechenden Monat
                case '01':
                    janExpense -=   parseInt(itemList.list[i].quantity);
                    console.log(janExpense)
                    break;
                case '02':
                    febExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '03':
                    marExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '04':
                    aprExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '05':
                    mayExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '06':
                    junExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '07':
                    julExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '08':
                    augExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '09':
                    sepExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '10':
                    octExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '11':
                    novExpense -=   parseInt(itemList.list[i].quantity);
                    break;
                case '12':
                    decExpense -=   parseInt(itemList.list[i].quantity);
                    break;
            }
        }

    }
    let monthlyExpenses = [janExpense, febExpense, marExpense, aprExpense, mayExpense, junExpense, julExpense, augExpense, sepExpense, octExpense, novExpense, decExpense] // dieses Array wird dem Diagramm in Data übergeben
    return monthlyExpenses;

}

/**
 *
 * @param {ItemListComponent.ItemList}itemList
 */

function calcIncome(itemList) {

    let janIncome = 0;
    let febIncome = 0;
    let marIncome = 0;
    let aprIncome = 0;
    let mayIncome = 0;
    let junIncome = 0;
    let julIncome = 0;
    let augIncome = 0;
    let sepIncome = 0;
    let octIncome = 0;
    let novIncome = 0;
    let decIncome = 0;

    for (let i = 0; i < itemList.list.length; i++) {
        if (itemList.list[i].type === 'income') {
            const date = itemList.list[i].date.substr(5, 2);//nimmt Eigenschaft date des Objectes Item (aus der Eigenschaft list als Array) aus dem Object itemlist und sucht mit substr ab Position 5 genau 2 Zeichen und speichert sie in der Konstante Date
            switch (date) { //addiert den Betrag aus itemlist.list.quantity für jeden entsprechrechenden Monat
                case '01':
                    janIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '02':
                    febIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '03':
                    marIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '04':
                    aprIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '05':
                    mayIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '06':
                    junIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '07':
                    julIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '08':
                    augIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '09':
                    sepIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '10':
                    octIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '11':
                    novIncome +=   parseInt(itemList.list[i].quantity);
                    break;
                case '12':
                    decIncome +=   parseInt(itemList.list[i].quantity);
                    break;
            }
        }

    }
    let monthlyIncome = [janIncome, febIncome, marIncome, aprIncome, mayIncome, junIncome, julIncome, augIncome, sepIncome, octIncome, novIncome, decIncome] // dieses Array wird dem Diagramm in Data übergeben
    return monthlyIncome;

}


function loadAndConfigChart (incomeValues, expensesValues, chartType = 'bar') { //um chart zu displayen und generell die js config

    const $element = document.createElement('div');
    $element.innerHTML= `    
    <!--<div class="mt-4">
            <label for="select-chart-type">Chart Type:</label>
            <select class="-chart-type mx-2" id="select-chart-type">
                <option value="bar">BarChart</option>
                <option value="line">LineChart</option>
            </select>
        </div>-->
    <div class="w-75 mb-3">
        <canvas id="myChart"></canvas>
    </div>`;

    document.querySelector('.-place-for-chart').appendChild($element);



    const config = {
        type: chartType,
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: incomeValues,
                backgroundColor: ['rgba(115,201,13,0.9)'
                ],
                borderColor: [
                    'rgba(115,201,13, 0.9)'
                ],
                borderWidth: 2
            },{
                label: 'Expenses',
                data: expensesValues,
                backgroundColor: ['rgba(201,13,13,0.9)'
                ],
                borderColor: [
                    'rgba(201,13,13,0.9)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: (Math.max(...incomeValues)+1000),
                    suggestedMin: (Math.min(...expensesValues)-1000)
                }
            }
        }
    };

    const myChartObject = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(myChartObject,
        config);



}

function loadChart(itemList, chartType) {
    const incomeValues = calcIncome(itemList);
    const expensesValues = calcExpenses(itemList);
    loadAndConfigChart(incomeValues, expensesValues, chartType)
}



const calc = {
    loadChart
}

export default calc;