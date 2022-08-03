import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import palette from '../../theme/palette'

export const RootContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.yellow};
  justify-content: flex-start;
  align-items: stretch;
  padding: 16px 8px 8px 8px;
`
