import React, { useState, useContext } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    const API_URL = process.env.REACT_APP_API_URL

  return (
    <AppContext.Provider value={{todos, setTodos, API_URL }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}