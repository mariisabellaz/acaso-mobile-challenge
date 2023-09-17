import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';
import { CommonScreen } from '@components/templates/DefaultPage';

export const ContainerForm = styled(CommonScreen)`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const HelperText = styled(Typography)`
  margin: ${({ theme }) => theme.SPACING.MD}px 0 ${({ theme }) => theme.SPACING.XS}px;
`;
