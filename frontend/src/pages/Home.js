import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import studentconfLogoImage from '../images/studenst.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-6">
              {/* <img
                src={studentconfLogoImage}
                alt="student Conf Logo"
                className="img-fluid mb-2"
              /> */}

              <h1>Listado de Estudiantes</h1>
              <Link className="btn btn-primary" to="/students">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-6">
            <img
                src={studentconfLogoImage}
                alt="student Conf Logo"
                className="img-fluid mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
