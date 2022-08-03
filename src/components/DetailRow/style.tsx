import styled from 'styled-components/native'

import palette from '../../theme/palette'

interface RowProps {
  enableBorder?: boolean
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  ${(props) =>
    props.enableBorder
      ? `
    border-left-width: 1px;
    border-color: ${palette.black};
    border-bottom-left-radius: 4px;
    border-bottom-width: 1px;
  `
      : ''}
  padding-left: 4px;
`

interface DetailLabelProps {
  minWidth?: number
}

export const DetailLabel = styled.Text<DetailLabelProps>`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 16px;
  margin-right: 8px;
  line-height: 20px;
  min-width: ${(props) => props.minWidth ?? 80}px;
`

export const DetailText = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Regular;
  font-size: 16px;
  line-height: 20px;
`
