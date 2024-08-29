import { useState, FC, ChangeEvent, KeyboardEvent } from "react";
import { TransactionInputProps } from "../../interfaces";

const IncomeInput: FC<TransactionInputProps> = ({ onAddTransaction }) => {
  const [income, setIncome] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setIncome(value);
    }
  };

  const handleAdd = () => {
    const incomeValue = parseFloat(income);
    if (!isNaN(incomeValue)) {
      onAddTransaction(incomeValue);
      setIncome("");
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <label>Income: </label>
      <input
        type="text"
        value={income}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter income"
      />
      <button onClick={handleAdd}>Add Income</button>
    </div>
  );
};

export default IncomeInput;
