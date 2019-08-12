import React, {Fragment} from 'react'
import Header from './Header'
import Body from './Body'

class Main extends React.Component{
  render() {
    return (
      <Fragment>
        <div className="row align-items-center">
          <Header />
        </div>
        <div className="row align-items-center">
          <Body />
        </div>
      </Fragment>
    );
  }
}

export default Main
