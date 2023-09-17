import { Dimensions, TouchableOpacity } from 'react-native';
import { FlattenInterpolation, css } from 'styled-components';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

const { width } = Dimensions.get('window');

type AppearanceType = 'large' | 'small';

type ButtonTypeStyleProps = 'primary' | 'secondary';

export type CustomButtonProps = {
  type?: ButtonTypeStyleProps;
  appearance: AppearanceType;
};

const styles: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  large: css`
    ${({ theme }) => css`
      width: ${width - theme.SPACING.XL}px;
    `};
  `,
  small: css`
    ${() => css`
      width: 226px;
    `};
  `,
};

export const Containers = styled(TouchableOpacity)<CustomButtonProps>`
  ${({ appearance }) => styles[appearance]}

  height: 56px;
  align-items: center;
  justify-content: center;

  ${({ theme, type }) => css`
    border-radius: ${theme.BORDER.RADIUS.BUTTON}px;
    background-color: ${theme.COLORS.BACKGROUND.INPUT};

    opacity: ${type === 'primary' ? 0.8 : 1};
    background-color: ${type === 'primary'
      ? theme.COLORS.BUTTON.PRIMARY
      : theme.COLORS.BUTTON.SECONDARY};
    margin: ${theme.SPACING.XS}px 0;
  `};
`;

export const Label = styled(Typography)<{ type: ButtonTypeStyleProps }>`
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.TEXT.DARK : theme.COLORS.TEXT.LIGHT};
`;
