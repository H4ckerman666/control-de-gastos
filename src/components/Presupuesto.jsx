import { useState } from "react";
import Message from "./Message";

const presupuesto = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");
  const handleBudget = (e) => {
    e.preventDefault();
    if (!budget || budget < 0) {
      setMessage("No es un presupuesto valido");
      return;
    }
    setMessage("");
    setIsValidBudget(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleBudget}>
        <div className="campo">
          <label htmlFor="budget">Definir Presupuesto</label>
          <input
            id="budget"
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <input type="submit" value="Añadir" />
        </div>
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default presupuesto;
