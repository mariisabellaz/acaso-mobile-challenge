import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY_USER = 'acaso:user';

export const useStorage = () => {
  const saveUserData = async (userData: any) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userData));
    } catch (error) {
      // Tratar erros de armazenamento aqui
      console.error('Erro ao salvar os dados do usuário:', error);
    }
  };

  const removeUserData = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY_USER);
      console.log('SING-OUT');
    } catch (error) {
      // Tratar erros de remoção de dados aqui
      console.error('Erro ao fazer logout:', error);
    }
  };

  return { saveUserData, removeUserData };
};
