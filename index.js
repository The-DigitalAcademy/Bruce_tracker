var state = {
    balance: 5000,
    income: 0,
    expense: 0,
    names: [],
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
var names = document.getElementById('name').value

names.push('name')

console.log(name)
}

function expenseAdd() {
// console.log('Bruce Morakane')
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
                <th scope="row">1</th>
                <td>Electrcity</td>
               <td> salary</td>
                <td>R1000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Food</td>
                <td>product</td>
                <td>R250</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Insurance</td>
                <td>R750</td>
              </tr>
            </tbody>
    
    </table>`
    
}
}

init();



