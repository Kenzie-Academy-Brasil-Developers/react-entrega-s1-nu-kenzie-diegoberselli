import "./style.css";

function TotalMoney({ listTransactions }) {
  function valorTotal() {
    const entrada = listTransactions.filter((item) => item.type === "Entrada");
    return entrada.reduce((acc, curr) => acc + curr.value, 0);
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
