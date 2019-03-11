import React, { Component } from 'react';
import Library from './Library.js';

import SongNavBar from './SongNavBar';
import './App.css';

class SongLibrary extends Component {
  render() {
    return (
      <div className="container">

<Library/>
<SongNavBar/>


      </div>
    );
  }
}

export default SongLibrary;