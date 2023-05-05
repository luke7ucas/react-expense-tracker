import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // THE LINE ABOVE - define a value that you want to pass down to the child component
  const [filteredYear, setFilteredYear] = useState("2020"); // this is the value that we want to pass up to the parent component
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        {/* pass the value to the child component */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/* THE FOLLOWING IS NO LONGER REQUIRED, AND IS REPLACED BY THE ABOVE CODE 
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
