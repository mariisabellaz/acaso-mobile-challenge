import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type HiperlinkProps = TouchableOpacityProps & { label: string };

export function Hiperlink({ label, ...rest }: HiperlinkProps) {
  return (
    <S.Container accessible={true} accessibilityLabel={label} accessibilityRole="button" {...rest}>
      <S.Label appearance="paragraph" alignment="center" label={label} />
    </S.Container>
  );
}
