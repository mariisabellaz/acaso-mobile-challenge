import { FlattenInterpolation, css } from 'styled-components';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

type AppearanceType = 'default' | 'small';

export type CustomProps = {
  appearance: AppearanceType;
};

const styles: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  default: css`
    ${() => css`
      width: 213px;
      height: 213px;
      border-radius: 106px;
    `};
  `,
  small: css`
    ${() => css`
      width: 144px;
      height: 144px;
      border-radius: 72px;
    `};
  `,
};

export const Avatar = styled.Image<CustomProps>`
  ${({ appearance }) => styles[appearance]}
`;
