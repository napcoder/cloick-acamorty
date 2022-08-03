import styled from 'styled-components/native'

import palette from '../../theme/palette'

interface RowProps {
  enableBorder?: boolean
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  justify-content: space-between;
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
  flex-shrink: 1;
  /* justify-content: flex-start; */
  /* align-items: stretch; */
  /* flex-wrap: wrap; */
`

interface DetailLabelProps {
  minWidth: number
}

export const DetailLabel = styled.Text<DetailLabelProps>`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 16px;
  /* margin-right: 16px; */
  line-height: 20px;
  /* min-width: ${(props) => props.minWidth}px; */
`

export const DetailTextContainer = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
  /* flex-wrap: wrap; */
  /* background-color: red; */
  margin-left: 24px;
  align-items: flex-end;
  margin-bottom: 4px;
`

export const DetailText = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Regular;
  font-size: 16px;
  line-height: 20px;
  /* flex-wrap: wrap; */
  /* flex-shrink: 1; */
`
