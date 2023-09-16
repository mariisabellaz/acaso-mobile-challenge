import { TextInputProps } from 'react-native';
import * as S from './styles';

type CommonInputProps = Partial<S.CustomTextInputProps> & TextInputProps & { testID?: string };

export function Input({ border, ...rest }: CommonInputProps) {
  return <S.Container border={border} {...rest} />;
}
