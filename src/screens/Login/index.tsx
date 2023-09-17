import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function Login() {
  const { navigate } = useNavigation();
  const { control, handleSubmit, formState } = useForm();

  const onSubmit = (data: any) => {
    console.log('teste', data);
  };

  const goToSingUp = () => {
    navigate('singup');
  };

  return (
    <CommonScreen.Heading label="Login">
      <S.ContainerForm>
        <Form
          caption="E-mail"
          name="name"
          control={control}
          formState={formState}
          placeholder="seu@email.com"
        />
        <Form
          caption="Senha"
          name="email"
          control={control}
          formState={formState}
          placeholder="******"
          error="teste"
        />
        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
        <S.HelperText>Não possui conta em aca.so?</S.HelperText>
        <Button title="Criar uma conta" type="SECONDARY" onPress={goToSingUp} />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
