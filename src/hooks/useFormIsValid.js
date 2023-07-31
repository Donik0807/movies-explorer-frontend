import React from 'react'

export default function useFormIsValid(errorMessages = []) {
  const [formIsValid, setFormIsValid] = React.useState(false);

  React.useEffect(() => {
    if (errorMessages.some((errorMessage) => errorMessage)) {
      setFormIsValid(false)
    } else {
      setFormIsValid(true)
    }
  }, [...errorMessages])

  return [formIsValid, setFormIsValid];
}
