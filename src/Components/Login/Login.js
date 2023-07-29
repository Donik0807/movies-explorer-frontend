import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import PageWithForm from '../PageWithForm/PageWithForm';
import useFormIsValid from '../../hooks/useFormIsValid';
import Input from '../Input/Input';

const initialState = {
  email: '',
  password: '',
};

export default function Login() {
  const { inputData, handleChange } = useForm(initialState);
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
  const [formIsValid] = useFormIsValid([emailError, passwordError]);

  return (
    <PageWithForm
      title='Рады видеть!'
      redirectText='Ещё не зарегистрированы?'
      linkText='Регистрация'
      submitText='Войти'
      formIsValid={formIsValid}
      href={"/signup"}
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
