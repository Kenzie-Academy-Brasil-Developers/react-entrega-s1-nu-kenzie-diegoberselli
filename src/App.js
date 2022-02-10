import './App.css';
import {useState} from  "react";
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';
import TotalMoney from './components/TotalMoney';


function App() {
  const [listTransaction, setListTransactions] = useState([]);
  const [filtrados, setFiltrados] = useState(listTransaction)

  return (

    <div className="App">
      <Header/>
      <div className='Container'>
        <div className='form-container'>
            <Form listTransaction = {listTransaction} setListTransactions = {setListTransactions} setFiltrados={setFiltrados} filtrados={filtrados}/>
            <TotalMoney listTransactions={listTransaction} /> 
          
        </div>  
            <List listTransactions={listTransaction} filtrados={filtrados} setFiltrados={setFiltrados} setListTransactions={setListTransactions}/>
      </div>
    </div>
  );
}

export default App

