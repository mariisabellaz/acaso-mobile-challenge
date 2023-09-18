import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';

import { CommonScreen } from '@components/templates/DefaultPage';

export const ContainerForm = styled(CommonScreen)`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const ScrollView = styled.KeyboardAvoidingView`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const KeyboardView = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
`;
