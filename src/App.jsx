import "./App.css";
import  Header  from "./components/Header";
import  Balance  from "./components/Balance";
import  IncomeExpences from "./components/IncomeExpences";
import  TransactionList  from "./components/TransactionList";
import  AddTransaction  from "./components/AddTransaction";

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
