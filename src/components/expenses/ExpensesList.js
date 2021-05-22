import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem'
const ExpensesList=(props)=>{
    if(props.expenseValues.length===0){
        return <h2 className="expenses-list__fallback ">No expenses found!</h2>
    }
    
   return(
   <ul className='expenses-list'>
{props.expenseValues.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
   )
}
export default ExpensesList;