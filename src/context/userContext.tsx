// import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface UserData {
  first_name: string;
  last_name: string;
  last_access_at: string;
  profile_picture: ImageSourcePropType;
}

interface UserContextType {
  userData: UserData;
  fetchUserData: () => Promise<void>;
  savePhoto: () => Promise<void>;
  isLoading: boolean;
}

type ChildrenContextProps = { children: ReactNode };

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: ChildrenContextProps) => {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [isLoading, setIsLoading] = useState(false);

  const { navigate } = useNavigation();

  const fetchUserData = async () => {
    try {
      const DATA = {
        first_name: 'Joao',
        last_name: 'Carlos',
        last_access_at: '2023-09-17T21:24:27.717Z',
        profile_picture:
          'https://fastly.picsum.photos/id/478/200/200.jpg?hmac=YfKBYcZHT991lmrKfB0pYNaztmUvQecXbVrc5V4mj8E',
      };
      setUserData(DATA);
    } catch (error) {
      // Handle errors
    }
  };

  const savePhoto = async () => {
    //CRIAR CONTEXTO DE SALVAR FOTO
    navigate('profile');
  };

  return (
    <UserContext.Provider value={{ userData, fetchUserData, savePhoto, isLoading }}>
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
