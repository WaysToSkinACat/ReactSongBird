import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import UpdateSong from './UpdateSong';
import AddSong from './AddSong';
import DeleteSong from './DeleteSong';
import './App.css';

class SongNavBar extends Component {



render() {
    return (
        <Router>
            <div>
            <div className="button">
                <NavLink  to="/AddSong">AddSong      </NavLink>

                <NavLink to="/UpdateSong">UpdateSong      </NavLink>

                <NavLink to="/DeleteSong">DeleteSong    </NavLink>
            </div>


            <Switch>
                <Route exact path="/AddSong" component={AddSong} />
                <Route exact path="/UpdateSong" component={UpdateSong} />
                <Route exact path="/DeleteSong" component={DeleteSong} />

            </Switch>
            </div>
        </Router>



    );
}
  }


export default SongNavBar;