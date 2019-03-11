import React, { Component } from 'react';
import axios from 'axios';
// import SearchBar from './SearchBar'
import List from './LoadingHOCL'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const API ="http://35.189.122.126:8888/songBird/api/library/getAllSongs";


class Library extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            store: []
        }
    }

    componentDidMount() {
        axios.get(API)
            .then(res => {
                const persons = res.data;
                this.setState({ persons: res.data, store: res.data ,})

            })
        }

    // filterNames(e) {
    //     this.setState({ persons: this.state.store.filter(item => item.songName.toLowerCase().includes(e.target.value.toLowerCase())) })
    // }

    render() {
        const { store } = this.state
        return (
            <div className="Card">
                <div className="header">Songs in the Database</div>
                {/* <SearchBar searchFunc={(e) => this.filterNames(e)} /> */}

                <List usernames={store} />



            </div>
        )
    }
}

export default Library;