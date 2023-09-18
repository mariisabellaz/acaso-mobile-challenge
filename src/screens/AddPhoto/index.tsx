import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageSourcePropType } from 'react-native';

import { useUser } from '@context/userContext';
import { useImagePicker } from '@hooks/useImagePicker';

import { PickerImage } from '@components/organisms/PickerImage';
import { CommonScreen } from '@components/templates/DefaultPage';

export function AddPhoto() {
  const { navigate } = useNavigation();
  const { imageUri, pickImage } = useImagePicker();
  const { savePhoto, fechUser, userData } = useUser();

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

  const onChangeImage = async () => {
    pickImage();
  };

  useEffect(() => {
    fechUser();
  }, []);

  return (
    <CommonScreen.Heading label={`Insira uma foto para seu \nperfil de aca.so`} appearance="title">
      <PickerImage
        onPress={onContinue}
        onPressChangePhoto={onChangeImage}
        onPressHiperlink={onPressHiperlink}
        // imageSource={userData.profile_picture || imageUri}
      />
    </CommonScreen.Heading>
  );
}
