import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 50%;
  align-self: center;
`;

export const Row = styled.View`
  flex-direction: row;
  margin: ${({ theme }) => theme.SPACING.SM}px 0 ${({ theme }) => theme.SPACING.XXL}px;
  align-self: center;
`;
