import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as S from './styles';

import logoImg from '@assets/img/logo.png';

export function Header() {
  const insets = useSafeAreaInsets();

  return (
    <S.Container top={insets}>
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
