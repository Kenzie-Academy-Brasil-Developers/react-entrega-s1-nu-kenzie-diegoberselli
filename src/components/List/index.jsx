import Card from "../Card";
import { FaTrash } from "react-icons/fa";
import "./style.css";

function List({ transactions }) {
  return (
    <div className="list">
      <header>
        <h2>Resumo Financeiro</h2>
        <div>
          <button className="btn-todos">Todos</button>
          <button>Entradas</button>
          <button>Saidas</button>
        </div>
      </header>
      {transactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </div>
  );
}

export default List;
