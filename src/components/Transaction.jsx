import PropTypes from 'prop-types';
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Transaction = ({ transaction }) => {
 const {  deleteTransaction } = useContext(GlobalContext);

 const sign = transaction.amount < 0 && '-' || '+';


  return (
    <> 
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} 
    key={transaction.id}>{transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
    <button onClick={()=>  deleteTransaction(transaction.id)} className="delete-btn">X</button>
    </li>

    </>
  )
}

// Add prop validations if necessary
Transaction.propTypes = {
    transaction: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
       
    }).isRequired,
  };

export default Transaction
