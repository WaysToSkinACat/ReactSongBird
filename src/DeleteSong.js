import React from 'react';
import axios from 'axios';
const API ="http://35.189.122.126:8888/songBird/api/account/library/deleteASong/";
class DeleteSong extends React.Component {
  state = {
    id: "",
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(API + this.state.id)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form className="Card" onSubmit={this.handleSubmit}>
          <label htmlFor="Delete Song"></label>
            <input type="text" name="id" placeholder="Delete Song Number:" onChange={this.handleChange} />
          <br></br>
           <input className="button" type="submit" value="Delete" position = "center"/>
        </form>
      </div>
    )
  }
}

export default DeleteSong;