import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

type LinearCircleProps = {
  children?: ReactNode;
};

export function LinearCircle({ children }: LinearCircleProps) {
  const { COLORS } = useTheme();

  return (
    <S.Container colors={[COLORS.LINEARGRADIENT.START, COLORS.LINEARGRADIENT.END]}>
      {children}
    </S.Container>
  );
}
