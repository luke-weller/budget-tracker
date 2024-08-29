import { useState, FC, ChangeEvent, KeyboardEvent } from "react";
import { TransactionInputProps } from "../../interfaces";

const ExpensesInput: FC<TransactionInputProps> = ({ onAddTransaction }) => {
  const [expense, setExpense] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setExpense(value);
    }
  };

  const handleAdd = () => {
    const expenseValue = parseFloat(expense);
    if (!isNaN(expenseValue)) {
      onAddTransaction(expenseValue);
      setExpense("");
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <label>Expenses: </label>
      <input
        type="text"
        value={expense}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter expense"
      />
      <button onClick={handleAdd}>Add Expense</button>
    </div>
  );
};

export default ExpensesInput;
