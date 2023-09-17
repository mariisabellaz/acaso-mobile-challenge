import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

type CommonInputProps = Partial<S.CustomTextInputProps> & TextInputProps & { testID?: string };

export function Input({ hasError, ...rest }: CommonInputProps) {
  const { COLORS } = useTheme();
  return <S.Container hasError={hasError} placeholderTextColor={COLORS.TEXT.PRIMARY} {...rest} />;
}
