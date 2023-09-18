import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { ReactNode, createContext, useContext, useEffect } from 'react';
import * as yup from 'yup';

import { schema as ConfirmEmailSchema } from '@screens/ConfirmEmail/confirmEmail.yup';
import { schema as LoginSchema } from '@screens/Login/login.yup';
import { schema as SingUpSchema } from '@screens/SingUp/signup.yup';

type FormDataLogin = yup.InferType<typeof LoginSchema>;
type FormDataSingUp = yup.InferType<typeof SingUpSchema>;
type FormDataConfirmEmail = yup.InferType<typeof ConfirmEmailSchema>;

type AuthContextType = {
  signIn: ({ email, password }: FormDataLogin) => Promise<void>;
  signUp: ({ email, password, first_name, last_name }: FormDataSingUp) => Promise<void>;
  confirmCode: ({ confirmation_code }: FormDataConfirmEmail) => Promise<void>;
  refreshCode: () => Promise<void>;
  signOut: () => Promise<void>;
};

type ChildrenContextProps = { children: ReactNode };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: ChildrenContextProps) => {
  const { navigate } = useNavigation();
  const baseURL = 'https://api.staging.aca.so/auth/sign-up';

  useEffect(() => {
    // Verificar o token de autenticação ou outras informações de usuário ao carregar a aplicação.
    // Você pode usar AsyncStorage para armazenar o token de forma segura.
    // Se o usuário já estiver autenticado, defina setUser com os detalhes do usuário.
  }, []);

  const signIn = async ({ email, password }: FormDataLogin) => {
    try {
      // const response = await api.post('auth/v2/login', { email, password });
      // const userData = response.data;
      // console.tron.log('SING-IN', userData);

      //VAI SALVAR O TOKEN NA ASYNC

      axios.post(baseURL, { email, password }).then((response) => {
        console.tron.log('TESTE', response.data);
      });
    } catch (error) {
      console.tron.log(error);
    }
  };

  const signUp = async ({ email, password, first_name, last_name }: FormDataSingUp) => {
    const DATA = {
      email,
      password,
      first_name,
      last_name,
    };

    try {
      console.tron.log('SING-UP', DATA);
      navigate('confirmemail');
    } catch (error) {
      // VALIDACAO DE ERRO API
      console.tron.log('SING-UP', error);
    }
  };

  const confirmCode = async ({ confirmation_code }: FormDataConfirmEmail) => {
    const DATA = {
      confirmation_code,
    };

    try {
      //TROCAR A ROTA NA ASYNC STORAGE
      console.tron.log('CONFIRM-CODE', DATA);
    } catch (error) {
      // VALIDACAO DE ERRO API
      console.tron.log('CONFIRM-CODE', error);
    }
  };

  const refreshCode = async () => {
    try {
      // CHAMAR A API DE REFRESH TOKEN
      console.tron.log('REFRESH-CODE');
    } catch (error) {
      // VALIDACAO DE ERRO API
      console.tron.log('REFRESH-CODE', error);
    }
  };

  const signOut = async () => {
    // REMOVER O TOKEN DE ASYNC STORAGE;
    console.tron.log('SING-OUT');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, signUp, confirmCode, refreshCode }}>
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
