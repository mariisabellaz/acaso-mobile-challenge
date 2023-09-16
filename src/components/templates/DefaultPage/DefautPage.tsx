import React, { PropsWithChildren } from 'react';

import { Header } from '@components/molecules/Header';
import * as S from './styles';

type AppearanceType =
  | 'display'
  | 'heading'
  | 'caption'
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'placeholder'
  | 'button'
  | 'helperText';

interface ScreenTypographyProps {
  label?: string;
  appearance?: AppearanceType;
}

const Page = ({ children }: PropsWithChildren) => <S.SafeAreaView>{children}</S.SafeAreaView>;

const ScreenImageBackground: React.FC<PropsWithChildren & ScreenTypographyProps> = ({
  children,
}) => <S.SafeAreaViewDark>{children}</S.SafeAreaViewDark>;

const ScreenHeader: React.FC<PropsWithChildren & ScreenTypographyProps> = ({ children, label }) => (
  <S.SafeAreaView>
    <Header />
    <S.Title appearance="title" alignment="center">
      {label}
    </S.Title>
    {children}
  </S.SafeAreaView>
);

const ScreenText: React.FC<PropsWithChildren & ScreenTypographyProps> = ({
  children,
  appearance,
  label,
}) => (
  <S.SafeAreaView>
    <S.Label appearance={appearance} alignment="center">
      {label}
    </S.Label>
    {children}
  </S.SafeAreaView>
);

Page.Header = ScreenHeader;
Page.Text = ScreenText;
Page.ImageBackground = ScreenImageBackground;

export default Page;
