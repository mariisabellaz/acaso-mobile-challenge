import React, { PropsWithChildren } from 'react';
import { ImageSourcePropType } from 'react-native';

import { Circle } from '@components/atoms/Circle';
import { LinearCircle } from '@components/atoms/LinearCircle';
import { Thumbnail } from '@components/atoms/Thumbnail';
import { UserIcon } from '@components/atoms/UserIcon';

interface ScreenProps {
  imageSource?: ImageSourcePropType;
}

const Page = ({ children }: PropsWithChildren) => <>{children}</>;

const ScreenLinear: React.FC<PropsWithChildren & ScreenProps> = ({ imageSource }) => (
  <LinearCircle>
    {imageSource ? <Thumbnail imageSource={imageSource} /> : <UserIcon />}
  </LinearCircle>
);

const ScreenDefault: React.FC<PropsWithChildren & ScreenProps> = ({ imageSource }) => (
  <Circle>
    {imageSource ? (
      <Thumbnail imageSource={imageSource} appearance="small" />
    ) : (
      <UserIcon appearance="small" />
    )}
  </Circle>
);

Page.LinearCircle = ScreenLinear;
Page.DefaultCircle = ScreenDefault;

export default Page;
