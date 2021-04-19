import React from 'react';

import StudentDetails from './StudentDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

class StudentDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.students.read(this.props.match.params.studentId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  handleDeletestudent = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.students.remove(this.props.match.params.studentId);
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

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <StudentDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeletestudent={this.handleDeletestudent}
        student={this.state.data}
      />
    );
  }
}

export default StudentDetailsContainer;
