
import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import useFormHandler from '../../hooks/formHanlder';

import './loginForm.css';

const signup = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
      .min(8, 'Password is too Short! Min of 8 characters')
      .max(50, 'Password is too Long! Max of 50 characters')
      .required('Password is required'),
  });

const LoginForm = () => {

    const { initialValues, handleSubmit } = useFormHandler();


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
            <Field type="checkbox" name="rememberme" /> Remember Mejfskdfjdskfjdskfjadskfjdkjfkdsjafkdsjkafjdskjfkdsjk
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
