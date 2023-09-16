import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type HiperlinkProps = TouchableOpacityProps & {
  label: string;
};

export function Hiperlink({ label, ...rest }: HiperlinkProps) {
  return (
    <S.Container {...rest}>
      <S.Label appearance="paragraph" alignment="center" hyperlink>
        {label}
      </S.Label>
    </S.Container>
  );
}
