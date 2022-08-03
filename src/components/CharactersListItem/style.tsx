import styled from 'styled-components/native'

import palette from '../../theme/palette'

export const RootTouchable = styled.TouchableOpacity`
  margin-bottom: 10px;
  border-bottom-right-radius: 30px;
`

export const Container = styled.View`
  border-width: 2px;
  /* border-left-width: 10px; */
  border-color: ${palette.black};
  /* background-color: ${palette.cyan}; */
  padding: 8px;
  border-bottom-right-radius: 30px;
  /* margin-bottom: 10px; */
  /* margin-bottom: 10px; */
`
export const NameRow = styled.View`
  flex-direction: row;
  flex-shrink: 1;
  /* flex-wrap: wrap; */
`

export const Name = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 24px;
  line-height: 28px;
`

export const LongName = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Bold;
  font-size: 18px;
  line-height: 28px;
  flex-shrink: 1;
`

export const InfoText = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch-Regular;
  font-size: 16px;
  line-height: 20px;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 8px;
`

export const MainRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
`

export const InfoContainer = styled.View`
  flex-shrink: 1;
`
