import React, { ReactNode } from 'react';

import * as S from './styles';

type Props = {
  children?: ReactNode;
};

export function Circle({ children }: Props) {
  return <S.Container>{children}</S.Container>;
}
