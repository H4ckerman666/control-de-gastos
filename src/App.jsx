import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import { setId } from "./helpers";
import NewExpense from "./img/nuevo-gasto.svg";
import Filter from "./components/Filter";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) ?? []
  );
  const [editExpense, setEditExpense] = useState(false);
  const [filter, setFilter] = useState("");
  const [expenseFiltered, setExpenseFiltered] = useState([]);

  const handleModal = () => {
    setModal(true);
    setEditExpense({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };
  const saveExpense = (expense) => {
    expense.date = Date.now();
    if (expense.id) {
      const updateExpenses = expenses.map((element) =>
        element.id === expense.id ? expense : element
      );
      setExpenses([...updateExpenses]);
    } else {
      expense.id = setId();
      setExpenses([...expenses, expense]);
    }
    handleCloseModal(false);
  };
  const deleteExpense = (id) => {
    const updateExpenses = expenses.filter((element) => element.id !== id);
    setExpenses([...updateExpenses]);
  };

  const handleCloseModal = () => {
    setEditExpense({});
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  useEffect(() => {
    const budget = Number(localStorage.getItem("budget") ?? 0);
    if (budget > 0) {
      setBudget(budget);
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    if (!editExpense) {
      return;
    }
    handleModal();
    setEditExpense(editExpense);
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (!filter) {
      return;
    }
    setExpenseFiltered(
      expenses.filter((element) => element.category === filter)
    );
  }, [filter]);

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        budget={budget}
        setExpenses={setExpenses}
        expenses={expenses}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <Filter filter={filter} setFilter={setFilter} />
            <ExpensesList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              expenseFiltered={expenseFiltered}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={NewExpense} alt="Nuevo Gasto" onClick={handleModal} />
          </div>
        </>
      )}
      {modal && (
        <Modal
          handleCloseModal={handleCloseModal}
          animateModal={animateModal}
          saveExpense={saveExpense}
          editExpense={editExpense}
        />
      )}
    </div>
  );
}

export default App;
