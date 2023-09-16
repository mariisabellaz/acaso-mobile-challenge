import styled from 'styled-components/native';

type CustomHeaderProps = {
  top: any;
};

export const Container = styled.View<CustomHeaderProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
  margin-top: ${({ top }) => top}px;
  margin-bottom: ${({ theme }) => theme.SPACING.XL}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image``;
