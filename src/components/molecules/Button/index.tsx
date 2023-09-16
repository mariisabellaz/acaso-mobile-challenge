import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeStyleProps;
};

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <S.Container type={type} {...rest}>
      <S.Label type={type} appearance="button" alignment="center">
        {title}
      </S.Label>
    </S.Container>
  );
}
