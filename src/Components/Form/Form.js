import React from 'react';
import './Form.css';

export default function Form({
  children,
  onSubmit = () => {
    return;
  },
  submitText,
  formIsValid,
  apiMessage
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__container'>
        {children}
      </fieldset>
      {apiMessage && <span className='form__api-error'>{apiMessage}</span>}
      <button disabled={!formIsValid} type='submit' className='form__submit-btn button-animation'>{submitText}</button>
    </form>
  );
}
