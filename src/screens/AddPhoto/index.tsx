import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import img from '@assets/img/img.png';
import { Button } from '@components/molecules/Button';
import { Hiperlink } from '@components/molecules/HiperLink';
import { Thumbnail } from '@components/organisms/Thumbnail';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function AddPhoto() {
  const [image, setImage] = useState<boolean>(false);

  const navigation = useNavigation();

  function goToProfile() {
    navigation.navigate('profile');
  }

  return (
    <CommonScreen.Header label="Insira uma foto para seu perfil de aca.so">
      <S.ContainerAvatar>
        <Thumbnail type="image" imageSource={img} />
      </S.ContainerAvatar>

      <S.ContainerButton>
        <Button title="Inserir foto" />

        {image ? (
          <Button title="Trocar foto" type="SECONDARY" />
        ) : (
          <Hiperlink label="Entrar sem foto" onPress={goToProfile} />
        )}
      </S.ContainerButton>
    </CommonScreen.Header>
  );
}
