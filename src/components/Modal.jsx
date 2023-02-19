import { useState, useEffect } from "react";
import Message from "../components/Message";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({
  handleCloseModal,
  animateModal,
  saveExpense,
  editExpense,
}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    if (!editExpense) {
      return;
    }
    setName(editExpense.name);
    setAmount(editExpense.amount);
    setCategory(editExpense.category);
  }, []);

  const handleAddExpense = (e) => {
    e.preventDefault();
    if ([name, amount, category].includes("")) {
      console.log("Fallo la validación");
      setMessage("Todos los campos son obligatorios");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    saveExpense({ name, amount, category, id: editExpense.id });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="cerrar modal"
          onClick={() => handleCloseModal()}
        />
      </div>
      <form
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
        onSubmit={handleAddExpense}
      >
        <legend>{editExpense.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        {message && <Message type="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Nombre del Gasto</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Añade el Nombre del Gasto"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Cantidad</label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Añade la Cantidad del Gasto: ej 500"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">---Seleccione---</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="house">Casa</option>
            <option value="expenses varios">Gastos Varios</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="subs">Suscripciones</option>
          </select>
        </div>
        <input
          type="submit"
          value={editExpense.name ? "Actualizar Gasto" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
