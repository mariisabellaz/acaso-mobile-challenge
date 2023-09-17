import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export type TypeStyleProps = 'LINEAR' | 'LIGHT';

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})`
  width: ${width}px;
  height: 380px;
  margin-bottom: ${({ theme }) => theme.SPACING.MD}px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 213px;
  height: 213px;

  border-radius: 106px;
`;
