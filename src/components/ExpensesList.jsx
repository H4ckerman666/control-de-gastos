import Expense from "./Expense";

const ExpenseList = ({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  expenseFiltered,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {expenses.length ? "Gastos" : "No hay gastos aun en esta categoría"}
          </h2>
          {expenseFiltered.map((expense) => {
            return (
              <Expense
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Gastos" : "No hay Gastos Aun"}</h2>
          {expenses.map((expense) => {
            return (
              <Expense
                key={expense.id}
                expense={expense}
                setEditExpense={setEditExpense}
                deleteExpense={deleteExpense}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
