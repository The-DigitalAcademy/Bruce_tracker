var state = {
<<<<<<< HEAD
    balance: 0,
    income: 0,
    expense: 0,
    names: [],
    history: [
         {name:'name', amount: 0, type: 'income'},  
         {name:'name', amount: 0, type: 'expense'},         
    ]
}

var balanceEl = document.getElementById('balance');
var incomeEl = document.getElementById('income');
var expenseEl = document.getElementById('expense');
var transactionEl = document.getElementById('transaction');


=======
    balance: 6000,
    income: 200,
    expense: 1500,
    names: [],
    Transaction:[
       // {id: uniqueId(), name: 'salary', amount: 6000, type: 'income'},
      // {id: uniqueId(), name: 'Electricity', amount: 240, type: 'expense'},
       // {id: uniqueId(), name: 'Food', amount: 250, type: 'expense'},
    ]


}

var balanceEl = document.guerySelector('balance');
var incomeEl = document.guerySelector('income');
var expenseEl = document.guerySelector('expense');
var transactionEl = document.guerySelector('transaction');



function displayscreen()
    income.innerHTML = `R${state.income}`
    expense.innerHTML = `R${state.expense}`
    expense.innerHTML = `R${state.expense}`

    

    displayscreen()


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

    render();

}

function render(){
    balanceEl.innerHTML = `R${state.balance}`;
    incomeEl.innerHTML = `R${state.income}`;
    expenseEl.innerHTML = `R${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;
    
    transactionEl.innerHTML ='';

    for (let i = 0; i < state.transactions.length; i++){
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income'){
            amountEl.classList.add('income-amt');
        }
        else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `R${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.setAttribute('data-id', item.id);
        btnEl.innerHTML = 'X';

        btnEl.addEventListener('click', onDeleteClick);

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);

    }



}








 




{}

>>>>>>> edc7cf25d076ddfc6f8516661d2adde142f40eee
function incomeAdd() {
var names = document.getElementById('name').value

names.push('name')

<<<<<<< HEAD
console.log(name)
}

function expenseAdd() {
// console.log('Bruce Morakane')
=======
console.log(state)
}

function expenseAdd() {
>>>>>>> edc7cf25d076ddfc6f8516661d2adde142f40eee
}

function init() {
//   console.log('sine')
}

<<<<<<< HEAD
init();



=======
>>>>>>> edc7cf25d076ddfc6f8516661d2adde142f40eee
