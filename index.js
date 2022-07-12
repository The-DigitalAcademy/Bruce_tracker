var state = {
    balance: 6000,
    income: 0,
    expense: 0,
    names: [],
    Transaction:[
              
    ]
}

var balanceEl = document.getElementById('balance');
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


