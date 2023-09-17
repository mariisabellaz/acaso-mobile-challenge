import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type CustomTextInputProps = {
  hasError?: boolean;
};

export const Container = styled.View<CustomTextInputProps>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    padding: 0 ${theme.SPACING.SM}px;
    border-radius: ${theme.BORDER.RADIUS.INPUT}px;
    background-color: ${theme.COLORS.BACKGROUND.INPUT};
  `}

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.COLORS.TEXT.ERROR};
      border-width: ${theme.BORDER.INPUT}px;
    `}
`;

export const Input = styled(TextInput)`
  flex: 1;

  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.FONTSIZE.SM}px;
    font-family: ${theme.FONTFAMILY.REGULAR};
    color: ${theme.COLORS.TEXT.PRIMARY};
  `}
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${theme.FONTSIZE.MD}px;
    color: ${theme.COLORS.TEXT.PRIMARY};
  `}
`;
