import styled from 'styled-components/native'

import palette from '../../theme/palette'

export const FrameContainer = styled.View`
  background-color: ${palette.cyan};
  border-width: 8px;
  border-color: ${palette.black};
  padding: 24px 12px;
  align-items: center;
  border-radius: 40px;
  flex: 1;
`

export const Name = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 40px;
  margin-bottom: 16px;
  text-align: center;
`

export const LongName = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 32px;
  text-align: center;
`

export const Portrait = styled.Image`
  height: 300px;
  width: 300px;
`

export const DetailContainer = styled.View`
  margin: 24px 0 8px 0;
`
