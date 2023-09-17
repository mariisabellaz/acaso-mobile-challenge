import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

export const Container = styled(TouchableOpacity)`
  margin: ${({ theme }) => theme.SPACING.MD}px 0;
  padding-bottom: 3px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND.LIGHT};
  border-bottom-width: 1px;
`;

export const Label = styled(Typography)``;
