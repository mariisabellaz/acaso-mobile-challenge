import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export type CustomTextInputProps = {
  border?: boolean;
};

export const Container = styled(TextInput)<CustomTextInputProps>`
  width: 100%;
  height: 50px;

  ${({ theme }) => css`
    padding: ${theme.SPACING.SM}px;
    border-radius: ${theme.BORDER.RADIUS.INPUT}px;

    text-align: left;
    font-size: ${theme.FONTSIZE.SM}px;
    font-family: ${theme.FONTFAMILY.REGULAR};
    color: ${theme.COLORS.TEXT.PRIMARY};
  `}

  ${({ theme, border }) =>
    border &&
    css`
      border-color: ${theme.COLORS.TEXT.ERROR};
      border-width: ${theme.BORDER.INPUT}px;
    `}
`;
