var state = {
    balance: 0,
    income: 0,
    expense: 0,
    history: []
}

var details;
var moneyP;
var tableShow;
var totalIncome;


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

    calculate();
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
    
    calculate();
  } 
  init();

}


function init() {
var balanceMoney = document.getElementById('balance');
var incomeMoney = document.getElementById('income');
var expenseMoney = document.getElementById('expense');
var historyList = document.getElementById('history');



tableShow = document.getElementById('tableShow');

tableShow.innerHTML = `<table>
<tr>

     <th>Expense</th>
     <th>Income</th>
     <th>Value</th>
   </tr> 

</table>`

for (let i = 0; i < state.history.length; i++) {
    tableShow.innerHTML += `<table>
              <tr>
                <th>${state.history[i].expense}</th>
               <td>${state.history[i].income}</td>
                <td>R${state.history[i].value}</td>
                <td><button class="Alldelete" onClick="Alldelete(${i})">Alldelete</button></td>
              </tr>
  
    
    </table>`
    
}

balanceMoney.innerHTML = `R${state.balance}`;
expenseMoney.innerHTML = `R${state.expense}`;
incomeMoney.innerHTML = `R${state.income}`;
historyList.innerHTML = `R${state.history}`;

}

// calculate totals
function calculate() {
  income = 0;
  expense = 0;
  total = 0;

for (let i = 0; i < tableShow.length; i++) {
  if (tableShow[i].type == 'income') {
    income += tableShow[i].amount;
  }
  if (tableShow[i].type == 'expense') {
    expense += tableShow[i].amount;
  }
  
  total = income - expense;
}
}

init();

