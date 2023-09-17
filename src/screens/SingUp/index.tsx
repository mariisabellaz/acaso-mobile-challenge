import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';

import { SingUpModel } from '@models/Authentication';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './signup.yup';

export function SingUp() {
  const { navigate, goBack } = useNavigation();

  const { control, handleSubmit, formState, errors } = useForm<SingUpModel>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = (data: SingUpModel) => {
    console.log('DATA ==>', data);
    // navigate('confirmemail');
  };

  return (
    <ScrollView>
      <CommonScreen.Heading label="Cadastro">
        <S.ContainerForm>
          <Form
            caption="E-mail*"
            name="email"
            control={control}
            formState={formState}
            placeholder="seu@email.com"
            error={errors?.email?.message}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
          />
          <Form
            caption="Primeiro nome*"
            name="first_name"
            control={control}
            formState={formState}
            placeholder="Primeiro nome"
            error={errors?.first_name?.message}
            autoComplete="username"
          />
          <Form
            caption="Último nome*"
            name="last_name"
            control={control}
            formState={formState}
            placeholder="Último nome"
            error={errors?.last_name?.message}
          />
          <Form
            caption="Senha"
            name="password"
            control={control}
            formState={formState}
            placeholder="******"
            error={errors?.password?.message}
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete="off"
          />
          <Form
            caption="Confirme sua senha*"
            name="confirm_password"
            control={control}
            formState={formState}
            placeholder="******"
            error={errors?.confirm_password?.message}
            autoCorrect={false}
            autoCapitalize="none"
            autoComplete="off"
          />
          <Button title="Criar conta em aca.so" onPress={handleSubmit(onSubmit)} />
          <Button title="Voltar ao login" type="SECONDARY" onPress={goBack} />
        </S.ContainerForm>
      </CommonScreen.Heading>
    </ScrollView>
  );
}
