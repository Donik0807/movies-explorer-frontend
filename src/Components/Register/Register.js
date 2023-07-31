import React from 'react';
import PageWithForm from '../PageWithForm/PageWithForm';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import Input from '../Input/Input';
import useFormIsValid from '../../hooks/useFormIsValid';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const { inputData, handleChange } = useForm(initialState);
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
  const {
    errorMessage: passwordError,
    inputIsDirty: passwordIsDirty,
    setInputIsDirty: setPasswordIsDirty,
  } = useValidation(inputData.password, {
    required: true,
  });
  const [formIsValid] = useFormIsValid([nameError, emailError, passwordError]);

  return (
    <PageWithForm
      title='Добро пожаловать!'
      redirectText='Уже зарегистрированы?'
      linkText='Войти'
      submitText='Зарегистрироваться'
      formIsValid={formIsValid}
      href={"/signin"}
    >
      <Input
        errorMessage={nameError}
        isDirty={nameIsDirty}
        label='Имя'
        value={inputData.name}
        onChange={(e) => {
          handleChange(e);
          setNameIsDirty(true);
        }}
        name='name'
      ></Input>
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
