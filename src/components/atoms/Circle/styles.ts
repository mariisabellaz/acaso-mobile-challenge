import styled from 'styled-components/native';

export const Container = styled.View`
  width: 162px;
  height: 162px;

  border-radius: 81px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.LIGHT};

  justify-content: center;
  align-items: center;
`;
