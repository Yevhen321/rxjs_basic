import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

import { signIn, validateEmail, validatePassword } from '~/helpers';

export const useLoginForm = () => {
   const navigate = useNavigate();

   const [state, setState] = useState({
      email: '',
      password: '',
   });

   const [errors, setErrors] = useState({
      email: '',
      password: '',
   });

   const validateForm = () => {
      const emailError = validateEmail(state.email);
      const passwordError = validatePassword(state.password);

      setErrors({
         email: emailError,
         password: passwordError,
      });

      return !emailError && !passwordError;
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const isValid = validateForm();

      if (isValid) {
         signIn();
         navigate({ to: '/' });
      }
   };

   return {
      handlers: {
         handleChange,
         handleSubmit,
      },
      data: {
         state,
         errors,
      },
   };
};
