import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

export function useImagePicker() {
  const [imageUri, setImageUri] = useState<ImageSourcePropType>('' as ImageSourcePropType);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
    }
  };

  return {
    imageUri,
    pickImage,
  };
}
