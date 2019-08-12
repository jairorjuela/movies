import React from 'react'
import Movie from './Movie'

class AllMovies extends React.Component{

  render() {

    let movies = this.props.movies.map((movie) => {
      return (
        <div key={movie.id}>
          <Movie
            movies={movie}
            handleDelete={this.props.handleDelete}
            handleEdit={this.handleEdit}
            handleUpdate={this.props.handleUpdate}
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
