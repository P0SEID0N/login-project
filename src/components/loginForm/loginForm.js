
import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import useFormHandler from '../../hooks/formHanlder';

import './loginForm.css';

const signup = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('An email is required'),
    password: Yup.string()
      .min(8, 'Password is too Short! Min of 8 characters')
      .max(50, 'Password is too Long! Max of 50 characters')
      .required('A password is required'),
  });

/* Component: Login Form
* Contains all of the login form HTML and functionality logic. This form takes use of Formik to handle form state, errors and validation.
*/
const LoginForm = () => {

    //UseFormHandler is a hook that handles all the submission logic and handles initial values. Extract them here. 
    const { initialValues, handleSubmit } = useFormHandler();

//Formik is lightweight, in using it for our form state, validation and excetera we can avoid a lot of heavier calls that might be present in other form related libraries.
  return (
    <Formik
    onSubmit={handleSubmit}
    validationSchema={signup}
    initialValues={initialValues}
    >
    {({ isSubmitting, errors, touched }) => (
      <Form className="FormContainer">
        <label className="FormInputElement">
            <strong>Email</strong>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              aria-required="true"
              aria-invalid={errors.email && touched.email ? 'true' : null}
              className={errors.email && touched.email ? 'FormInputError' : ''}
            />
            {errors.email && touched.email ? (
             <div className="FormError">{errors.email}</div>
           ) : null}
        </label>
        <label className="FormInputElement">
            <strong>Password</strong>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              aria-required="true"
              aria-invalid={errors.password && touched.password ? 'true' : null}
              className={errors.password && touched.password ? 'FormInputError' : ''}
            />
            {errors.password && touched.password ? (
             <div className="FormError">{errors.password}</div>
           ) : null}
        </label>
        <label className="FormInputCheckbox">
            <Field type="checkbox" name="rememberme" /> Remember Me
          </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="FormInputButton"
        >
          Sign In
        </button>
      </Form>
    )}
    </Formik>
  );
}

export default LoginForm;
