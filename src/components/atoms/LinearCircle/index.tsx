import React, { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import * as S from './styles';

type Props = {
  children?: ReactNode;
};

export function LinearCircle({ children }: Props) {
  const { COLORS } = useTheme();

  return (
    <S.Container colors={[COLORS.LINEARGRADIENT.START, COLORS.LINEARGRADIENT.END]}>
      {children}
    </S.Container>
  );
}
