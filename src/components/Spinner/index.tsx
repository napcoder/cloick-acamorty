import { ActivityIndicator } from 'react-native'

import palette from '../../theme/palette'
import { Container } from './style'

interface Props {
  isVisible?: boolean
  testId?: string
  aside?: boolean
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
}

export default function Spinner({
  isVisible = false,
  testId = 'spinner',
  aside = false,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: Props) {
  if (!isVisible) {
    return null
  }
  return (
    <Container
      testID={testId}
      aside={aside}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}>
      <ActivityIndicator size="large" color={palette.black} />
    </Container>
  )
}
