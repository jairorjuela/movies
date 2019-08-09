import React from 'react'

class NewMovie extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    const movieBody = {
      "name":name,
      "description":description
    }
    fetch('/v1/movies/', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(movieBody)
    })
    .then((movie) => {
      this.props.handleSubmit(movie);
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input ref="name" placeholder="Enter the name of the movie" />
        <input ref="description" placeholder="Enter a description" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
};

export default NewMovie
