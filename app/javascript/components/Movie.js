import React from 'react'

class Movie extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    console.log(this.props.movies.id);
    if(this.state.editable) {
      var name = this.refs.name.value;
      var id = this.props.movies.id;
      var description = this.refs.description.value;
      var movie = {id: id , name: name , description: description};
      this.props.handleUpdate(movie);
    }
    this.setState({ editable: !this.state.editable })
  }

  getName(theMovie) {
    if(theMovie){
      return theMovie.name
    }else{
      return "No has cargado nada"
    }
  }

  getDescription(theMovie) {
    if(theMovie){
      return theMovie.description
    }else {
      return "No has cargado nada"
    }
  }

  render() {
    let currentName = this.getName(this.props.movies)
    let currentDescripton = this.getDescription(this.props.movies)

    let nombre = this.state.editable ? <input type='text' ref='name' defaultValue={currentName}/> : <h3 key={this.props.movies.id}>Nombre:  {currentName}</h3>

    let description = this.state.editable ? <input type='text' ref='description' defaultValue={currentDescripton}/> : <h3 key={currentDescripton}>Descripcion: {currentDescripton}</h3>

    return (
      <div>
        <div>
          {nombre}
          {description}
        </div>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>
          {" "}
          {this.state.editable ? "Submit" : "Edit"}{" "}
        </button>
      </div>
    );
  }
};

export default Movie
