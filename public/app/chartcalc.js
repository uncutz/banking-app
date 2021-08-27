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
                    janExpense +=   parseInt(itemList.list[i].quantity);
                    console.log(janExpense)
                    break;
                case '02':
                    febExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '03':
                    marExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '04':
                    aprExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '05':
                    mayExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '06':
                    junExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '07':
                    julExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '08':
                    augExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '09':
                    sepExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '10':
                    octExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '11':
                    novExpense +=   parseInt(itemList.list[i].quantity);
                    break;
                case '12':
                    decExpense +=   parseInt(itemList.list[i].quantity);
                    break;
            }
        }

    }
    const monthlyExpenses = [janExpense, febExpense, marExpense, aprExpense, mayExpense, junExpense, julExpense, augExpense, sepExpense, octExpense, novExpense, decExpense] // dieses Array wird dem Diagramm in Data übergeben
    return monthlyExpenses;

}


const calc = {
    calcExpenses
}

export default calc;