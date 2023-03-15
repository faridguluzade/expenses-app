import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const clearInput = () => {
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  const expenseChangeHandler = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      ...expense,
      date: new Date(expense.date),
    };

    onSaveExpenseData(expenseData);
    setIsEditing(false);
    clearInput();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={expenseChangeHandler}
            value={expense.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={expenseChangeHandler}
            value={expense.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            name="date"
            onChange={expenseChangeHandler}
            value={expense.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={stopEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );
};

export default ExpenseForm;
