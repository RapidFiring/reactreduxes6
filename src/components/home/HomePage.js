/**
 * Created by MWalters on 25.07.2016.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>MyApp Administration</h1>
        <p>react, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">learn more</Link>
      </div>
    );
  }
}

export default HomePage;
