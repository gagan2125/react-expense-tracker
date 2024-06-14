import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const AddTransactions = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransactions = {
      id: Math.floor(Math.random()*10000000),
      text:text,
      amount:+amount
    }
    addTransaction(newTransactions)
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label for="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransactions
