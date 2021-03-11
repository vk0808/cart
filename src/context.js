import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type:'CLEAR_CART'})
  }

  const remove = (id) => {
    dispatch({type:'REMOVE', payload:id})
  }

  const increase = (id) => {
    dispatch({type:'INCREASE', payload:id})
  }

  const decrease = (id) => {
    dispatch({type:'DECREASE', payload:id})
  }

  return <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
