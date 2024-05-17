import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
// import Test from './test'
// import LoggedIn from './test/loggedIn';
// import Logout from './test/logout';
// import BoxView from './boxView';
// import VoterList from './VotersList';
import OtpInput from './otp-input';
export const MainContext = React.createContext();

const App = () => {
 
  return (
    <div className="app">
      {/* <VoterList/> */}
      <OtpInput/>
    </div>
  );
}

export default App;
