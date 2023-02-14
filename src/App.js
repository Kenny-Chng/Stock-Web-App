import React from "react"
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

import './App.css';
import NavigationBar from "./Components/NavigationBar";
import displayPage from "./Components/pages/displayPage";

import Stock from "./Components/pages/Stock";

import Aboutme from "./Components/pages/Aboutme";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
    <Route path = "/" exact component = {displayPage}/>
    <Route path = "/stock"  component = {Stock}/>
      </Switch>
    
    </Router>

  );
}

export default App;
