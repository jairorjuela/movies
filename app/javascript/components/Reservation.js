import React, {Fragment} from 'react'

class Reservation extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    const form = {
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      identification_card: this.refs.identification_card.value,
      email: this.refs.email.value,
    };
    this.props.handleFormSubmit(form)
    this.refs.name.value = ''
    this.refs.phone.value = ''
    this.refs.identification_card.value = ''
    this.refs.email.value = ''
  }

  render() {

    return (
      <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" >
          Reservar
        </button>

        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <h5
                className="modal-title"
                id="exampleModalLabel"
              >
                Reservar pelicula
              </h5>
              <input
                ref="name"
                placeholder="Enter the name"
              />
              <input
                ref="phone"
                placeholder="Enter phone"
              />
              <input
                ref="identification_card"
                placeholder="Enter a identification card"
              />
              <input
                ref="email"
                placeholder="Enter a email"
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleClick}
                data-dismiss="modal"
              >
                Reservar
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Reservation
