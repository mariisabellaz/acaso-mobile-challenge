import { ImageSourcePropType } from 'react-native';

import { Button } from '@components/molecules/Button';
import { Hiperlink } from '@components/molecules/HiperLink';
import { ThumbnailCircle } from '@components/molecules/ThumbnailCircle';
import * as S from './styles';

type Props = {
  imageSource?: ImageSourcePropType;
  onPress: () => void;
  onPressHiperlink: () => void;
  onPressChangePhoto: () => void;
};

export function PickerImage({ imageSource, onPressHiperlink, onPressChangePhoto, onPress }: Props) {
  const continueButtonText = imageSource ? 'Continuar' : 'Inserir foto';
  const continueAccessibilityHint = imageSource
    ? 'Navega para a tela de perfil'
    : 'Inserir uma foto de usuário';

  const renderComponent = () => {
    if (imageSource) {
      return (
        <Button
          label="Trocar foto"
          onPress={onPressChangePhoto}
          type="secondary"
          accessibilityHint="Troca a foto do usuário"
        />
      );
    }
    return (
      <Hiperlink
        label="Entrar sem foto"
        onPress={onPressHiperlink}
        accessibilityHint="Navega para a tela de perfil sem foto do usuário"
      />
    );
  };

  return (
    <S.Container>
      <S.ContainerAvatar>
        <ThumbnailCircle.LinearCircle
          imageSource={imageSource}
          type={imageSource ? 'image' : 'icon'}
        />
      </S.ContainerAvatar>

      <S.ContainerButton>
        <Button
          label={continueButtonText}
          onPress={imageSource ? onPress : onPressChangePhoto}
          accessibilityHint={continueAccessibilityHint}
        />
        {renderComponent()}
      </S.ContainerButton>
    </S.Container>
  );
}
