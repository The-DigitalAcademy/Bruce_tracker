var state = {
    balance: 5000,
    income: 0,
    expense: 0,
    names: [],
    item:[],
    history: [
         {name:'name', amount: 0, type: 'income'},  
         {name:'name', amount: 0, type: 'expense'},         
    ]
}

var table;

var balanceEl = document.getElementById('balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionEl = document.getElementById('transaction');


function incomeAdd() {
stateInput = document.getElementById('stateInput').value


console.log(stateInput);

}

function expenseAdd() {
stateInput = document.getElementById('stateInput').value


console.log(stateInput);
}

function Alldelete() {
  stateInput = document.getElementById('Alldelete').value

  console.log('Alldelete');
}

function Alldelete() {
  
}
//reminder about function onAddexpense
function onAddExpenseClick(){
  addtransaction(nameInputEl.value, amountInputEl.value, 'expense');
}

//remind disturd function onDeleteClick
function onAlldeleteClick(event){
  var id = parseInt(event.target.getAttributr('data-id'));
  var AlldeleteIndex;
  for (let i = 0; i < state.addtransactions.length; i++) {
    if (state.transactions[i].id === id){
      AlldeleteIndex = i;
      break;
    }
 
  }

  state.transactions.splice(AlldeleteIndex, 1);

  updateState();
  Alldelete();
}


function init() {
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
    table.innerHTML += `<table></table>
    <tbody>
              <tr>
                <th  scope="row">1</th>
                <td>Electrcity</td>
               <td> salary</td>
                <td>R1000</td>
              </tr>
              <tr>
                <th  scope="row">2</th>
                <td>Food</td>
                <td>product</td>
                <td>R250</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Insurance</td>
                <td>Rent</td>
                <td>R750</td>
              </tr>
            </tbody>
    
    </table>`
    
}
}

init();



