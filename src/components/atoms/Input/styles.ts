import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type CustomTextInputProps = {
  hasError?: boolean;
};

export const Container = styled(TextInput)<CustomTextInputProps>`
  width: 100%;
  height: 50px;

  ${({ theme }) => css`
    padding: 0 ${theme.SPACING.SM}px;
    border-radius: ${theme.BORDER.RADIUS.INPUT}px;
    background-color: ${theme.COLORS.BACKGROUND.INPUT};

    text-align: left;
    font-size: ${theme.FONTSIZE.SM}px;
    font-family: ${theme.FONTFAMILY.REGULAR};
    color: ${theme.COLORS.TEXT.PRIMARY};
  `}

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.COLORS.TEXT.ERROR};
      border-width: ${theme.BORDER.INPUT}px;
    `}
`;
