import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from './ExpensesList'
import Card from "../UI/Card";
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [yearValue, setYearValue] = useState("2020");
  const inputYear = (year) => {
    setYearValue(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter inputYearHandler={inputYear} yearSelected={yearValue} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList expenseValues ={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found!</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}; */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
  {filteredExpenses.length >0 && 
     filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
   */}
      </Card>
    </div>
  );
}
export default Expenses;
