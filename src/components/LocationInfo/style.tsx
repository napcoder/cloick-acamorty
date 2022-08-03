import styled from 'styled-components/native'

import palette from '../../theme/palette'

export const Container = styled.View`
  margin: 12px 0;
`

export const Title = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 20px;
  margin-bottom: 8px;
`

export const NoDataText = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Regular;
  font-size: 16px;
  line-height: 20px;
`
