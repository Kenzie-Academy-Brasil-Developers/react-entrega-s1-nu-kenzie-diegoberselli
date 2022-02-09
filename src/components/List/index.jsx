import Card from "../Card";
import "./style.css";

function List({ listTransactions }) {
  return (
    <div className="list">
      <header>
        <h2>Resumo Financeiro</h2>
        <div>
          <button className="btn-todos">Todos</button>
          <button className="btn-geral">Entradas</button>
          <button className="btn-geral">Despesas</button>
        </div>
      </header>

      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </div>
  );
}

export default List;
