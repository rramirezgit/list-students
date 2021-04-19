import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';


export const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <span className="font-weight-bold">Ricardo Ramirez</span>
          </Link>
        </div>
      </div>
    </>
  )
}

