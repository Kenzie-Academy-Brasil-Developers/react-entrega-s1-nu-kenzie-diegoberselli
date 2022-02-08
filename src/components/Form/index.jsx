import { useState } from "react";
import "./style.css";

function Form({ listTransaction, setListTransactions }) {
  const [input, setInput] = useState({
    description: "",
    type: "entrada",
    value: 0,
  });

  function addTransaction(input) {
    typeof input.value != "number"
      ? (input.value = parseInt(input.value))
      : (input.value = input.value);
    setListTransactions([...listTransaction, input]);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Descrição
        <input
          placeholder="Digite aqui sua descrição"
          value={input.description}
          onChange={(event) =>
            setInput({ ...input, description: event.target.value })
          }
        />
      </label>
      <div>
        <label>
          Valor
          <input
            type="number"
            placeholder="R$"
            value={input.value}
            onChange={(event) =>
              setInput({ ...input, value: event.target.value })
            }
          />
        </label>
        <label>
          Tipo de Valor
          <select
            value={input.type}
            onChange={(event) =>
              setInput({ ...input, type: event.target.value })
            }
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </label>
      </div>

      <button className="btn-form" onClick={() => addTransaction(input)}>
        Inserir Valor
      </button>
    </form>
  );
}

export default Form;
