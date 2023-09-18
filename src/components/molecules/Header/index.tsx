import { useSafeAreaInsets } from 'react-native-safe-area-context';

import logoImg from '@assets/img/logo.png';
import * as S from './styles';

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <S.Container insets={insets} accessible={true} accessibilityRole="header">
      <S.Logo
        source={logoImg}
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel="Logo"
      />
    </S.Container>
  );
}
