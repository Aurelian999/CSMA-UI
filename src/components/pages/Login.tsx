import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../Footer';
import NavigationMenu from '../NavigationMenu';
import { ROUTES } from '../../constants';

function Login() {
    const initialValues = {
        email: '',
        password: '',
        phone: '',
        passwordConfirmation: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .notOneOf([Yup.ref('email'), null], 'Password cannot be the email.'),
    });

    function onSubmit({ email, password }, { setSubmitting }) {
        // TODO
    }

    return (
        <>
        <NavigationMenu />
        <Container>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h3 className="card-header">Login</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Login
                                </button>
                                <Link to={ROUTES.SIGNUP} className="btn btn-link">Register</Link>
                            </div>
                            <div className="form-group col text-right">
                                <Link to={ROUTES.RESET_PASSWORD} className="btn btn-link pr-0">Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
        </Container>
        <Footer />
        </>
    );
}

export default Login;
