import { TextInputProps } from 'react-native';

import { Input } from '@components/atoms/Input';
import * as S from './styles';

type CustomProps = {
  caption: string;
  error?: string;
  isPassword?: boolean;
};

type CommonInputProps = Partial<CustomProps> & TextInputProps;

export function CommonInput({ caption, error, isPassword, ...props }: CommonInputProps) {
  return (
    <S.Container>
      <S.Caption appearance="caption">{caption}</S.Caption>
      <Input {...props} hasError={!!error} isPassword={isPassword} />
      {error && <S.ErrorLabel appearance="helperText">{error}</S.ErrorLabel>}
    </S.Container>
  );
}
