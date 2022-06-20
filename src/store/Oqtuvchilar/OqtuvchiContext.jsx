import React, { createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import oqtuvchiObj from '../../Objects/OqtuvchiObj'

export const TheacherContext = createContext()

export const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "REMOV":
        return state.filter(itm => itm.oqtuvchiID !== action.paylod.id)
      case "EDIT":
        return [
          ...state, state.map(itm => {
            if (itm.oqtuvchiID === action.paylod.id) {

            }
          })
        ]
      case "ADDTHEACHER":
        return [
          ...state, action.paylod.obj
        ]
    }
  }

  const [oqtuvchilar, dispatch] = useReducer(reducer, [...oqtuvchiObj])
  const [editID, setEitdID] = useState()

  const removeFunc = (id) => {
    dispatch({ type: 'REMOV', paylod: { id } })
  }

  const editFunc = (obj) => {
    dispatch({ type: 'EDIT', paylod: { obj } })
  }

  const addTheacherFunc = (obj) => {
    dispatch({ type: 'ADDTHEACHER', paylod: { obj } })
  }

  const value = {
    editID,
    setEitdID,
    editFunc,
    removeFunc,
    addTheacherFunc,
    oqtuvchilar,
  }

  return <TheacherContext.Provider value={value}>{children}</TheacherContext.Provider>
}
