import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function SingUp() {
  const { control, handleSubmit, formState } = useForm();
  const { navigate, goBack } = useNavigation();

  const onSubmit = (data: any) => {
    navigate('confirmemail');
  };

  return (
    <CommonScreen.Heading label="Cadastro">
      <S.ContainerForm>
        <Form
          caption="E-mail*"
          name="email"
          control={control}
          formState={formState}
          placeholder="seu@email.com"
        />
        <Form
          caption="Primeiro nome*"
          name="firstName"
          control={control}
          formState={formState}
          placeholder="Primeiro nome"
        />
        <Form
          caption="Último nome*"
          name="lastName"
          control={control}
          formState={formState}
          placeholder="Último nome"
        />
        <Form
          caption="Senha"
          name="password"
          control={control}
          formState={formState}
          placeholder="******"
          error="teste"
        />
        <Form
          caption="Confirme sua senha*"
          name="confirmPassword"
          control={control}
          formState={formState}
          placeholder="******"
        />
        <Button title="Criar conta em aca.so" onPress={onSubmit} />
        <Button title="Voltar ao login" type="SECONDARY" onPress={goBack} />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
