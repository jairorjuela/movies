import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Movies from './Movies'
import Reservations from './Reservations'

class Main extends React.Component{
  render() {
    return (
      <Fragment>
      <Router>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  <h3>Peliculas</h3>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reservations/" className="nav-link">
                  <h3>Reservaciones</h3>
                </Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Movies} />
          <Route path="/reservations/" component={Reservations} />
        </div>
      </Router>
      </Fragment>
    );
  }
}

export default Main
