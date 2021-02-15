import React from 'react';
import { Container, FormLabel } from 'react-bootstrap';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import Footer from '../Footer';
import NavigationMenu from '../NavigationMenu';
import { ROUTES } from '../../constants';
import { identityService } from '../../services/identity';
import { useStores } from '../../stores/useStores';
import Alert, { ALERT_TYPE } from '../Alert';
import { ErrorResponse } from '../../interfaces/ErrorResponse';

function Signup(): JSX.Element {
  const initialValues = {
    email: '',
    password: '',
    phone: '',
    passwordConfirmation: '',
    acceptTerms: false,
  };
  const history = useHistory();
  const { alertStore } = useStores();

  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .notOneOf([Yup.ref('email')], 'Password cannot be the email.'),
    passwordConfirmation: Yup.string()
      .required('Password confirmation is required')
      .oneOf(
        [Yup.ref('password')],
        'Passwords must match.',
      ),
    phone: Yup.string() // TODO local number validation -- regex? also add country prefix as label?
      .required('Phone number is required.')
      // .isType(typeof number)
      .min(10, 'to short')
      .max(10, 'to long'),
    acceptTerms: Yup.bool().oneOf(
      [true],
      'Agreement to the Terms & Conditions is required',
    ),
  });

  function onSubmit({
    email, password, passwordConfirmation, phone, acceptTerms,
  }, { setStatus, setSubmitting }) {
    alertStore.clear();
    // setStatus();
    identityService
      .signup(email, password)
      .then(() => {
        console.log('signup done');
        alertStore.addAlert({
          id: 'alert-signup',
          text: 'Registration successful, please check your email for verification instructions',
          type: ALERT_TYPE.Success,
          dismissible: true,
          autoClose: false,
        });
        history.push('login');
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        setSubmitting(false);
        const errorResponse = error.response;
        if (errorResponse) {
          errorResponse.data.errors.forEach((elem, index) => {
            alertStore.addAlert({
              id: `alert-${index}`,
              text: elem,
              type: ALERT_TYPE.Danger,
              dismissible: true,
              autoClose: false,
            });
          });
        }
      });
  }

  return (
    <>
      <NavigationMenu />
      <Container>
        <Alert />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <h3 className="card-header">Register</h3>
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
                    Phone
                    <Field
                      name="phone"
                      type="text"
                      placeholder="07..."
                      className={
                        `form-control${
                          errors.phone && touched.phone ? ' is-invalid' : ''}`
                        }
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="invalid-feedback"
                    />
                  </FormLabel>
                </div>
                <div className="form-group">
                  <FormLabel>
                    Password
                    <Field
                      id="password"
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
                <div className="form-group">
                  <FormLabel>
                    Confirm Password
                    <Field
                      id="asdasd"
                      name="passwordConfirmation"
                      type="password"
                      className={
                      `form-control${
                        errors.passwordConfirmation && touched.password
                          ? ' is-invalid'
                          : ''}`
                      }
                    />
                    <ErrorMessage
                      name="passwordConfirmation"
                      component="div"
                      className="invalid-feedback"
                    />
                  </FormLabel>
                </div>
                <div className="form-row">
                  <div className="form-group form-check">
                    <FormLabel className="form-check-label">
                      <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={`form-check-input ${errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : ''}`} />
                      Accept
                      {' '}
                      <a href={ROUTES.TERMS_AND_CONDITIONS}>
                        Terms & Conditions
                      </a>
                      <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                    </FormLabel>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1" />}
                    Register
                  </button>
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

export default Signup;
