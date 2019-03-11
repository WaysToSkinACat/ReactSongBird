import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

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
        <h2 className="title">SongBird Music Library</h2>
            <NavLink exact to="/">Home</NavLink>

            <NavLink to="/About">About</NavLink>

            <NavLink to="/SongLibrary">Song Library</NavLink>

          </div>


          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/SongLibrary" component={SongLibrary} />
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