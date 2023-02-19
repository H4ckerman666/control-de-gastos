import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { dateFormatter } from "../helpers";
import SavingIcon from "../img/icono_ahorro.svg";
import FoodIcon from "../img/icono_comida.svg";
import HouseAIcon from "../img/icono_casa.svg";
import ExpensesIcon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SubsIcon from "../img/icono_suscripciones.svg";

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const mapIcon = {
    saving: SavingIcon,
    food: FoodIcon,
    house: HouseAIcon,
    expenses: ExpensesIcon,
    leisure: LeisureIcon,
    health: HealthIcon,
    subs: SubsIcon,
  };
  const { category, name, amount, id, date } = expense;

  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => setEditExpense(expense)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    );
  };
  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={mapIcon[category]} alt="category" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">Agregado el: {dateFormatter(date)}</p>
            </div>
          </div>
          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
