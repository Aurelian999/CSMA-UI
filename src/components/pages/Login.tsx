import React from 'react';
import { Container, FormLabel } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Footer from '../Footer';
import NavigationMenu from '../NavigationMenu';
import { ROUTES } from '../../constants';
import { identityService } from '../../services/identity';
import { useStores } from '../../stores/useStores';

function Login(): JSX.Element {
  const initialValues = {
    email: '',
    password: '',
    phone: '',
    passwordConfirmation: '',
  };
  const history = useHistory();
  const { userStore } = useStores();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .notOneOf([Yup.ref('email'), null], 'Password cannot be the email.'),
  });

  function onSubmit({ email, password }, { setSubmitting }) {
    identityService.login(email, password).then((resp) => {
      if (resp.status === 200) {
        userStore.setJwt(resp.data.token);
        history.push(ROUTES.HOME);
      }
    }, (err) => {
      setSubmitting(false);
      // TODO show error message to the user
    });
  }

  return (
    <>
      <NavigationMenu />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <h3 className="card-header">Login</h3>
              <div className="card-body">
                <div className="form-group">
                  <FormLabel>
                    Email
                    <Field
                      name="email"
                      type="text"
                      className={
                        `form-control${
                          errors.email && touched.email ? ' is-invalid' : ''}`
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </FormLabel>
                </div>
                <div className="form-group">
                  <FormLabel>
                    Password
                    <Field
                      name="password"
                      type="password"
                      className={
                        `form-control${
                          errors.password && touched.password ? ' is-invalid' : ''}`
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </FormLabel>
                </div>
                <div className="form-row">
                  <div className="form-group col">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                    >
                      {isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1" />
                      )}
                      Login
                    </button>
                    <Link to={ROUTES.SIGNUP} className="btn btn-link">
                      Register
                    </Link>
                  </div>
                  <div className="form-group col text-right">
                    <Link
                      to={ROUTES.RESET_PASSWORD}
                      className="btn btn-link pr-0"
                    >
                      Forgot Password?
                    </Link>
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
