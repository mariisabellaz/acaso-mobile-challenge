import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  appearance?: S.ButtonTypeStyleProps;
};

export function Button({ title, appearance = 'primary', ...rest }: ButtonProps) {
  return (
    <S.Container type={appearance} {...rest}>
      <S.Label type={appearance} appearance="button" alignment="center">
        {title}
      </S.Label>
    </S.Container>
  );
}
