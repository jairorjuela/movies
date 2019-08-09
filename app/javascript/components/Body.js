import React from 'react'
import NewMovie from './NewMovie'
import AllMovies from './AllMovies'

class Body extends React.Component{

  constructor(){
    super()
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('/v1/movies.json')
    .then(function(response) {
      return response.json();
    })
    .then((all_movies) => {
      this.setState({
        movies: all_movies
      })
    })
    .catch(error => console.log(error))
  }

  handleSubmit(movie) {
    var newState = this.state.movies.concat(movie);
    this.setState({ movies: newState })
  }

  removeMovie = (id) => {
    console.log("SSSSS");
    var newMovies = this.state.movies.filter((movie) => {
      return movie.id != id;
    });
    this.setState({ movies: newMovies });
  }

  handleUpdate(movie) {
    console.log("desde body");
  }

  updateItems(movie) {
    var movies = this.state.movies.filter((i) => { return i.id != movie.id });
    movies.push(movie);

    this.setState({movies: movies });
  }

  handleDelete(id) {
    const idDelete = id
    fetch('/v1/movies/' + id, {
      method: 'DELETE'
    })
    .then(function(id) {
      this.removeMovie(idDelete);
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <NewMovie handleSubmit={this.handleSubmit} />
        <h1>Our Movies</h1>
        <AllMovies
          movies={this.state.movies}
          handleDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
};

export default Body
