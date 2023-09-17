import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './login.yup';

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.tron.log('DATA', data);
  };

  const goToSingUp = () => {
    navigate('singup');
  };

  return (
    <CommonScreen.Heading label="Login">
      <S.ContainerForm>
        <Form
          caption="E-mail"
          name="email"
          control={control}
          placeholder="seu@email.com"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          error={errors?.email?.message}
        />
        <Form
          caption="Senha"
          name="password"
          control={control}
          placeholder="******"
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          error={errors?.password?.message}
        />
        <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
        <S.HelperText>Não possui conta em aca.so?</S.HelperText>
        <Button title="Criar uma conta" type="secondary" onPress={goToSingUp} />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
