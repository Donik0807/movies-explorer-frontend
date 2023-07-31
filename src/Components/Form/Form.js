import React from 'react';
import './Form.css';

export default function Form({
  children,
  onSubmit = () => {
    return;
  },
  submitText,
  formIsValid
}) {
  const handleSubmit = (e) => {
    e.preventEventDefault();
    onSubmit();
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <fieldset className='form__container'>
        {children}
      </fieldset>
      <button disabled={!formIsValid} type='submit' className='form__submit-btn button-animation'>{submitText}</button>
    </form>
  );
}
