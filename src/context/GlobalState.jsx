import React, { createContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'

// Initial state
const initialState = {
  transactions: []
}

// Create Context 
export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await fetch('http://localhost:5000/transactions');
      const transactions = await res.json();
     
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: transactions
      })
    } catch (error) {
      console.log(error.message);
    }
  }


  async function deleteTransaction(id) {
    try {
      await fetch(`http://localhost:5000/transactions/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
      dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
    } catch (error) {
      console.log(error.message);
    }
    
  }

  async function addTransaction(transaction) {
    try {
      const { text, amount } = transaction;
      const res = await fetch('http://localhost:5000/transactions', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ text, amount })
      });
      const data = await res.json();
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: data
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  return (<GlobalContext.Provider value={ {
    transactions: state.transactions,
    getTransactions,
    deleteTransaction,
    addTransaction
  } }>
    {children}
    </GlobalContext.Provider>);
}


