import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class UpdateSong extends Component {

  constructor() {
    super();
    this.state = {
      songId: "",
      songName: "",
      bPM: "",
      description: "",
      tubeLink: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/songBird/api/library/updateASong/" + this.state.songId, {
      songId: this.state.songId,
      songName: this.state.songName,
      bPM: this.state.bPM,
      description: this.state.description,
      tubeLink: this.state.tubeLink,
      songs: []
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <label htmlFor="songId" ></label>
        <input id="songId" type="text" placeholder="Enter the song number to update" onChange={this.handleChange} />
        <br></br><br></br>

        <label htmlFor="songName" ></label>
        <input id="songName" type="text" placeholder="Enter a songName" onChange={this.handleChange} />
        <br></br><br></br>
        <label htmlFor="bPM"></label>
        <input id="bPM" type="text" placeholder="Enter your bPM" onChange={this.handleChange} />
        <br></br><br></br>
        <label htmlFor="description"></label>
        <input id="description" type="text" placeholder="Enter your description" onChange={this.handleChange} />
        <br></br>        <br></br>
        <label htmlFor="tubeLink"></label>
        <input id="tubeLink" type="tubeLink" placeholder="Enter a tubeLink" onChange={this.handleChange} />
        <br></br>        <br></br>        <br></br>
        <input type="submit" value="Submit" position="center" />
      </form>
    );
  }


}
export default UpdateSong;