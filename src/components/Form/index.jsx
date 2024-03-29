import { useState } from "react";
import "./style.css";

function Form({ listTransaction, setListTransactions, setFiltrados, filtrados}) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState(0);
  const addObject = { description, type, value };

  function addTransaction() {
    if (addObject.type === "Despesas") {
      addObject.value *= -1;
    }
    setListTransactions([...listTransaction, addObject]);
    setFiltrados([...filtrados, addObject]);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Descrição
        <input
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <div>
        <label>
          Valor
          <input
            type="number"
            placeholder="R$"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </label>
        <label>
          Tipo de Valor
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesas">Despesas</option>
          </select>
        </label>
      </div>

      <button className="btn-form" onClick={() => addTransaction()}>
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
