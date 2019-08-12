import React from 'react'

class NewMovie extends React.Component{

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const form = {
      name: this.refs.name.value,
      description: this.refs.description.value
    };
    this.createMovie(form)
    this.refs.name.value = ''
    this.refs.description.value = ''
  }

  createMovie = (form) => {
    this.props.handleFormSubmit(form)
  }

  render() {

    return (
      <div>
        <input ref="name" placeholder="Enter the name of the movie" />
        <input ref="description" placeholder="Enter a description" />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
};

export default NewMovie
