import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

import { useUserData } from '@context/userContext';
import { useImagePicker } from '@hooks/useImagePicker';
import { useStorage } from '@hooks/useStorage';

import { PickerImage } from '@components/organisms/PickerImage';
import { CommonScreen } from '@components/templates/DefaultPage';

export function AddPhoto() {
  const { navigate } = useNavigation();
  const { imageUri, pickImage } = useImagePicker();
  const { userData } = useStorage();
  const { savePhoto, loadUserData } = useUserData();

  const onPressHiperlink = () => {
    navigate('profile');
  };

  const onContinue = async () => {
    if (userData.profile_picture) {
      navigate('profile');
    } else {
      savePhoto(imageUri as ImageSourcePropType);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <CommonScreen.Heading label={`Insira uma foto para seu \nperfil de aca.so`} appearance="title">
      <PickerImage
        onPress={onContinue}
        onPressChangePhoto={() => {}}
        onPressHiperlink={onPressHiperlink}
        imageSource={userData.profile_picture || imageUri}
      />
    </CommonScreen.Heading>
  );
}
