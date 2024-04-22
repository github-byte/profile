import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './test'
import LoggedIn from './test/loggedIn';
import Logout from './test/logout';
export const MainContext = React.createContext();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const contextValues = {
    setLoggedIn,
    setName,
    name,
    setPassword,
    password
  }
  return (<MainContext.Provider value={contextValues}>
    <div className="app">
      {loggedIn ? <LoggedIn/> : <Logout/>}
    </div>
  </MainContext.Provider>
  );
}

export default App;
