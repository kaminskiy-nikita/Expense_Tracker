import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const ExpenseIncom = () => {
  const { transactions } = useContext(GlobalContext);

  const incomeTransactions = transactions.filter((tansaction) => tansaction.amount > 0);
  const incomeTotal = incomeTransactions.reduce((acc, cur) => acc + cur.amount, 0).toFixed(2);

  const expenseTransactions = transactions.filter((tansaction) => tansaction.amount < 0);
  const expenseTotal = Math.abs(expenseTransactions.reduce((acc, cur) => acc + cur.amount, 0)).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${incomeTotal}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expenseTotal}</p>
        </div>
      </div>
  )
}

export default ExpenseIncom

