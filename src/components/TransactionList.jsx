import { useContext } from 'react';
import { Transaction } from './';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = ({ title }) => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>{title}</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
