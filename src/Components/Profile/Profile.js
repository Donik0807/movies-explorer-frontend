import React from 'react';
import './Profile.css';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import useFormIsValid from '../../hooks/useFormIsValid';

export default function Profile({
  user,
  onSubmit = () => {
    return;
  },
}) {
  const { inputData, handleChange } = useForm(user);
  const {
    errorMessage: nameError,
    inputIsDirty: nameIsDirty,
    setInputIsDirty: setNameIsDirty,
  } = useValidation(inputData.name, {
    required: true,
    minLength: 2,
    maxLength: 30,
  });
  const {
    errorMessage: emailError,
    inputIsDirty: emailIsDirty,
    setInputIsDirty: setEmailIsDirty,
  } = useValidation(inputData.email, {
    required: true,
    email: true,
  });
  const [formIsValid] = useFormIsValid([nameError, emailError]);

  const handleSubmit = (e) => {
    e.preventEventDefault();
    onSubmit();
  };

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user.name}!</h1>
      <form className='profile__form' onSubmit={handleSubmit}>
        <fieldset className='profile__input-container'>
          <label className='profile__label'>
            <span className='profile__input-text'>Имя</span>
            <input
              type='text'
              name='name'
              value={inputData.name}
              onChange={(e) => {
                handleChange(e);
                setNameIsDirty(true);
              }}
              className={`profile__text-input ${
                nameError && nameIsDirty &&  'profile__text-input_invalid'
              }`}
              placeholder='Имя'
            ></input>
            {nameError && nameIsDirty && (
              <span className='profile__error-message'>{nameError}</span>
            )}
          </label>
          <label className='profile__label'>
            <span className='profile__input-text'>E-mail</span>
            <input
              type='email'
              name='email'
              value={inputData.email}
              onChange={(e) => {
                handleChange(e);
                setEmailIsDirty(true);
              }}
              className={`profile__text-input ${
                emailError && emailIsDirty && 'profile__text-input_invalid'
              }`}
              placeholder='E-mail'
            ></input>
            {emailError && emailIsDirty && (
              <span className='profile__error-message profile__error-message_email'>
                {emailError}
              </span>
            )}
          </label>
        </fieldset>
        <button
          disabled={!formIsValid}
          type='submit'
          className='profile__save-btn button-animation'
        >
          Редактировать
        </button>
      </form>
      <button className='profile__logout-btn button-animation'>Выйти из аккаунта</button>
    </section>
  );
}
