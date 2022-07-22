var state = {
    balance: 500,
    income: 0,
    expense: 0,
    history: []
}

var details;
var moneyP;
var tableShow;


function input() {
details = document.getElementById('stateInput').value
moneyP = Number (document.getElementById('money').value)
  
} 

function incomeAdd() {
  input();

  if (displayscreen(moneyP) && displayscreen(details)) {
    history.push({
     Expense: details,
     Income: 'Income',
     Value: moneyP,
    });
  } 
  init();

}

function expenseAdd() {
  input();

  if (displayscreen(moneyP) && displayscreen(details)) {
    history.push({
     Expense: details,
     Income: 'Expense',
     Value: moneyP,
    })
  } 
  init();

}








function init() {
var balanceMoney = document.getElementById('balance');
// var incomeMoney = document.getElementById('income');
// var expenseMoney = document.getElementById('expense');

tableShow = document.getElementById('tableShow');

tableShow.innerHTML = `<table>

<thead>
<tr>

     <th>Expense</th>
     <th>Income</th>
     <th>Value</th>
   </tr>
 </thead>

</table>`

for (let i = 0; i < state.history.length; i++) {
    tableShow.innerHTML += `<table>
    <tbody>
              <tr>
                <td>${state.history[i].expense}</td>
               <td>${state.history[i].income}</td>
                <td>${state.history[i].value}</td>
              </tr>
            </tbody>
    
    </table>`
    
}

balanceMoney.innerHTML = `R${state.balance}`;
}

init();



