import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{
    const saveExpenseDataHandler= (enteredExpenseData)=>{
    const expenseData= {
        ...enteredExpenseData,
        id: Math.random().toString()
        };
        props.onSaveExpenseData(expenseData);
        setExpenseState(false )
};
const [expenseState,setExpenseState] = useState(false)
const expenseStateHandler=()=>{
    setExpenseState(true)
}
const stopExpenseStateHandler=()=>{
    setExpenseState(false);
}
    return (
        <div className='new-expense'>
           {!expenseState && <button onClick={expenseStateHandler}>Add New Expense</button>}
            {expenseState &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopExpenseStateHandler} />}
        </div>
    )
}
export default NewExpense;