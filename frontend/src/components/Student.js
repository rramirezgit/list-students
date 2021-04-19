import React from 'react';

import './styles/student.css';
import Gravatar from './Gravatar';

class Student extends React.Component {
  render() {
    return (
      <div className="student">
        <div className="student__header">
        </div>

        <div className="student__section-name">
          <Gravatar className="student__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="student__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.linkeding}</div>
        </div>

        {/* <div className="student__footer">#studentconf</div> */}
      </div>
    );
  }
}

export default Student;
