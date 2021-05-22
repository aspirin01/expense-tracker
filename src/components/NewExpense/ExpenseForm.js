import './ExpenseForm.css';
import React,{useState} from 'react';
const ExpenseForm = (props)=>{
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const [enteredTitle,setEnteredTitle]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',

    // })
    const titleChangeEvent = (event)=>{
        setEnteredTitle(event.target.value);
    //     setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle: event.target.value}
    // })
}    
    const amountChangeEvent = (event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
    }
    const dateChangeEvent = (event)=>{
        setEnteredDate(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enteredDate:event.target.value
    //     })
     }
     
     const submitHandler =(event)=>{
        event.preventDefault();
        const expenseData ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        
     }
    
    return (
        <form onSubmit ={submitHandler}>
            <div className ='new-expense__controls'>
                <div className ='new-expense__control'>
                    <label>Title</label>
                    <input type = 'text' value={enteredTitle}  onChange={titleChangeEvent} />
                </div>
                <div className ='new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' min='0.01' step='0.01'value={enteredAmount}  onChange={amountChangeEvent}/>
                </div>
                <div className ='new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' min = '2017-01-01' max='2022-01-01'value={enteredDate} onChange={dateChangeEvent}/>
                </div>
            </div>
            <div className="btn_alignment">
                <div className="new-expense__actions">
                    <button type = 'button' onClick={props.onCancel} >Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;