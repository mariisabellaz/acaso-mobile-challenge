import React, { ReactNode } from 'react';

import * as S from './styles';

type CircleProps = {
  children?: ReactNode;
};

export function Circle({ children }: CircleProps) {
  return <S.Container>{children}</S.Container>;
}
