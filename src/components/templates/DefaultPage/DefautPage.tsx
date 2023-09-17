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

type ScreenTypographyProps = {
  label: string;
  appearance?: AppearanceType;
};

type ScreenBackgroundProps = {
  appearance?: AppearanceType;
};

const Page = ({ children }: PropsWithChildren) => <S.SafeAreaView>{children}</S.SafeAreaView>;

const ScreenImageBackground: React.FC<PropsWithChildren & ScreenBackgroundProps> = ({
  children,
}) => <S.SafeAreaViewDark>{children}</S.SafeAreaViewDark>;

const ScreenHeader: React.FC<PropsWithChildren & ScreenTypographyProps> = ({ children, label }) => (
  <S.SafeAreaView>
    <Header />
    <S.Title appearance="title" alignment="center" label={label} />
    {children}
  </S.SafeAreaView>
);

const ScreenText: React.FC<PropsWithChildren & ScreenTypographyProps> = ({
  children,
  appearance,
  label,
}) => (
  <S.SafeAreaView>
    <S.Label appearance={appearance} alignment="center" label={label} />
    {children}
  </S.SafeAreaView>
);

const ScreenHeading: React.FC<PropsWithChildren & ScreenTypographyProps> = ({
  children,
  label,
}) => (
  <S.SafeAreaView>
    <Header />
    <S.Heading appearance="heading" alignment="center" label={label} />
    {children}
  </S.SafeAreaView>
);

Page.Header = ScreenHeader;
Page.Text = ScreenText;
Page.Heading = ScreenHeading;
Page.ImageBackground = ScreenImageBackground;

export default Page;
