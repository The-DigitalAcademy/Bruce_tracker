var state = {
    balance: 0,
    income: 0,
    expense: 0,
    history: [
         {name:'name', amount: 0, type: 'income'},  
         {name:'name', amount: 0, type: 'expense'},         
    ]
}

var table;

function input() {
stateInput = document.getElementById('stateInput').value
money = Number (document.getElementById('money').value)
  
} 



function incomeAdd() {
  input();

  if (displayscreen(money) && displayscreen(stateInput)) {
    history.push({
    info: history.length + 1,
     Expense: stateInput,
     Income: 'Income',
     Value: money,
    })
  } 
  init();

}

function expenseAdd() {
  input();

  if (displayscreen(money) && displayscreen(stateInput)) {
      history.push({
      info: history.length + 1,
      Expense: stateInput,
      Income: 'Expense',
      Value: money,
    });
  } 
  init();

  console.log(history);

}

function Alldelete() {
  stateInput = document.getElementById('Alldelete').value

  console.log('Alldelete');
}

function Alldelete() {}


function init() {
var balanceMoney = document.getElementById('balance');
var income = document.getElementById('income');
var expense = document.getElementById('expense');

table = document.getElementById('table');

table.innerHTML = `<table>

<thead>
<tr>

     <th>Info</th>
     <th>Expense</th>
     <th>Income</th>
     <th>Value</th>
   </tr>
 </thead>

</table>`

for (let i = 0; i < history.length; i++) {
    table.innerHTML += `<table>
    <tbody>
              <tr>
                <td scope="row">${history[i].info}</td>
                <td>${history[i].expense}</td>
               <td>${history[i].income}</td>
                <td>${history[i].value}</td>
              </tr>
            </tbody>
    
    </table>`
    
}

balanceMoney.innerHTML = `R${state.balance}`;
}

init();



