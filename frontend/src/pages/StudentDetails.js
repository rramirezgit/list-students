import React from 'react';
import { Link } from 'react-router-dom';

import './styles/StudentDetails.css';
// import confLogo from '../images/studentconf-logo.svg';
import Student from '../components/Student';
import DeleteStudentModal from '../components/DeleteStudentModal';

function studentDetails(props) {
  const student = props.student;

  return (
    <div>
      <div className="studentDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* <img src={confLogo} alt="Logo de la Conferencia" /> */}
            </div>
            <div className="col-6 studentDetails__hero-attendant-name">
              <h1>
                {student.firstName} {student.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Student
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              linkeding={student.linkeding}
              jobTitle={student.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/students/${student.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteStudentModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeletestudent={props.onDeletestudent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default studentDetails;
