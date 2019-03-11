import React, { Component } from 'react';

import './App.css';
import CreateUser from './CreateUser';


class Homepage extends Component {

  render() {
    const { params } = this.props.match

    return (
      <div className="App-header">
        <h1>Sign up for our newsletter</h1>
        <p>{params.id}</p>

        <CreateUser/>


      </div>
    );
  }
}

export default Homepage;