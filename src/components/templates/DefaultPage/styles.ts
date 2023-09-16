import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';

export const SafeAreaView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
  padding: ${({ theme }) => theme.SPACING.MD}px;

  align-items: center;
`;

export const SafeAreaViewDark = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.DARK};
  padding: ${({ theme }) => theme.SPACING.MD}px;

  align-items: center;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.DARK};
  padding: ${({ theme }) => theme.SPACING.MD}px;

  align-items: center;
`;

export const Label = styled(Typography)`
  padding: ${({ theme }) => theme.SPACING.SM}px 0;
`;

export const Title = styled(Typography)`
  padding: ${({ theme }) => theme.SPACING.LG}px 0;
`;
