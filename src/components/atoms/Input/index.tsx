import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity as TogglePasswordButton } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

type CommonInputProps = Partial<S.CustomTextInputProps> & TextInputProps & { isPassword?: boolean };

export function Input({ hasError, isPassword = false, ...rest }: CommonInputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.Input
        placeholderTextColor={COLORS.TEXT.PRIMARY}
        secureTextEntry={isPassword ? showPassword : false}
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
