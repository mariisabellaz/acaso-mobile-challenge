import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRoute } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useAuth } from '@context/authContext';
import { useFormatTime } from '@hooks/useFormatTime';
import { useRefreshCode } from '@hooks/useRefreshCode';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './confirmEmail.yup';

type FormData = yup.InferType<typeof schema>;

type RouteParams = {
  email: string;
};

export function ConfirmEmail() {
  const route = useRoute();
  const { email } = route.params as RouteParams;

  const { countdown, isCounting, startCountdown } = useRefreshCode();
  const { confirmCode, resendConfirmationCode } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const formattedTime = useFormatTime(countdown);

  const onSubmit = async (data: FormData) => {
    const formDataWithEmail = { ...data, email };
    await confirmCode(formDataWithEmail);
  };

  const onResendConfirmationCode = async () => {
    startCountdown();
    await resendConfirmationCode(email);
  };

  return (
    <CommonScreen.Heading label={`Confirmar \ne-mail`}>
      <S.ContainerForm>
        <Form
          caption="Código"
          name="confirmation_code"
          control={control}
          placeholder="Digite o código recebido..."
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          error={errors?.confirmation_code?.message}
        />

        <Button
          label="Confirmar e-mail"
          onPress={handleSubmit(onSubmit)}
          accessibilityHint="Confirma o e-mail e navega para a próxima tela"
        />
        <S.HelperText label="Não recebeu o código?" />
        <Button
          label={isCounting ? `Aguarde ${formattedTime} para reenviar...` : 'Reenviar código'}
          type="secondary"
          onPress={onResendConfirmationCode}
          disabled={isCounting}
          accessibilityHint="Reenvia código por e-mail"
        />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
