import React from 'react';
import Form from '../Form/Form';
import './PageWithForm.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function PageWithForm({
  title,
  children,
  redirectText,
  linkText,
  submitText,
  formIsValid,
  href,
  onSubmit,
  apiMessage,
}) {
  return (
    <section className='page-form'>
      <Link to='/'>
        <img src={logo} className='page-form__logo' alt='логотип'></img>
      </Link>
      <h1 className='page-form__title'>{title}</h1>
      <Form
        onSubmit={onSubmit}
        formIsValid={formIsValid}
        submitText={submitText}
        apiMessage={apiMessage}
      >
        {children}
      </Form>
      <p className='page-form__redirect'>
        {redirectText}
        <Link to={href} className='page-form__link link-animation'>
          {linkText}
        </Link>
      </p>
    </section>
  );
}
