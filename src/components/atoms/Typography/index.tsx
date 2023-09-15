import React, { PropsWithChildren } from 'react';

import * as S from './styles';

type TypographyProps = Partial<S.CustomTextProps> & PropsWithChildren & { testID?: string };

export const Typography: React.FC<TypographyProps> = ({
  children,
  appearance = 'paragraph',
  hyperlink,
  ...props
}) => (
  <S.Label appearance={appearance} hyperlink={hyperlink} {...props}>
    {children}
  </S.Label>
);
