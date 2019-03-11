import React, { Component } from 'react';

import './App.css';
import CreateUser from './CreateUser';


class Homepage extends Component {

  render() {


    return (
      <div className="container">
        <h1>Sign up for our newsletter</h1>


        <CreateUser />


      </div>
    );
  }
}

export default Homepage;