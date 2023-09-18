import React from 'react';
import { TextProps } from 'react-native';

import * as S from './styles';

type TypographyProps = Partial<S.CustomTextProps> & TextProps & { label: string };

export const Typography: React.FC<TypographyProps> = ({
  label,
  appearance = 'paragraph',
  ...props
}) => (
  <S.Label appearance={appearance} accessible={true} accessibilityRole="text" {...props}>
    {label}
  </S.Label>
);
