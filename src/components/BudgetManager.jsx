import { useEffect, useState } from "react";
import RadialBar from "./Chart";

const BudgetManager = ({
  budget,
  expenses,
  setBudget,
  setExpenses,
  setIsValidBudget,
}) => {
  const [availableBudget, setAvailableBudget] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleReset = () => {
    const answer = confirm("¿Estas seguro de reiniciar?");
    if (!answer) {
      return;
    }
    setBudget(0);
    setExpenses([]);
    setIsValidBudget(false);
  };
  useEffect(() => {
    const spent = expenses.reduce(
      (total, currentElement) => currentElement.amount + total,
      0
    );
    let percent = ((spent / budget) * 100).toFixed(2);
    percent = percent ? percent : 0;
    setPercent(percent);
    setSpent(spent);
    setAvailableBudget(budget - spent);
  }, [expenses]);

  const amountFormatter = (amount) => {
    return amount.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <RadialBar
          percent={percent}
          color={availableBudget < 0 ? "#dc2626" : "#2E93fA"}
        />
      </div>
      <div className="contenido-presupuesto">
        <div className="contenido-presupuesto">
          <button type="button" className="reset-app" onClick={handleReset}>
            Reiniciar App
          </button>
          <p>
            <span>Presupuesto:</span>
            {amountFormatter(budget)}
          </p>
        </div>
        <div className="contenido-presupuesto">
          <p>
            <span>Gastado:</span>
            {amountFormatter(spent)}
          </p>
        </div>
        <div className="contenido-presupuesto">
          <p className={availableBudget < 0 ? "negativo" : ""}>
            <span>Disponible:</span>
            {amountFormatter(availableBudget)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;
