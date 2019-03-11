import React from 'react';
import axios from 'axios';

class DeleteSong extends React.Component {
  state = {
    id: "",
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete("http://localhost:8080/songBird/api/library/deleteASong/" + this.state.id)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Song number to delete:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}

export default DeleteSong;