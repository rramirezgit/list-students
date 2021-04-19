import React from 'react';

const handleClick = e => {
  console.log('Button was clicked');
};

export const Form = ({ firstName, lastName, dni, email, error, onChange, onSubmit }) => {
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label> Nombre </label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label>DNI</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="dni"
              value={dni}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={onChange}
              className="form-control"
              type="email"
              name="email"
              value={email}
            />
          </div>

          <button onClick={handleClick} className="btn btn-primary">
            Save
          </button>

          {error && (
            <p className="text-danger">{error.message}</p>
          )}
        </form>
      </div>
    </>
  )
}
