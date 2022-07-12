var state = {
    balance: 6000,
    income: 0,
    expense: 0,
    names: [],
    Transaction:[
       // {id: uniqueId(), name: 'salary', amount: 6000, type: 'income'},
      // {id: uniqueId(), name: 'Electricity', amount: 240, type: 'expense'},
       // {id: uniqueId(), name: 'Food', amount: 250, type: 'expense'},
    ]


}

var balanceEl = document.guerySelector('#balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionEl = document.getElementById('transaction');


function incomeAdd() {
var names = document.getElementById('name').value

names.push('name')

console.log(state)
}

function expenseAdd() {
}

function init() {
//   console.log('sine')
}

init();


