import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type ButtonProps = Partial<S.CustomButtonProps> & TouchableOpacityProps & { label: string };

export function Button({ type = 'primary', appearance = 'large', label, ...rest }: ButtonProps) {
  return (
    <S.Containers
      appearance={appearance}
      type={type}
      accessible={true}
      accessibilityLabel={label}
      accessibilityRole="button"
      {...rest}
    >
      <S.Label type={type} label={label} />
    </S.Containers>
  );
}
