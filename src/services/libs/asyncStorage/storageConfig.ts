import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_TOKEN = '@acaso:token';

export async function getStorageLocations() {
  //const storage = await AsyncStorage.getItem(STORAGE_KEY);
  //const response = storage ? JSON.parse(storage) : [];
  // return response;
}

export async function saveUserToken(token: string) {
  await AsyncStorage.setItem(STORAGE_KEY_TOKEN, JSON.stringify(token));
}

export async function removeUserToken() {
  await AsyncStorage.removeItem(STORAGE_KEY_TOKEN);
}
