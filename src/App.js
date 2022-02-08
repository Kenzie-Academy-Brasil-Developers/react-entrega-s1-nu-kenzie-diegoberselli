import './App.css';
import {useState} from  "react";
import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';
import TotalMoney from './components/TotalMoney';


function App() {
  const [listTransaction, setListTransactions] = useState([])


  return (

    <div className="App">
      <Header/>
      <div className='Container'>
        <div>
            <Form listTransaction = {listTransaction} setListTransactions = {setListTransactions}/>
            <TotalMoney transactions = {listTransaction} /> 
          
        </div>  
            <List transactions={listTransaction} />
      </div>
    </div>
  );
}

export default App

