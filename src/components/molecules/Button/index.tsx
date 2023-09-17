import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type ButtonProps = Partial<S.CustomButtonProps> & TouchableOpacityProps & { title: string };

export function Button({ type = 'primary', appearance = 'large', title, ...rest }: ButtonProps) {
  return (
    <S.Containers appearance={appearance} type={type} {...rest}>
      <S.Label type={type}>{title}</S.Label>
    </S.Containers>
  );
}
