import styled from 'styled-components/native';

export type TypeStyleProps = 'LINEAR' | 'LIGHT';

/*
export const Container = styled(LinearGradient)<Props>`
  width: 244px;
  height: 244px;

  border-radius: ${({ theme }) => theme.BORDER.RADIUS.THUMBNAIL};

  justify-content: center;
  align-items: center;

  ${({ type }) =>
    type === 'LIGHT' &&
    css`
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND.LIGHT};
    `}
`;
*/

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  width: 213px;
  height: 213px;

  border-radius: 106px;
`;
