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
  scrollEnabled?: boolean;
};

type ScreenBackgroundProps = {
  appearance?: AppearanceType;
};

const Page = ({ children }: PropsWithChildren) => <S.SafeAreaView>{children}</S.SafeAreaView>;

const ScreenImageBackground: React.FC<PropsWithChildren & ScreenBackgroundProps> = ({
  children,
}) => <S.SafeAreaViewDark>{children}</S.SafeAreaViewDark>;

const ScreenHeading: React.FC<PropsWithChildren & ScreenTypographyProps> = ({
  children,
  label,
  appearance = 'heading',
  scrollEnabled = false,
}) => (
  <S.Container>
    <S.SafeAreaView scrollEnabled={scrollEnabled} showsVerticalScrollIndicator={false}>
      <Header />
      <S.Label
        appearance={appearance}
        alignment="center"
        label={label}
        padding={appearance === 'heading' ? 'XXL' : 'MD'}
      />
      {children}
    </S.SafeAreaView>
  </S.Container>
);

Page.Heading = ScreenHeading;
// Page.Text = ScreenText;
// Page.Heading = ScreenHeading;
Page.ImageBackground = ScreenImageBackground;

export default Page;
