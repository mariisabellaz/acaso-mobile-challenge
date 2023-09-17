import { ImageSourcePropType } from 'react-native';

import * as S from './styles';

type ThumbnailImageProps = Partial<S.CustomThumbnailProps> & {
  testID?: string;
  imageSource?: ImageSourcePropType;
};

export function Thumbnail({ appearance = 'default', imageSource }: ThumbnailImageProps) {
  if (typeof imageSource === 'string') {
    return (
      <S.Avatar
        source={{ uri: imageSource }}
        appearance={appearance}
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel="Avatar"
      />
    );
  }
}
