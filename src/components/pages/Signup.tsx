import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../Footer';
import NavigationMenu from '../NavigationMenu';
import { ROUTES } from '../../constants';

function Signup() {
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
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
        phone: Yup.string() // TODO local number validation -- regex? also add country prefix as label?
            .required('Phone number is required.')
            // .isType(typeof number)
            .min(10, "to short")
            .max(10, "to long"),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit({ email, password, phone }, { setSubmitting }) {
        // TODO create user service and implement this function
    }

    return (
        <section>
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
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <Field name="passwordConfirmation" type="password" className={'form-control' + (errors.passwordConfirmation && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="passwordConfirmation" component="div" className="invalid-feedback" />
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
                    </Form>)}
                </Formik>
            </Container>
            <Footer />
        </section>
    );
}

export default Signup;
