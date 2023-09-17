import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${({ theme }) => width - theme.SPACING.XL}px;
  margin-bottom: ${({ theme }) => theme.SPACING.MD}px;
`;

export const ErrorLabel = styled(Typography)`
  margin-top: ${({ theme }) => theme.SPACING.XS}px;
`;

export const Caption = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.SPACING.XS}px;
`;
