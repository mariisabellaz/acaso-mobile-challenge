import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import { useStorage } from '@hooks/useStorage';
import { UserDataModel } from './model/user.model';

interface UserContextType {
  userData: UserDataModel;
  isLoading: boolean;
  savePhoto: (imageUri: ImageSourcePropType) => Promise<void>;
}

type ChildrenContextProps = { children: ReactNode };

const UserContext = createContext<UserContextType | undefined>(undefined);

const BASE_URL = 'https://api.staging.aca.so';

export const UserProvider = ({ children }: ChildrenContextProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { navigate } = useNavigation();
  const { userData } = useStorage();

  const savePhoto = async (imageUri: ImageSourcePropType) => {
    setIsLoading(true);

    const fileType = imageUri.toString().endsWith('.png') ? 'image/png' : 'image/jpeg';

    if (fileType === 'image/png') {
      // Alert.alert('Atenção', 'Formato de imagem não aceito seleciona formato jpeg')
      setIsLoading(false);
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
          setIsLoading(false);
          navigate('profile');
        }
      } catch (error) {
        setIsLoading(false);
        console.log('savePhoto error:', error);
        // Alert.alert('Atenção', 'Erro ao atualizar imagem tente novamente!')
      }
    }
  };

  return (
    <UserContext.Provider value={{ userData, savePhoto, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
