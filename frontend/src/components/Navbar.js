import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
// import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <span className="font-weight-light">Ricardo Ramirez</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
