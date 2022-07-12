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
var incomeEl = document.guerySelector('#income');
var expenseEl = document.guerySelector('#expense');
var transactionEl = document.guerySelector('#transaction');
var incomeBtnEl = document.guerySelector('#incomeBtn');
var expenseBtnEl = document.guerySelector('#expenseBtn');
var nameInputEl = document.guerySelector('#name');
var amountInputEl = document.guerySelector('#amount');


function init(){
    var localstate = JSON.parse(localStorage.getItem)('expenseTrackyourbudget');

    if (localstate !==null){
        state = localstate;
    }
    uppdateState();
    initListeners();
    //render();
}

function unitListeners(){
    incomeBtnEl.addEventListener









    
}









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


