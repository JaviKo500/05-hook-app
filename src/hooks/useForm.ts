/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialValueForm: T) => {
  const [formState, setFormState] = useState(initialValueForm);
  
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  return {
    ...formState,
    formState,

    onChangeInput,
  };
}