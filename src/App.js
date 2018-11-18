import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectCreate from './components/projects/ProjectCreate';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component ={Dashboard}/>
            <Route path='/project/:id' component ={ProjectDetails}/>
            <Route path='/login' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={ProjectCreate}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
