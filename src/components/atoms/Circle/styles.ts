import styled from 'styled-components/native';

export const Container = styled.View`
  width: 160px;
  height: 160px;

  border-radius: 80px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.LIGHT};

  justify-content: center;
  align-items: center;
`;
