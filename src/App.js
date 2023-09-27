import './App.css';
import {HashRouter,Route} from "react-router-dom";
import React from 'react';
import NavBar from './Components/NavBar';
import CreateAccount from './Components/CreateAccount';
import Home from './Components/Home';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import AllData from './Components/AllData';
import { UserContext } from './Components/Context';

function App() {
  return (
    <div className="App">
      <div className="container">    
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: [{ name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 }] }}>
      <div className="container d-flex centerContent" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home}/>
          <Route path="/CreateAccount/" component={CreateAccount}/>
          <Route path="/Deposit/" component={Deposit}/>
          <Route path="/Withdraw/" component={Withdraw}/>
          <Route path="/AllData/" component={AllData}/>
        </div>
      </UserContext.Provider>
    </HashRouter>
    </div>
    </div>
  );
}

export default App;

