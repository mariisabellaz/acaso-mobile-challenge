import { useCallback, useState } from 'react';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import img from '@assets/img/img.png';
import { Typography } from '@components/atoms/Typography';
import { Button } from '@components/molecules/Button';
import { CardProfile } from '@components/organisms/CardProfile';
import { CommonScreen } from '@components/templates/DefaultPage';

export function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<boolean>(false);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  useFocusEffect(
    useCallback(() => {
      // fetchGroups()
    }, [])
  );

  return (
    <CommonScreen.ImageBackground>
      <CardProfile type="image" imageSource={img} />

      <Button title="Sair de aca.so" />
      <Typography>
        Ativo há pelo menos <Typography appearance="button">42 minutos</Typography>
      </Typography>
    </CommonScreen.ImageBackground>
  );
}
