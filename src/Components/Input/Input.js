import React from 'react';
import './Input.css';

export default function Input({
  errorMessage,
  isDirty,
  className,
  label,
  ...props
}) {
  return (
    <label className='form__label'>
      {label}
      <input
        {...props}
        className={`form__input ${
          errorMessage && isDirty && 'form__input_invalid'
        } ${className}`}
      ></input>
      {errorMessage && isDirty && (
        <span className='form__error-message'>{errorMessage}</span>
      )}
    </label>
  );
}
