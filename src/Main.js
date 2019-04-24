import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import Patients from "./Patients";
import Medication from "./Medication";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>PHARMACY</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/patients">Patients</NavLink>
            </li>
            <li>
              <NavLink to="/medication">Medication</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/patients" component={Patients} />
            <Route path="/medication" component={Medication} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
