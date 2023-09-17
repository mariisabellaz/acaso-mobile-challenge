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

  const renderComponent = () => {
    if (imageSource !== null) {
      return <Button title="Trocar foto" onPress={onPressChangePhoto} appearance="secondary" />;
    }
    return <Hiperlink label="Entrar sem foto" onPress={onPressHiperlink} />;
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
        <Button title={continueButtonText} onPress={imageSource ? onPress : onPressChangePhoto} />
        {renderComponent()}
      </S.ContainerButton>
    </S.Container>
  );
}
