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

function uniqueId(){
    return Math.round(Math.random()*1000000);
}

function initListeners(){
    incomeBtnEl.addEventListener('click', onAdddIncomeClick);
    ExpenseBtnEl.addEventListener('click', onAdddExpenseClick);
}

//Dry -Do not repeat yourself

function onAddIncomeClick(){
    addTransaction(nameInputEl.value, amountInputEl.value, 'income');
}

function addTransaction(name, amount, type){
    var name = nameInputEl.value;
    var amount = amountInput.value;

    if (name !== '' && amount !== ''){
        // console.log('income', nameInputEl.value, amountInputEl.value);
        var Transaction = {id:uniqueId(), name: name, amount: parseInt(amount), type: type}; 

        state.transactions.push(transaction);

        //console.log(state);
        uppdateState();
    }
    else{
        alert("Please see the enter valid data");
    }

    nameInputEl.value = '';
    amountInputEl.value ='';
}

function onAdddExpenseClick(){
    addTransaction(nameInputEl.value, amountInputEl.value, 'expense');
}

function  onDeleteClick(event){
    var id =parseInt(event.target.getAttribute('data-id'));
    var deleteIndex;
    for (let i = 0; i <state.transactions.length; i++) {
        if(state.Transactions[i].id === id) {

       
            deleteIndex = i;
            break;
        }
        
}

state.transactions.splice(deleteIndex, 1);

updateState();

}

function updateState(){
    var balance = 0;
    income = 0;
    expense = 0;
    item;

    for (var i = 0; i < state.transactions.length; i++){
        item = state.transactions[i];

        if (item.type === 'income') {
            income += item.amount;
        }
        else if (item.type === 'expense') {
            expense += item.amount;
        }
    }

    balance = income - expense;

    // console.log(balance, income, expense);
    state.balance = balance;
    state.income = income;
    state.expense = expense;

    localStorage.setitem('expenseTrackerState',JSON.stringify(state));






}




 




{}

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

