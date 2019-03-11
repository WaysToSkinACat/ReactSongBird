import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink ,Switch} from "react-router-dom";

import './App.css';
import Homepage from './Homepage';
import SongLibrary from './SongLibrary';
import About from './About';
import Notfound from './NotFound'

class NavBar extends Component {
  render() {
    return (
    <Router>
      <div className="grid-container">

        <div className="topnav">

          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/SongLibrary">SongLibrary</NavLink>
          <NavLink to="/About">About</NavLink>

        </div>


      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/SongLibrary" component={SongLibrary} />
        <Route exact path="/About" component={About} />
        <Route component={Notfound} />
      </Switch>
        <div>


        </div>
      </div>
</Router>

    );

  }
}

export default NavBar;