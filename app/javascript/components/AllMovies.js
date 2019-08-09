import React from 'react'
import Movie from './Movie'

class AllMovies extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }

  onUpdate(movie) {
    const movieBody = {
      "name":movie.name,
      "description":movie.description
    }
    fetch('/v1/movies/' + movie.id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(movieBody)
    })
    .then(res => {
      return res;
    })
    .catch(error => console.log(error))
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {

    var movies = this.props.movies.map((movie) => {
      return (
        <div key={movie.id}>
          <Movie
            movies={movie}
            handleDelete={this.handleDelete.bind(this, movie.id)}
            handleEdit={this.handleEdit}
            handleUpdate={this.onUpdate}
          />
        </div>
      )
    })

    return(
      <div>
        {movies}
      </div>
    )
  }
};

export default AllMovies
