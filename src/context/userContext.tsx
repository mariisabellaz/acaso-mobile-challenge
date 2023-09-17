// import axios from 'axios';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface UserContextType {
  userData: UserData | null;
  fetchUserData: () => Promise<void>;
}

interface UserData {
  // Defina a estrutura de dados do usuário
  id: string;
  name: string;
  email: string;
  // ...
}
type ChildrenContextProps = { children: ReactNode };

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: ChildrenContextProps) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const fetchUserData = async () => {
    try {
      // Obtenha o token da AsyncStorage
      // const userToken = await AsyncStorage.getItem('userToken');
      //if (userToken) {
      // Configure o token nas requisições Axios
      //axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
      // Substitua isso pelo seu código de chamada à API para obter os dados do usuário
      // const response = await api.get('/user/profile');
      // const userData = response.data;
      //setUserData(userData);
      //}
    } catch (error) {
      // Handle errors
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, fetchUserData }}>{children}</UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
