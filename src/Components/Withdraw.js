import '../App.css';
import React from 'react';
import Card from './Card';
import { UserContext } from './Context';

function Withdraw() {
  const [amount, setAmount] = React.useState('');
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [button, setButton] = React.useState(false);
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.users[ctx.users.length - 1].balance);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function checkWithdrawField(e) {
    if (amount.trim()) {
      setButton(true);
    } else {
      setButton(false);
      if (e.target.id === 'amount' && amount === '') {
        setStatus('Error: Please enter a valid amount');
        setTimeout(() => setStatus(''), 3000);
      }
    }
  }

  function handleWithdraw() {
    if (!validate(amount, 'amount')) return;

    if (isNaN(amount)) {
      setStatus('Error: amount can only contain numbers');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (amount <= 0) {
      setStatus('Error: amount must be greater than 0');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (!validate(button, 'button')) return;
    const user = ctx.users[ctx.users.length - 1];

    if (!user) {
      setStatus('Error: User not found');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (Number(user.balance) < Number(amount)) {
      setStatus('Error: Insufficient funds');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    user.balance = Number(user.balance) - Number(amount);
    setBalance(user.balance);
    ctx.users[ctx.users.length - 1] = user;
    console.table([ctx.users[0]]);
    setShow(false);
  }

  function clearForm() {
    setAmount('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="secondary"
      txtcolor="white"
      header="Withdraw Amount"
      status={status}
      body={show ? (
        <>
          <h2>
            Balance: ${balance}
          </h2>
          Amount
          <br />
          <input
            type="input"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={e => setAmount(e.currentTarget.value)}
            onBlur={checkWithdrawField}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            disabled={!button}
            onClick={handleWithdraw}>Withdraw
          </button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <h2>
            Balance: ${balance}
          </h2>
          <button
            type="submit"
            className="btn btn-light"
            onClick={clearForm}>Make another withdraw
          </button>
        </>
      )}
    />
  );
}

export default Withdraw;
