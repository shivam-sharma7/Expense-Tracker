import  Header  from "./components/Header";
import  Balance  from "./components/Balance";
import  IncomeExpences from "./components/IncomeExpences";
import  TransactionList  from "./components/TransactionList";
import  AddTransaction  from "./components/AddTransaction";
import Footer from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
