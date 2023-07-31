import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [inputData, setInputData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { inputData, setInputData, handleChange };
};
