import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionList,
} from './components';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Header title={'Expense Tracker'} />
      <div className="container">
        <Balance title={'Your Balance'} />
        <IncomeExpenses />
        <TransactionList title={'History'} />
        <AddTransaction title={'Add new transaction'} />
      </div>
    </GlobalProvider>
  );
};

export default App;
