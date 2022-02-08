import { FaTrash } from "react-icons/fa";
import "./style.css";

function Card({ transaction }) {
  return (
    <div className="Card">
      <div className="left">
        <h3>{transaction.description}</h3>
        <p>{transaction.type}</p>
      </div>
      <div>
        <p className="right">
          <span>R$</span> {transaction.value}
        </p>
        <button className="btn-trash">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Card;
