import Header from './components/Header';
import Balance from './components/Balance';
import ExpenseIncom from './components/ExpenseIncom';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import React from 'react';

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <ExpenseIncom />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
