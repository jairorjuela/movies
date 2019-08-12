import React from 'react'

class Movie extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    if(this.state.editable) {
      let name = this.refs.name.value;
      let id = this.props.movies.id;
      let description = this.refs.description.value;
      let movie = {id: id , name: name , description: description};
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

  handleDelete(){
    this.props.handleDelete(this.props.movies.id)
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
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>
          {" "}
          {this.state.editable ? "Submit" : "Edit"}{" "}
        </button>
      </div>
    );
  }
};

export default Movie
