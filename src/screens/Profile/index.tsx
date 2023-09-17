import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import img from '@assets/img/img.png';
import { Typography } from '@components/atoms/Typography';
import { Button } from '@components/molecules/Button';
import { CardProfile } from '@components/organisms/CardProfile';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function Profile() {
  const [isLoading, setIsLoading] = useState(true);

  const name = 'João';
  const lastName = 'Carlos';
  const screenDuration = '42 minutos';

  function handleNewGroup() {
    console.tron.log('clicou');
  }

  useFocusEffect(
    useCallback(() => {
      // fetchGroups()
    }, [])
  );

  return (
    <CommonScreen.ImageBackground>
      <CardProfile type="image" imageSource={img} />
      <Typography appearance="display_bold" alignment="center" label={name} />

      <Typography appearance="display" alignment="center" label={lastName?.toUpperCase()} />

      <S.Container>
        <Typography label="Ativo há pelo menos" />
        <Typography appearance="button" label={screenDuration} />
      </S.Container>

      <Button label="Sair de aca.so" appearance="small" accessibilityHint="Faz logoff" />
    </CommonScreen.ImageBackground>
  );
}
