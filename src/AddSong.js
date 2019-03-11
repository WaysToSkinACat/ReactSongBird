import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const API ="http://35.189.122.126:8888/songBird/api/library/createASong";

class AddSong extends Component {

  constructor() {
    super();
    this.state = {
      songName: "def",
      bPM:"4",
      description: "defLast",
      tubeLink: "www.defult.co"
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
      songName: this.state.songName,
      bPM: this.state.bPM,
      description: this.state.description,
      tubeLink:this.state.tubeLink,
      songs: []

    }).then(res => {
      console.log(res);
      console.log(res.data);
    })

  }
  render() {
    return (
      
      <form className="Card" onSubmit={this.onSubmit}>
        <label htmlFor="songName" ></label>
        <input id="songName" type="text" placeholder="Enter a songName"onChange={this.handleChange} />
        <br></br>
        <label htmlFor="bPM"></label>
        <input id="bPM" type="number" placeholder="Enter your bPM"onChange={this.handleChange} />
        <br></br>
        <label htmlFor="description"></label>
        <input id="description" type="text" placeholder="Enter your description"onChange={this.handleChange} />
        <br></br>
        <label htmlFor="tubeLink"></label>
        <input id="tubeLink" type="tubeLink" placeholder="Enter a tubeLink"onChange={this.handleChange} />
        <br></br>     
        <input className="button" type="submit" value="Submit" position = "center"/>
      </form>

    );
  }


}
export default AddSong;