import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const API ="http://35.189.122.126:8888/songBird/api/account/createAccount";

class CreateUser extends Component {

  constructor() {
    super();
    this.state = {
      userName: "def",
      firstName: "defFirst",
      lastName: "defLast",
      email:""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    axios.post(API, {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      songs: []
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })

  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="username" ></label>
        <input id="userName" type="text" placeholder="Enter a Username"onChange={this.handleChange} />
        <br></br><br></br>
        <label htmlFor="firstname"></label>
        <input id="firstName" type="text" placeholder="Enter your Firstname"onChange={this.handleChange} />
        <br></br><br></br>
        <label htmlFor="lastname"></label>
        <input id="lastName" type="text" placeholder="Enter your Lastname"onChange={this.handleChange} />
        <br></br>        <br></br>
        <label htmlFor="email"></label>
        <input id="email" type="email" placeholder="Enter a Email"onChange={this.handleChange} />
        <br></br>        <br></br>        <br></br>        
        <input  type="submit" value="Submit" position = "center"/>
      </form>
    );
  }


}
export default CreateUser;