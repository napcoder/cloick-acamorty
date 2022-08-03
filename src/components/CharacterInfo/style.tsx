import styled from 'styled-components/native'

import palette from '../../theme/palette'

export const FrameContainer = styled.View`
  background-color: ${palette.cyan};
  border-width: 10px;
  border-color: ${palette.black};
  padding: 24px 16px;
  align-items: center;
  border-radius: 40px;
`

export const Name = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 40px;
  margin-bottom: 16px;
`

export const Portrait = styled.Image`
  height: 300px;
  width: 300px;
  /* border-width: 10px; */
  border-color: ${palette.black};
`

export const DetailContainer = styled.View`
  margin-top: 16px;
`

export const DetailRow = styled.View`
  flex-direction: row;
  border-left-width: 1px;
  border-color: ${palette.black};
  border-bottom-left-radius: 4px;
  border-bottom-width: 1px;
  padding-left: 4px;
`
export const DetailLabel = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 16px;
  margin-right: 8px;
  line-height: 20px;
  min-width: 80px;
`

export const DetailText = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Regular;
  font-size: 16px;
  line-height: 20px;
`
