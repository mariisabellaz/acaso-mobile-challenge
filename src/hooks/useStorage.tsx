import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import { UserDataModel } from '@context/model/user.model';

const STORAGE_KEY_USER = 'acaso:user';

export const useStorage = () => {
  const [userData, setUserData] = useState<UserDataModel>({} as UserDataModel);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const saveUserData = async (userData: any) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userData));
    } catch (error) {
      // Tratar erros de armazenamento aqui
      console.error('Erro ao salvar os dados do usuário:', error);
    }
  };

  const readUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('user_data');
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        if (userData?.user?.id && userData?.token?.id_token) {
          setUserData({
            ...userData.user,
            id_token: userData.token.id_token,
            access_token: userData.token.access_token,
            refresh_token: userData.token.refresh_token,
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      // Tratar erros de remoção de dados aqui
      console.log('Erro ao ler os dados do usuário:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    readUserData();
  }, []);

  const removeUserData = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY_USER);
      console.log('SING-OUT');
    } catch (error) {
      // Tratar erros de remoção de dados aqui
      console.error('Erro ao fazer logout:', error);
    }
  };

  return { saveUserData, removeUserData, userData, isLoading };
};
