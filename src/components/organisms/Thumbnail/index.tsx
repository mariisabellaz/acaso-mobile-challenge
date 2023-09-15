import { ImageSourcePropType } from 'react-native';

import { Circle } from '@components/atoms/Circle';
import * as S from './styles';

export type TypeStyleProps = 'icon' | 'image';

type Props = {
  type?: TypeStyleProps;
  imageSource?: ImageSourcePropType;
};

export function Thumbnail({ type = 'image', imageSource }: Props) {
  return <Circle>{type === 'image' ? <S.Image source={imageSource} /> : null}</Circle>;
}
