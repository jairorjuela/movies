import React, {Fragment} from 'react'
import NewMovie from './NewMovie'
import AllMovies from './AllMovies'

class Body extends React.Component{

  constructor(){
    super()
    this.state = {
      movies: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewMovie = this.addNewMovie.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.removeMovie = this.removeMovie.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateMovie = this.updateMovie.bind(this)
  }

  componentDidMount(){
    fetch('/v1/movies.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ movies: data }) });
  }

  handleFormSubmit(movie){
    event.preventDefault();
    let body = JSON.stringify({ movie:
      {
        name: movie.name,
        description: movie.description,
        image_url: movie.image_url
      }
    })

    fetch('/v1/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then((response) => {return response.json()})
    .then((movie)=>{
      this.addNewMovie(movie)
    })
  }

  addNewMovie(movie){
    this.setState({
      movies: this.state.movies.concat(movie)
    })
  }

  handleDelete(id){
    const idDelete = id
    fetch('/v1/movies/' + id, {
      method: 'DELETE'
    })
    .then(()=>{
      this.removeMovie(id);
    })
  }

  removeMovie(id){
    let newMovies = this.state.movies.filter((movie) => movie.id !== id)
    this.setState({
      movies: newMovies
    })
  }

  handleUpdate(movie) {
    const movieBody = {
      "name": movie.name,
      "description": movie.description
    }
    fetch('/v1/movies/' + movie.id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(movieBody)
    })
    .then((response)=>{
      this.updateMovie(movie)
    })
  }

  updateMovie(movie){
    let newMovies = this.state.movies.filter((m) => m.id !== movie.id)
    newMovies.push(movie)
    this.setState({
      movies: newMovies
    })
  }

  render() {
    return (
      <Fragment>
        <div className="col-12">
          <NewMovie handleFormSubmit={this.handleFormSubmit} />
        </div>
        <div className="col-12">
          <h1>Películas: </h1>
          <AllMovies
            movies={this.state.movies}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </Fragment>
    );
  }
};

export default Body
