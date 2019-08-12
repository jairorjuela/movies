import React, {Fragment} from 'react'
import Reservation from './Reservation'

class Movie extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleEdit() {
    if(this.state.editable) {
      let name = this.refs.name.value;
      let id = this.props.movies.id;
      let description = this.refs.description.value;
      let movie = {
        id: id ,
        name: name ,
        description: description
      };
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

  handleFormSubmit(reservation){
    event.preventDefault();
    let body = JSON.stringify({ reservation:
      {
        name: reservation.name,
        phone: reservation.phone,
        identification_card: reservation.identification_card,
        email: reservation.email,
        movie_id: this.props.movies.id
      }
    })

    fetch('/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then((response) => {return response.json()})
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
  }

  render() {
    let currentName = this.getName(this.props.movies)
    let currentDescripton = this.getDescription(this.props.movies)

    let nombre = this.state.editable ? <input type='text' ref='name' defaultValue={currentName}/> : <span key={this.props.movies.id}>Nombre:  {currentName}</span>

    let description = this.state.editable ? <input type='text' ref='description' defaultValue={currentDescripton}/> : <span key={currentDescripton}>Descripcion: {currentDescripton}</span>

    return (
      <div className="card-columns">
        <div className="card" key={this.props.movies.id}>
          <img src={this.props.movies.image_url} className="card-img-top" alt={this.props.movies.name} />
          <div className="card-body">
            <h3 className="card-title">{nombre}</h3>
            <h5 className="card-text">{description}</h5>
          </div>
          <div className="card-footer">
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>
              {" "}
              {this.state.editable ? "Submit" : "Edit"}{" "}
            </button>
            <Reservation
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Movie
