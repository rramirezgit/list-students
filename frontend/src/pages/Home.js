import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import logo from '../components/images/studenst.svg';

export const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-6">
              <h1>Lista de Estudiantes</h1>
          
              <Link className="btn btn-primary" to="/students">
                ir al istado
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-6">
              <img
                src={logo}
                alt="students"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

