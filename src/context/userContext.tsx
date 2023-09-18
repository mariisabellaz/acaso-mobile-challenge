import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import { BASE_URL, STORAGE_KEY_USER } from '@utils/storagekeys';
import { UserDataModel } from './model/user.model';

type UserContextType = {
  savePhoto: (imageUri: ImageSourcePropType) => Promise<void>;
  fechUser: () => void;
  userData: UserDataModel;
};

type ChildrenContextProps = { children: ReactNode };

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: ChildrenContextProps) => {
  const { navigate } = useNavigation();
  const [userData, setUserData] = useState<UserDataModel>({} as UserDataModel);

  const fechUser = async () => {
    try {
      const userStorage = await AsyncStorage.getItem(STORAGE_KEY_USER);

      if (userStorage) {
        const userFormatted = JSON.parse(userStorage);
        setUserData(userFormatted);
      }
    } catch (error) {
      throw new Error('Erro ao ler os dados do usuário');
    }
  };

  const savePhoto = async (imageUri: ImageSourcePropType) => {
    const fileType = imageUri.toString().endsWith('.png') ? 'image/png' : 'image/jpeg';

    if (fileType === 'image/png') {
      alert('Formato de imagem não aceito seleciona formato jpeg');
    } else {
      const { id, id_token } = userData;

      const data = new FormData();
      data.append('user_id', id);
      data.append('profile_picture', {
        uri: imageUri,
        name: 'profile_image.jpeg',
        type: 'image/jpeg',
      });
      try {
        const response = await axios.patch(`${BASE_URL}/user/${id}/profile_picture`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${id_token}`,
          },
        });

        if (response.status === 200) {
          navigate('profile');
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <UserContext.Provider value={{ fechUser, savePhoto, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserDataProvider');
  }
  return context;
};
