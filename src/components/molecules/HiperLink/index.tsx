import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  label: string;
};

export function Hiperlink({ label, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Label appearance="paragraph" alignment="center" hyperlink>
        {label}
      </S.Label>
    </S.Container>
  );
}
