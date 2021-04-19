import React from 'react';

import './styles/Student.css';
import { Gravatar } from './Gravatar';


export const Student = ({ firstName, lastName, dni, email }) => {
  return (
    <>
      <div className="Student">
        <div className="Student__header">
        </div>

        <div className="Student__section-name">
          <Gravatar email={email} className="Student__avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Student__section-info">
          <div>DNI:{dni}</div>
        </div>

      </div>
    </>
  )
}

