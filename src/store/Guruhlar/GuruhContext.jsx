import React, { createContext } from 'react';
import { useReducer } from 'react';
import { reducer } from './GuruhReducer';
import guruhlarObj from '../../Objects/GuruhlarObj';

export const GroupsContext = createContext()

export const GuruhContext = ({ children }) => {
  const [guruhlar, dispatch] = useReducer(reducer, [...guruhlarObj])

  const removeFunc = (id) => {
    dispatch({ type: 'REMOV', paylod: { id } })
  }

  const value = {
    removeFunc,
    guruhlar,
  }

  return (<GroupsContext.Provider value={value}>{children}</GroupsContext.Provider>);
}

export default GuruhContext;
