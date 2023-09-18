import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { ReactNode, createContext, useContext } from 'react';
import * as yup from 'yup';

import { useStorage } from '@hooks/useStorage';

import { schema as ConfirmEmailSchema } from '@screens/ConfirmEmail/confirmEmail.yup';
import { schema as LoginSchema } from '@screens/Login/login.yup';
import { schema as SingUpSchema } from '@screens/SingUp/signup.yup';

type FormDataLogin = yup.InferType<typeof LoginSchema>;
type FormDataSingUp = yup.InferType<typeof SingUpSchema>;
type FormDataConfirmEmail = yup.InferType<typeof ConfirmEmailSchema> & { email: string };

type AuthContextType = {
  signIn: ({ email, password }: FormDataLogin) => Promise<void>;
  signUp: ({ email, password, first_name, last_name }: FormDataSingUp) => Promise<void>;
  confirmCode: (confirmation_code: FormDataConfirmEmail) => Promise<void>;
  resendConfirmationCode: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
};

type ChildrenContextProps = { children: ReactNode };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const BASE_URL = 'https://api.staging.aca.so';

export const AuthProvider = ({ children }: ChildrenContextProps) => {
  const { navigate } = useNavigation();
  const { saveUserData, removeUserData } = useStorage();

  const signIn = async ({ email, password }: FormDataLogin) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/v2/login`, { email, password });

      if (response.status === 200) {
        saveUserData(response.data);
        navigate('AppRoutes');
      }
    } catch (error) {
      console.log('login error:', error);
    }
  };

  const signUp = async ({ email, password, first_name, last_name }: FormDataSingUp) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/sign-up`, {
        email,
        password,
        first_name,
        last_name,
      });

      if (response.status === 200) {
        navigate('confirmemail', { email });
      }
    } catch (error) {
      if (error.response?.data?.message === 'Email registered but not confirmed') {
        //Alert.alert('Atenção', 'E-mail já cadastrado porém não foi confirmado!');
      } else {
        // Alert.alert('Atenção', error.response?.data?.message || 'Ocorreu um erro ao fazer cadastro.!',);
      }
    }
  };

  const confirmCode = async ({ confirmation_code, email }: FormDataConfirmEmail) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/v2/confirm-sign-up`, {
        email,
        confirmation_code,
      });

      if (response.status === 204) {
        navigate('login');
      }
    } catch (error) {
      console.tron.log('CONFIRM-CODE', error);
      // Alert.alert('Atenção', error.response?.data?.message ||'Ocorreu um erro ao confirmar o e-mail. Verifique o código e tente novamente.!',);
    }
  };

  const resendConfirmationCode = async (email: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/resend-confirmation-code`, email);

      if (response.status === 200) {
        console.log('resend Confirmation Code success:', response.data);
      }
    } catch (error) {
      console.log('resend Confirmation Code error:', error);
      // Alert.alert('Atenção', error.response?.data?.message || 'Ocorreu ao reenviar código. tente novamente mais tarde.!',);
    }
  };

  const signOut = async () => {
    removeUserData();
    navigate('login');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, confirmCode, resendConfirmationCode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
