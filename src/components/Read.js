import React, { Component } from 'react';
import '../App.css'
import Movies from './Movies';
import axios from 'axios';

export class Read extends Component {
    
    state={
        movies: [ ]//End of Array

    };//End of state

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({movies: response.data.movies});
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                <h2>Movies</h2>
                <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}
export default Read;