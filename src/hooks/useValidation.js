import React from 'react';
import isEmail from 'validator/lib/isEmail';

export const useValidation = (value, validations) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [inputIsDirty, setInputIsDirty] = React.useState(false);

  React.useEffect(() => {
    for (let validation in validations) {
      switch (validation) {
        case 'minLength': {
          const minLength = validations[validation];
          if (value?.length < minLength) {
            setErrorMessage(`Длина текста не должна быть меньше ${minLength} символов`)
            return; 
          } else setErrorMessage('');
          break;
        }
        case 'maxLength': {
          const maxLength = validations[validation];
          if (value?.length > maxLength) {
            setErrorMessage(`Длина текста не должна быть больше ${maxLength} символов`)
            return; 
          } else setErrorMessage('');
          break;
        }
        case 'required': {
          if (value?.length === 0) {
            setErrorMessage('Заполните это поле');
            return;
          } else setErrorMessage('');
          break;
        }
        case 'email': {
          if (!isEmail(value)) {
            setErrorMessage('Невалидный E-mail');
            return;
          } else setErrorMessage('');
          break;
        }
        default:
          break;
      }
    }
  }, [value]);

  return { errorMessage, setErrorMessage, inputIsDirty, setInputIsDirty };
};
