import { FaTrash } from "react-icons/fa";
import "./style.css";

function Card({ transaction, remove, name }) {
  return (
    <>
      {transaction.type === "Entrada" ? (
        <div className="Card-green">
          <div className="left">
            <h3>{transaction.description}</h3>
            <p>{transaction.type}</p>
          </div>
          <div className="right">
            <p>
              <span>R$</span>{" "}
              {transaction.value < 0
                ? transaction.value * -1
                : transaction.value}
            </p>
            <button className="btn-trash" onClick={() => remove(name)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ) : (
        <div className="Card">
          <div className="left">
            <h3>{transaction.description}</h3>
            <p>{transaction.type}</p>
          </div>
          <div className="right">
            <p>
              <span>R$</span>{" "}
              {transaction.value < 0
                ? transaction.value * -1
                : transaction.value}
            </p>
            <button className="btn-trash" onClick={() => remove(name)}>
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
