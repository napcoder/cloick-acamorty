import { ActivityIndicator } from 'react-native'

import palette from '../../theme/palette'
import { Container } from './CharacterListSpinnerStyle'

interface Props {
  isVisible?: boolean
}

export default function CharacterListSpinner({ isVisible = false }: Props) {
  if (!isVisible) {
    return null
  }
  return (
    <Container testID="character-spinner">
      <ActivityIndicator size="large" color={palette.black} />
    </Container>
  )
}
