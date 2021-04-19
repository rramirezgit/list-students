import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Students.css';
// import confLogo from '../images/student-header.svg';
import StudentsList from '../components/StudentsList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Students extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.students.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="students">
          <div className="students__hero">
            <div className="students__container">
              {/* <img
                className="students_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              /> */}
            </div>
          </div>
        </div>

        <div className="students__container">
          <div className="students__buttons">
            <Link to="/students/new" className="btn btn-primary">
              New student
            </Link>
          </div>

          <StudentsList students={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
