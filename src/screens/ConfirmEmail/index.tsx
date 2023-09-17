import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useFormatTime } from '@hooks/useFormatTime';
import { useRefreshCode } from '@hooks/useRefreshCode';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

import { schema } from './confirmEmail.yup';

type FormData = yup.InferType<typeof schema>;

export function ConfirmEmail() {
  const { navigate } = useNavigation();
  const { countdown, isCounting, startCountdown } = useRefreshCode();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const formattedTime = useFormatTime(countdown);

  const onSubmit = (data: any) => {
    console.log('teste', data);
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
          onPress={startCountdown}
          disabled={isCounting}
          accessibilityHint="Reenvia código por e-mail"
        />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
