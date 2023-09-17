import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import * as yup from 'yup';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './signup.yup';

type FormData = yup.InferType<typeof schema>;

export function SingUp() {
  const { navigate, goBack } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.tron.log('DATA ==>', data);
    navigate('confirmemail');
  };

  return (
    <ScrollView>
      <CommonScreen.Heading label="Cadastro">
        <S.ContainerForm>
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
          <Button title="Criar conta em aca.so" onPress={handleSubmit(onSubmit)} />
          <Button title="Voltar ao login" type="secondary" onPress={goBack} />
        </S.ContainerForm>
      </CommonScreen.Heading>
    </ScrollView>
  );
}
