import "./style.css";

function TotalMoney({ listTransactions }) {
  // const filter = listTransactions.filter((item) => item.type === "Entrada");

  const valorTot = listTransactions.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="total">
      <p>Valor Total</p>
      <p>
        <span>{valorTot}</span>
      </p>
    </div>
  );
}

export default TotalMoney;
