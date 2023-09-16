import { ImageSourcePropType } from 'react-native';

import * as S from './styles';

type ThumbnailImageProps = Partial<S.CustomThumbnailProps> & {
  testID?: string;
  imageSource: ImageSourcePropType;
};

export function Thumbnail({ appearance = 'default', imageSource }: ThumbnailImageProps) {
  return <S.Avatar appearance={appearance} source={imageSource} />;
}
