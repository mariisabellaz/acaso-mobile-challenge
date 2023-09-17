import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useFormatTime } from '@hooks/useFormatTime';
import { useRefreshCode } from '@hooks/useRefreshCode';

import { Button } from '@components/molecules/Button';
import { Form } from '@components/organisms/Form';
import { CommonScreen } from '@components/templates/DefaultPage';
import * as S from './styles';

export function ConfirmEmail() {
  const { navigate } = useNavigation();
  const { control, handleSubmit, formState } = useForm();
  const { countdown, isCounting, startCountdown } = useRefreshCode();

  const formattedTime = useFormatTime(countdown);

  const onSubmit = (data: any) => {
    console.log('teste', data);
  };

  return (
    <CommonScreen.Heading label={`Confirmar \ne-mail`}>
      <S.ContainerForm>
        <Form
          caption="Código"
          name="code"
          control={control}
          formState={formState}
          placeholder="Digite o código recebido..."
        />

        <Button title="Confirmar e-mail" onPress={handleSubmit(onSubmit)} />
        <Button
          title={isCounting ? `Aguarde ${formattedTime} para reenviar...` : 'Reenviar código'}
          type="SECONDARY"
          onPress={startCountdown}
          disabled={isCounting}
        />
      </S.ContainerForm>
    </CommonScreen.Heading>
  );
}
