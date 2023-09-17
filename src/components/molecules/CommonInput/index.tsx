import { TextInputProps } from 'react-native';

import { Input } from '@components/atoms/Input';
import * as S from './styles';

type CustomProps = {
  caption: string;
  error?: string;
  hasError?: boolean;
};

type CommonInputProps = Partial<CustomProps> & TextInputProps;

export function CommonInput({ caption, error, hasError, ...props }: CommonInputProps) {
  return (
    <S.Container>
      <S.Caption appearance="caption">{caption}</S.Caption>
      <Input {...props} hasError={!!error} />
      {error && <S.ErrorLabel appearance="helperText">{error}</S.ErrorLabel>}
    </S.Container>
  );
}
