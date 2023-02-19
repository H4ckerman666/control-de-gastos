import BudgetManager from "./BudgetManager";
import Presupuesto from "./Presupuesto";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  setExpenses,
  expenses,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidBudget ? (
        <BudgetManager
          budget={budget}
          expenses={expenses}
          setBudget={setBudget}
          setExpenses={setExpenses}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <Presupuesto
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
