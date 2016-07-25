/**
 * Created by MWalters on 25.07.2016.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header =() =>{
  "use strict";
  return (
    <nav>
      <IndexLink to="" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
