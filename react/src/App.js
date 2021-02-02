import React from "react";
import Header from './components/Header';
import ListEmployees from './components/ListEmployees';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container"> 
          <Switch>
            <Route exact path="/" component={ListEmployees}></Route>
            <Route path="/employees" component={ListEmployees}></Route>
            <Route path="/addEmployees" component={AddEmployee}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
