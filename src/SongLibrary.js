import React, { Component } from 'react';
import Library from './Library.js';
import AddSong from './AddSong.js';
import DeleteSong from './DeleteSong.js';
import UpdateSong from './UpdateSong.js';

import './App.css';

class SongLibrary extends Component {
  render() {
    return (
      <div className="App">
<Library/>
<AddSong/>
<DeleteSong/>
<UpdateSong/>

      </div>
    );
  }
}

export default SongLibrary;