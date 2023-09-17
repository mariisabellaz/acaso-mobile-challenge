import { FlattenInterpolation, css } from 'styled-components';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

import Logo from '@assets/svg/user.svg';
import normalize from 'react-native-normalize';

type AppearanceType = 'large' | 'small';

export type CustomIconProps = {
  appearance: AppearanceType;
};

const styles: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  large: css`
    ${({ theme }) => css`
      width: 212px;
      height: 212px;
      border-radius: 106px;
      background-color: ${theme.COLORS.BACKGROUND.INPUT};
      padding-bottom: ${normalize(29)}px;
    `};
  `,
  small: css`
    ${({ theme }) => css`
      width: 144px;
      height: 144px;
      border-radius: 72px;
      border-radius: 106px;
      background-color: ${theme.COLORS.BACKGROUND.INPUT};
    `};
  `,
};

const icon: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  large: css`
    ${() => css`
      width: 212px;
      height: 212px;
      align-self: center;
      margin-top: auto;
    `};
  `,
  small: css`
    ${() => css`
      width: 144px;
      height: 144px;
    `};
  `,
};

export const Container = styled.View<CustomIconProps>`
  ${({ appearance }) => styles[appearance]}
`;

export const Icon = styled(Logo)<CustomIconProps>`
  ${({ appearance }) => icon[appearance]}
`;
