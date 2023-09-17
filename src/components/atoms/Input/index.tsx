import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity as TogglePasswordButton } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

type CommonInputProps = Partial<S.CustomTextInputProps> &
  TextInputProps & { testID?: string; isPassword?: boolean };

export function Input({ hasError, isPassword = false, ...rest }: CommonInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.Input
        placeholderTextColor={COLORS.TEXT.PRIMARY}
        secureTextEntry={showPassword}
        {...rest}
      />
      {isPassword && (
        <TogglePasswordButton onPress={() => setShowPassword(!showPassword)}>
          <S.Icon name={showPassword ? 'eye' : 'eye-off'} />
        </TogglePasswordButton>
      )}
    </S.Container>
  );
}
