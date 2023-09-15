import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

export const Container = styled(TouchableOpacity)`
  margin: ${({ theme }) => theme.SPACING.MD}px 0;
`;

export const Label = styled(Typography)``;
