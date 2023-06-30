import  Header  from "./components/Header";
import  Balance  from "./components/Balance";
import  IncomeExpences from "./components/IncomeExpences";
import  TransactionList  from "./components/TransactionList";
import  AddTransaction  from "./components/AddTransaction";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
