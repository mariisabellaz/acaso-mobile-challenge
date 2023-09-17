import * as S from './styles';

type IconProps = Partial<S.CustomIconProps>;

export function UserIcon({ appearance = 'large' }: IconProps) {
  return (
    <S.Container appearance={appearance}>
      <S.Icon appearance={appearance} />
    </S.Container>
  );
}
