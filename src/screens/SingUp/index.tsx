import { CommonScreen } from '@components/templates/DefaultPage';
import { useAuth } from '@context/authContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import * as S from './styles';

import { schema } from './signup.yup';

type FormData = yup.InferType<typeof schema>;

export function SingUp() {
  const { signUp } = useAuth();
  const { goBack } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await signUp(data);
  };

  return (
    <CommonScreen.Heading label="Cadastro" scrollEnabled>
      <S.KeyboardView>
        <Form
          caption="E-mail*"
          name="email"
          control={control}
          placeholder="seu@email.com"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          error={errors?.email?.message}
        />
        <Form
          caption="Primeiro nome*"
          name="first_name"
          control={control}
          placeholder="Primeiro nome"
          autoComplete="username"
          error={errors?.first_name?.message}
        />
        <Form
          caption="Último nome*"
          name="last_name"
          control={control}
          placeholder="Último nome"
          error={errors?.last_name?.message}
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
        <Form
          caption="Confirme sua senha*"
          name="confirm_password"
          control={control}
          placeholder="******"
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          error={errors?.confirm_password?.message}
        />
        <Button
          label="Criar conta em aca.so"
          onPress={handleSubmit(onSubmit)}
          accessibilityHint="Cria uma conta nova e navega para a próxima tela"
        />
        <Button
          label="Voltar ao login"
          type="secondary"
          onPress={goBack}
          accessibilityHint="Volta para a tela de login"
        />
      </S.KeyboardView>
    </CommonScreen.Heading>
  );
}
