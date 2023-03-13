import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
