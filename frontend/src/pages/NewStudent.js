import React, { useState } from 'react';

import './styles/StudentNew.css';
import { Student } from '../components/Student';
import { Form } from '../components/Form';
//import PageLoading from '../components/PageLoading';
// import api from '../api';

export const NewStudent = () => {

    const [state, setState] = useState({
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            dni: '',
            email: '',
        },
    })

    const { error, form, form: { firstName, lastName, dni, email } } = state

    const handleChange = e => {
        setState({
            ...state,
            form: {
                ...state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setState({
            ...state,
            loading: true,
            error: false
        });

        try {
            //// hacer peticion
            setState({
                ...state,
                loading: true,
                error: false
            });

        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error
            });
        }
    };

    // if (loading) {
    //     return <PageLoading />;
    // }
    return (
        <>
            <div className="StudentNew__hero">
                {/* <img
                    className="StudentNew__hero-image img-fluid"
                    src={header}
                    alt="Logo"
                /> */}
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Student
                            firstName={firstName || 'FIRST_NAME'}
                            lastName={lastName || 'LAST_NAME'}
                            dni={dni || ''}
                            email={email || 'EMAIL'}
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>

                    <div className="col-6">
                        <h1>Nuevo Estudiante</h1>
                        <Form
                            onChange={handleChange}
                            onSubmit={handleSubmit}
                            formValues={form}
                            error={error}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
