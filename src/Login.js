import React, { Component } from 'react';

import './App.css';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }

render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter username: </label>
        <input id="username" name="username" type="text" />
        <br></br>
        <label htmlFor="password">Enter your Password: </label>
        <input id="password" name="password" type="text" />
        <br></br>
        <button >Login</button>
      </form>
    );
  }
}

export default Login;