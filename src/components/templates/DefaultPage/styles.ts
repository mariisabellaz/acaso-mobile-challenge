import styled from 'styled-components/native';

import { Typography } from '@components/atoms/Typography';
import normalize from 'react-native-normalize';

export type CustomTextProps = {
  padding: 'NONE' | 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL';
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
  align-items: center;
`;

export const SafeAreaView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 100,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
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

export const Label = styled(Typography)<CustomTextProps>`
  padding: ${normalize(70)}px 0 ${({ theme, padding }) => theme.SPACING[padding]}px;
`;

export const Title = styled(Typography)`
  padding: ${({ theme }) => theme.SPACING.LG}px 0;
`;
