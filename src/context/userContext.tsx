import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import { BASE_URL, STORAGE_KEY_USER } from '@utils/storagekeys';
import { UserDataModel } from './model/user.model';

type UserContextType = {
  savePhoto: (imageUri: ImageSourcePropType) => Promise<void>;
  userData: UserDataModel;
  loadUserData: () => Promise<void>;
};

type ChildrenContextProps = { children: ReactNode };

const UserContext = createContext<UserContextType | undefined>(undefined);

const mapJsonToUserData = (json: any) => {
  return {
    first_name: json.family?.first_name?.name || '',
    last_name: json.family?.last_name?.name || '',
    last_access_at: json.last_access_at || '',
    profile_picture: json.profile_picture || '',
  };
};

export const UserProvider = ({ children }: ChildrenContextProps) => {
  const { navigate } = useNavigation();
  const [userData, setUserData] = useState<UserDataModel>({} as UserDataModel);

  useEffect(() => {
    readUserData();
  }, []);

  const savePhoto = async (imageUri: ImageSourcePropType) => {
    const fileType = imageUri.toString().endsWith('.png') ? 'image/png' : 'image/jpeg';

    if (fileType === 'image/png') {
      // Alert.alert('Atenção', 'Formato de imagem não aceito seleciona formato jpeg')
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
          console.log('savePhoto success:', response.data);
          navigate('profile');
        }
      } catch (error) {
        console.log('savePhoto error:', error);
        // Alert.alert('Atenção', 'Erro ao atualizar imagem tente novamente!');
      }
    }
  };

  const loadUserData = async () => {
    const { id_token } = userData;
    try {
      const response = await axios.get(`${BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      });
      if (response.status === 200) {
        const userDataFromJson = mapJsonToUserData(response.data);
        setUserData(userDataFromJson as any);
      }
    } catch (error) {
      console.log('load User Data aqui', error);
    }
  };

  const readUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem(STORAGE_KEY_USER);
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
    } catch (error) {
      throw new Error('Erro ao ler os dados do usuário');
    }
  };

  return (
    <UserContext.Provider value={{ userData, savePhoto, loadUserData }}>
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
