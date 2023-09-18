import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { ReactNode, createContext, useContext } from 'react';
import * as yup from 'yup';

import { BASE_URL, STORAGE_KEY_USER } from '@utils/storagekeys';

import { schema as ConfirmEmailSchema } from '@screens/ConfirmEmail/confirmEmail.yup';
import { schema as LoginSchema } from '@screens/Login/login.yup';
import { schema as SingUpSchema } from '@screens/SingUp/signup.yup';
import { UserDataModel } from './model/user.model';

type FormDataLogin = yup.InferType<typeof LoginSchema>;
type FormDataSingUp = yup.InferType<typeof SingUpSchema>;
type FormDataConfirmEmail = yup.InferType<typeof ConfirmEmailSchema> & { email: string };

type AuthContextType = {
  signIn: ({ email, password }: FormDataLogin) => Promise<void>;
  signUp: ({ email, first_name, last_name, password }: FormDataSingUp) => Promise<void>;
  confirmCode: (confirmation_code: FormDataConfirmEmail) => Promise<void>;
  resendConfirmationCode: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  saveUserData: (user: UserDataModel) => Promise<void>;
};

type ChildrenContextProps = { children: ReactNode };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: ChildrenContextProps) => {
  const { navigate } = useNavigation();

  const signIn = async ({ email, password }: FormDataLogin) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/v2/login`, { email, password });

      if (response.status === 200) {
        try {
          const responseuser = await axios.get(`${BASE_URL}/user/profile`, {
            headers: {
              Authorization: `Bearer ${response.data.token.id_token}`,
            },
          });

          const formattedData = {
            id_token: response.data?.token?.id_token,
            access_token: response.data?.token?.id_token,
            refresh_token: response.data?.token?.id_token,
            id: responseuser.data?.id,
            first_name: responseuser.data?.family?.first_name,
            last_name: responseuser.data?.family?.last_name,
            last_access_at: responseuser.data?.last_access_at,
            profile_picture: responseuser.data?.profile_picture,
          };
          saveUserData(formattedData);
          navigate('addphoto');
        } catch (error) {
          console.log('load User Data aqui', error);
        }
      }
    } catch (error) {
      console.log('login error:', error);
    }
  };

  const signUp = async ({ email, first_name, last_name, password }: FormDataSingUp) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/sign-up`, {
        email,
        first_name,
        last_name,
        password,
      });

      if (response.status === 200) {
        navigate('confirmemail', { email });
      }
    } catch (error) {
      console.log('register error:', error);
      if (error.response?.data?.message === 'Email registered but not confirmed') {
        // Alert.alert('Atenção', 'E-mail já cadastrado porém não foi confirmado!');
      } else {
        //Alert.alert('Atenção',error.response?.data?.message || 'Ocorreu um erro ao fazer cadastro.!');
      }
    }
  };

  const confirmCode = async ({ confirmation_code, email }: FormDataConfirmEmail) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/v2/confirm-sign-up`, {
        confirmation_code,
        email,
      });

      if (response.status === 204) {
        console.log('confirmCode success:', response.data);
        navigate('login');
      }
    } catch (error) {
      console.log('confirmCode error:', error);
      // Alert.alert('Atenção', error.response?.data?.message ||'Ocorreu um erro ao confirmar o e-mail. Verifique o código e tente novamente.!');
    }
  };

  const resendConfirmationCode = async (email: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/resend-confirmation-code`, { email });

      if (response.status === 200) {
        console.log('resend Confirmation Code success:', response.data);
      }
    } catch (error) {
      console.log('resend Confirmation Code error:', error);
      //Alert.alert('Atenção',error.response?.data?.message || 'Ocorreu ao reenviar código. tente novamente mais tarde.!');
    }
  };

  const saveUserData = async (user: UserDataModel) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
    } catch (error) {
      console.log('Erro ao salvar os dados do usuário:', error);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY_USER);
    navigate('login');
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        confirmCode,
        resendConfirmationCode,
        saveUserData,
      }}
    >
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
