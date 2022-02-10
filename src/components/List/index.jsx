import Card from "../Card";
import "./style.css";

function List({ listTransactions, setListTransactions , filtrados, setFiltrados}) {

function filtroType(text){
    setFiltrados( text === 'Todos' ? listTransactions : listTransactions.filter(item => item.type === text))
}


function remove(index){
  
  const deleta = listTransactions.filter((item,index2)=>index2!==index)
  setFiltrados(deleta)
  setListTransactions(deleta)
 
}

  return (
    <div className="list">
      <header>
        <h2>Resumo Financeiro</h2>
        <div>
          <button className="btn-todos" onClick={() => filtroType("Todos")}>Todos</button>
          <button className="btn-geral" onClick={() => filtroType("Entrada")}>Entradas</button>
          <button className="btn-geral" onClick={() => filtroType("Despesas")}>Despesas</button>
        </div>
      </header>
    
      {filtrados.map((transaction, index) => (
        <Card transaction={transaction}  name={index} key={index} remove={remove}/>
      ))}
    </div>
  );
}

export default List;
