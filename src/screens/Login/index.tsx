import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAuth } from '@context/authContext';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './login.yup';

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    signIn(data);
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
        <Button
          label="Entrar"
          onPress={handleSubmit(onSubmit)}
          accessibilityHint="Faz login e navega para a próxima tela"
        />
        <S.HelperText label="Não possui conta em aca.so?" />
        <Button
          label="Criar uma conta"
          type="secondary"
          onPress={goToSingUp}
          accessibilityHint="Navega para a tela de criar cadastro"
        />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
