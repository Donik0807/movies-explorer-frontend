import React from 'react';
import './Profile.css';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import useFormIsValid from '../../hooks/useFormIsValid';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { updateProfile } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [currentUser, setCurrentUser] = React.useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { inputData, handleChange } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });
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
  const [formIsValid, setFormIsValid] = useFormIsValid([nameError, emailError]);
  const [submitError, setSubmitError] = React.useState('');

  React.useEffect(() => {
    if (
      inputData.name === currentUser.name &&
      inputData.email === currentUser.email
    ) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [inputData, currentUser]);

  const handleUserUpdate = (e) => {
    e.preventDefault();
    updateProfile(inputData)
      .then((updatedData) => {
        setCurrentUser(updatedData);
      })
      .catch((errorMessage) => {
        setSubmitError(errorMessage);
      });
  };

  const onSignOut = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('movieList');
      localStorage.removeItem('searchValue');
      localStorage.removeItem('isShortFilm');
      setCurrentUser(null);
      navigate('/');
    }
  };

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' onSubmit={handleUserUpdate}>
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
                nameError && nameIsDirty && 'profile__text-input_invalid'
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
        {submitError && (
          <span className='profile__submit-error'>{submitError}</span>
        )}
        <button
          disabled={!formIsValid}
          type='submit'
          className='profile__save-btn button-animation'
        >
          Редактировать
        </button>
      </form>
      <button
        onClick={onSignOut}
        className='profile__logout-btn button-animation'
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}
