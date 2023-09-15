import { FlattenInterpolation, css } from 'styled-components';
import styled, { DefaultTheme, ThemeProps } from 'styled-components/native';

type AppearanceType =
  | 'display'
  | 'heading'
  | 'caption'
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'placeholder'
  | 'button'
  | 'helperText';

export type CustomTextProps = {
  appearance: AppearanceType;
  alignment?: 'center' | 'left' | 'right';
  hyperlink?: boolean;
};

const styles: {
  [key in AppearanceType]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  display: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XXL}px;
      color: ${theme.COLORS.TEXT.LIGHT};
      font-family: ${theme.FONTFAMILY.ITALIC};
    `};
  `,
  heading: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XL}px;
      color: ${theme.COLORS.TEXT.LIGHT};
      font-family: ${theme.FONTFAMILY.BOLD};
    `};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.LG}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.BOLD};
    `};
  `,
  subtitle: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.MD}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.BOLD};
    `};
  `,
  caption: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.MD}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.MEDIUM};
    `};
  `,
  placeholder: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.PRIMARY};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
  paragraph: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.LIGHT};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
  button: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.SM}px;
      color: ${theme.COLORS.TEXT.LIGHT};
      font-family: ${theme.FONTFAMILY.MEDIUM};
    `};
  `,
  helperText: css`
    ${({ theme }) => css`
      font-size: ${theme.FONTSIZE.XS}px;
      color: ${theme.COLORS.TEXT.ERROR};
      font-family: ${theme.FONTFAMILY.REGULAR};
    `};
  `,
};

export const Label = styled.Text<CustomTextProps>`
  ${({ appearance }) => styles[appearance]}
  text-align: ${({ alignment }) => alignment ?? 'left'};
  text-decoration-line: ${({ hyperlink }) => (hyperlink ? 'underline' : 'none')};
`;
