import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink ,Switch} from "react-router-dom";



import './App.css';
import Library from './Library';
import UpdateSong from './UpdateSong';
import AddSong from './AddSong';
import DeleteSong from './DeleteSong';
import Notfound from './NotFound'

class SongNavBar extends Component {

  constructor() {
    super();
    this.state = {
      songName: "def",
      bPM:"4",
      description: "defLast",
      tubeLink: "www.defult.co"
    }
  }  
  render() {
    return (         

<Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <Library />} />
                <Route path="/UpdateSong" component={props => <UpdateSong />} />
                <Route path="/DeleteSong" component={props  => <DeleteSong />} />
                <Route path="/AddSong" component={props  => <AddSong />} />
                <Route component={Notfound} />
            </main>
        </React.Fragment>
    )}
    />
</Router>



 


    );
  }
  }


export default SongNavBar;