var state = {
    balance: 500,
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

// add income function
function incomeAdd() {
  input();

  if (displayscreen(moneyP) && displayscreen(details)) {
    history.push({
     Expense: details,
     Income: 'Income',
     Value: moneyP,
    });

    calculate();
    AllDeleteInput();
  } else{
    alert('All input are required');
  }
  init();

}

// add expense function
function expenseAdd() {
  input();

  if (displayscreen(moneyP) && displayscreen(details)) {
    history.push({
     Expense: details,
     Income: 'Expense',
     Value: moneyP,
    })
    
    calculate();
    AllDeleteInput();
  } else{
    alert('All input are required');
  }
  init();

}

// put input data into variables
function getUserInput(){
  amount = Number(document.getElementById('amount').value);
  AllDeleteName = document.getElementById(' AllDeleteName').value; 
}

// display tableshow data
function displayTableData() {
  var totalIncome = document.getElementById('totalIncome');
  var totalExpense = document.getElementById('totalExpense');
  var totalMoneyP = document.getElementById(' totalMoneyP');
  tableShow = document.getElementById('tableShow');
}








function init() {
var balanceMoney = document.getElementById('balance');
// var incomeMoney = document.getElementById('income');
// var expenseMoney = document.getElementById('expense');

tableShow = document.getElementById('tableShow');

tableShow.innerHTML = `<table>

<thead>
<tr>

     <th>E xpense</th>
     <th>Income</th>
     <th>Value</th>
   </tr>;
 </thead>

</table>`

for (let i = 0; i < state.history.length; i++) {
    tableShow.innerHTML += `<table>
    <tbody>
              <tr>
                <td>${state.history[i].expense}</td>
               <td>${state.history[i].income}</td>
                <td>${state.history[i].value}</td>
                <th>${state.history[i].value}</td>
                <td><button class="Alldelete" onClick="Alldelete(${i})">Alldelete</button></td>
              </tr>
            </tbody>
    
    </table>`
    
}

balanceMoney.innerHTML = `R${state.balance}`;
expenseMoney.innerHTML = `R${state.expense}`;
incomeMoney.innerHTML = `R${state.income}`;
historyMoney.innerHTML = `R${state.history}`;
AlldeleteMoney.innerHTML = `R${state.Alldelete}`;

}

init();



