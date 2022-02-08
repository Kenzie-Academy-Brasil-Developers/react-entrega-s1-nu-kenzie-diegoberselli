import "./style.css";

function TotalMoney({ transactions }) {
  function valorTotal() {
    return transactions.reduce((acc, curr) => acc + curr.value, 0);
  }

  return (
    <div className="total">
      <p>Valor Total</p>
      <p>
        <span>$</span>
        {valorTotal()}
      </p>
    </div>
  );
}

export default TotalMoney;
