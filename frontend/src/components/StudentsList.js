import React from 'react';
import { Link } from 'react-router-dom';

import './styles/StudentsList.css';
import Gravatar from './Gravatar';

class StudentsListItem extends React.Component {
  render() {
    return (
      <div className="studentsListItem">
        <Gravatar
          className="studentsListItem__avatar"
          email={this.props.student.email}
        />

        <div>
          <strong>
            {this.props.student.firstName} {this.props.student.lastName}
          </strong>
          <br />@{this.props.student.linkeding}
          <br />
          {this.props.student.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchstudents(students) {

  const [query, setQuery] = React.useState('');
  const [filteredstudents, setFilteredstudents] = React.useState(students);

  React.useMemo(() => {
    const result = students.filter(student => {
      return `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredstudents(result);
  }, [students, query]);

  return { query, setQuery, filteredstudents };
}

function StudentsList(props) {
  const students = props.students;

  const { query, setQuery, filteredstudents } = useSearchstudents(students);

  if (filteredstudents.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter students</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No students were found</h3>
        <Link className="btn btn-primary" to="/students/new">
          Create new student
        </Link>
      </div>
    );
  }

  return (
    <div className="studentsList">
      <div className="form-group">
        <label>Filter students</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredstudents.map(student => {
          return (
            <li key={student.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/students/${student.id}`}
              >
                <StudentsListItem student={student} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentsList;
