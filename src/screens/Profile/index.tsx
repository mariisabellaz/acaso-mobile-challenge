import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import { useAuth } from '@context/authContext';
import { useStorage } from '@hooks/useStorage';
import { formattedDateString } from '@utils/formattedDateString';

import { LoadIndicator } from '@components/atoms/Loading/styles';
import { Typography } from '@components/atoms/Typography';
import { Button } from '@components/molecules/Button';
import { CardProfile } from '@components/organisms/CardProfile';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function Profile() {
  const { signOut } = useAuth();
  const { isLoading, userData } = useStorage();

  useFocusEffect(
    useCallback(() => {
      //
    }, [])
  );

  const onSignOut = () => {
    signOut();
  };

  const render = () => {
    return (
      <>
        <CardProfile imageSource={userData?.profile_picture} />

        <S.Container>
          <Typography appearance="display_bold" alignment="center" label={userData?.first_name} />

          <Typography
            appearance="display"
            alignment="center"
            label={userData?.last_name?.toUpperCase()}
          />
          <S.Row>
            <Typography label={`Ativo `} />
            <Typography appearance="button" label={formattedDateString(userData?.last_access_at)} />
          </S.Row>
          <Button
            label="Sair de aca.so"
            appearance="small"
            accessibilityHint="Faz logoff"
            onPress={onSignOut}
          />
        </S.Container>
      </>
    );
  };

  return (
    <CommonScreen.ImageBackground>
      {isLoading ? <LoadIndicator /> : render()}
    </CommonScreen.ImageBackground>
  );
}
