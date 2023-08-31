import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import PageWithForm from '../PageWithForm/PageWithForm';
import useFormIsValid from '../../hooks/useFormIsValid';
import Input from '../Input/Input';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import { getUserData, login } from '../../utils/MainApi';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const { inputData, handleChange, setInputData } = useForm(initialState);
  const {
    errorMessage: emailError,
    inputIsDirty: emailIsDirty,
    setInputIsDirty: setEmailIsDirty,
  } = useValidation(inputData.email, {
    required: true,
    email: true,
  });
  const {
    errorMessage: passwordError,
    inputIsDirty: passwordIsDirty,
    setInputIsDirty: setPasswordIsDirty,
  } = useValidation(inputData.password, {
    required: true,
  });
  const [formIsValid, setFormIsValid] = useFormIsValid([emailError, passwordError]);

  const [submitError, setSubmitError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useContext(CurrentUserContext);
  const navigate = useNavigate();

  if (currentUser) {
    navigate('/');
  }

  const handleLogin = () => {
    login(inputData)
      .then(() => getUserData())
      .then(userData => {
        if (userData) {
          setCurrentUser(userData)
          navigate('/movies')
          setInputData(initialState);
        }
      })
      .catch((apiMessage) => {
        setSubmitError(apiMessage);
      });
  };

  return (
    <PageWithForm
      title='Рады видеть!'
      redirectText='Ещё не зарегистрированы?'
      linkText='Регистрация'
      submitText='Войти'
      formIsValid={formIsValid}
      href={"/signup"}
      onSubmit={handleLogin}
      apiMessage={submitError}
    >
      <Input
        errorMessage={emailError}
        isDirty={emailIsDirty}
        label='E-mail'
        value={inputData.email}
        onChange={(e) => {
          handleChange(e);
          setEmailIsDirty(true);
        }}
        name='email'
        type='email'
      ></Input>
      <Input
        errorMessage={passwordError}
        label='Пароль'
        isDirty={passwordIsDirty}
        value={inputData.password}
        onChange={(e) => {
          handleChange(e);
          setPasswordIsDirty(true);
        }}
        name='password'
        type='password'
      ></Input>
    </PageWithForm>
  );
}
