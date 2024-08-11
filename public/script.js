let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementById('category_select')
const amountInput = document.getElementById('amount_input')
const dateInput = document.getElementById('date_input')
const Info = document.getElementById('info')
const addBtn = document.getElementById('add_btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const info = Info.value;
    const amount = Number(amountInput.value);
    const date= dateInput.value;

    if(category === ''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('please enter a valid amount');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    if(info ===''){
        alert('please select a valid info');
        return;
    }
    expenses.push({category,amount,date,info})
    if(category === 'Income'){
        totalAmount += amount;
    }
    if(category === 'Expense'){
        totalAmount -= amount;
    }
    totalAmountCell.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const InfoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        if(category === 'Income'){
            totalAmount += amount;
        }
        if(category === 'Expense'){
            totalAmount -= amount;
        }
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(new Row);
    })
    const expense= expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    InfoCell.textContent=expense.info;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

});
for(const exepense of expenses){

    if(category === 'Income'){
        totalAmount += amount;
    }
    if(category === 'Expense'){
        totalAmount -= amount;
    }
    totalAmountCell.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const InfoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        if(category === 'Income'){
            totalAmount += amount;
        }
        if(category === 'Expense'){
            totalAmount -= amount;
        }
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(new Row);
    })
     
       
    const expense= expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    InfoCell.textContent=expense.info;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
}