import { Dimensions, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

const { width } = Dimensions.get('window');

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 56px;

  ${({ theme, type }) => css`
    width: ${width - theme.SPACING.XL}px;
    border-radius: ${theme.BORDER.RADIUS.BUTTON}px;
    opacity: ${type === 'SECONDARY' ? 0.8 : 1};
    background-color: ${type === 'PRIMARY'
      ? theme.COLORS.BUTTON.PRIMARY
      : theme.COLORS.BUTTON.SECONDARY};

    margin: ${theme.SPACING.XS}px 0;
  `};

  justify-content: center;
  align-items: center;
`;

export const Label = styled(Typography)<Props>`
  color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.TEXT.DARK : theme.COLORS.TEXT.LIGHT};
`;
