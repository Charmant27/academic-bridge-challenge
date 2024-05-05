import React, { useState, useContext } from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [mode, setMode] = useState("light")

  const API_URL = process.env.REACT_APP_API_URL

  const toggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <AppContext.Provider value={{ todos, setTodos, API_URL, toggle, mode }}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }