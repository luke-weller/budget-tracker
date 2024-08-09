import React, { useState } from "react";
import IncomeInput from "./components/RegularIncome/RegularIncome";
import ExpensesInput from "./components/RegularExpenses/RegularExpenses";
import Result from "./components/DisplayResults/DisplayResults";
import "./App.css";

const App: React.FC = () => {
  const [incomes, setIncomes] = useState<number[]>([]);
  const [expenses, setExpenses] = useState<number[]>([]);

  const handleAddIncome = (value: number) => {
    setIncomes([...incomes, value]);
  };

  const handleAddExpense = (value: number) => {
    setExpenses([...expenses, value]);
  };

  const handleRemoveIncome = (index: number) => {
    setIncomes(incomes.filter((_, i) => i !== index));
  };

  const handleRemoveExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const calculateLeftover = (): number => {
    const totalIncome = incomes.reduce((acc, curr) => acc + curr, 0);
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);
    return totalIncome - totalExpenses;
  };

  return (
    <div className="App">
      <h1>Budget Tracker</h1>
      <div className="input-section">
        <IncomeInput onAddTransaction={handleAddIncome} />
        <ExpensesInput onAddTransaction={handleAddExpense} />
      </div>
      <Result leftover={calculateLeftover()} />
      <div className="list-section">
        <div className="list-container">
          <h2>Regular Income</h2>
          <ul>
            {incomes.map((income, index) => (
              <li key={index}>
                ${income}{" "}
                <button onClick={() => handleRemoveIncome(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list-container">
          <h2>Regular Expenses</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                ${expense}{" "}
                <button onClick={() => handleRemoveExpense(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
