import PropTypes from 'prop-types';
import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

// initial state
const initialState = {
    transactions: []

}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component to wrap all component
export const GlobalProvider = ({ children }) =>{
 const [state, dispatch] = useReducer(AppReducer, initialState);

 // Action to delete transaction
  const deleteTransaction = (id) =>{
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
  }

  // Action to Add transaction
  const addTransaction = (transactions) =>{
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transactions
    })
  }

 return (

 <GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    
    {children}</GlobalContext.Provider>
 
 );
}

// Add prop validations if necessary
GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired
  };