import React, {Fragment} from 'react'

class NewMovie extends React.Component{

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const form = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      image_url: this.refs.image_url.value
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
      <Fragment>
        <button
          type="button" className="btn btn-primary"
          data-toggle="modal" data-target="#exampleModal">
          Crear Película
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1" role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  Crear pelicula
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  ref="name"
                  placeholder="Enter the name of the movie"
                />
                <input
                  ref="description"
                  placeholder="Enter a description"
                />
                <input
                  ref="image_url"
                  placeholder="Enter a url of image"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
};

export default NewMovie
