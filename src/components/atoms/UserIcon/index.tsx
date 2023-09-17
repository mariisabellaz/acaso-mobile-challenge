import Icon from '@assets/svg/user.svg';
import * as S from './styles';

type IconProps = Partial<S.CustomIconProps>;

export function UserIcon({ appearance = 'large' }: IconProps) {
  return (
    <S.Container appearance={appearance}>
      <S.ContainerIcon>
        <Icon
          width={appearance === 'small' ? 128 : 178}
          height={appearance === 'small' ? 127 : 137}
        />
      </S.ContainerIcon>
    </S.Container>
  );
}
