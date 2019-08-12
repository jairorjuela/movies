import React, {Fragment} from 'react'

class Reservations extends React.Component{

  constructor(){
    super()
    this.state = {
      reservations: []
    };
  }

  componentDidMount(){
    fetch('/v1/reservations.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ reservations: data }) });
  }

  render() {
    let reservations = this.state.reservations.map((reservation) => {
      return (
        <tr key={reservation.id}>
          <td>{reservation.movie_id}</td>
          <td>{reservation.name}</td>
          <td>{reservation.identification_card}</td>
          <td>{reservation.phone}</td>
          <td>{reservation.email}</td>
        </tr>
      )
    })

    return(
      <Fragment>
        <table className="table table-dark">
          <thead>
          <tr>
            <th scope="col">Pelicula id#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Cedula</th>
            <th scope="col">Telefono</th>
            <th scope="col">correo</th>
          </tr>
          </thead>
          <tbody>
            {reservations}
          </tbody>
        </table>
      </Fragment>
    )
  }
};

export default Reservations
