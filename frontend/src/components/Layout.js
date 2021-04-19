import React from 'react';
import { Navbar } from './Navbar';

export const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

