import React from 'react';

import './styles/StudentEdit.css';
import Student from '../components/Student';
import StudentForm from '../components/StudentForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class StudentEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      linkeding: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.students.read(this.props.match.params.studentId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.students.update(this.props.match.params.studentId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/students');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="studentEdit__hero">
          {/* <img
            className="studentEdit__hero-image img-fluid"
            src={header}
            alt="Logo"
          /> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Student
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                linkeding={this.state.form.linkeding || 'linkeding'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <h1>Edit Attendant</h1>
              <StudentForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentEdit;
