import { useNavigation } from '@react-navigation/native';

import { useImagePicker } from '@hooks/useImagePicker';

import { PickerImage } from '@components/organisms/PickerImage';
import { CommonScreen } from '@components/templates/DefaultPage';

export function AddPhoto() {
  const { navigate } = useNavigation();
  const { imageUri, pickImage } = useImagePicker();

  const onPressHiperlink = () => {
    navigate('profile');
  };

  const savePhoto = () => {
    navigate('profile');
    console.tron.log('salvar foto');
  };

  return (
    <CommonScreen.Header label="Insira uma foto para seu perfil de aca.so">
      <PickerImage
        onPress={savePhoto}
        onPressChangePhoto={pickImage}
        onPressHiperlink={onPressHiperlink}
        imageSource={imageUri}
      />
    </CommonScreen.Header>
  );
}
