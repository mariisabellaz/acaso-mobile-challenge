import { ImageSourcePropType } from 'react-native';

import Background from '@assets/img/background.png';
import { ThumbnailCircle } from '@components/molecules/ThumbnailCircle';
import * as S from './styles';

export type TypeStyleProps = 'icon' | 'image';

type CardProps = {
  imageSource: ImageSourcePropType;
};

export function CardProfile({ imageSource }: CardProps) {
  return (
    <S.Container source={Background}>
      <ThumbnailCircle.DefaultCircle imageSource={imageSource} />
    </S.Container>
  );
}
