import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import palette from '../../theme/palette'

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.yellow};
  justify-content: flex-start;
  align-items: stretch;
`

export const Title = styled.Text`
  color: ${palette.black};
  font-family: ChakraPetch_700Bold;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`
export const TitleContainer = styled.View`
  margin-top: 16px;
  margin-horizontal: 16px;
  border-radius: 8px;
`
