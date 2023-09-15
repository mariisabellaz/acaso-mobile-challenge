import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  width: 244px;
  height: 244px;

  border-radius: ${({ theme }) => theme.BORDER.RADIUS.THUMBNAIL}px;
  padding: 20px;

  justify-content: center;
  align-items: center;
`;
