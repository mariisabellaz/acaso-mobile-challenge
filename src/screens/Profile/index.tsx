import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';

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
      <Typography appearance="display_bold" alignment="center">
        {name}
      </Typography>

      <Typography appearance="display" alignment="center">
        {lastName?.toUpperCase()}
      </Typography>

      <S.Container>
        <Typography>Ativo há pelo menos </Typography>
        <Typography appearance="button">{screenDuration}</Typography>
      </S.Container>

      <Button title="Sair de aca.so" appearance="small" />
    </CommonScreen.ImageBackground>
  );
}
