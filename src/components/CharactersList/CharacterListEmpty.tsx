import { Container, Description } from './CharacterListEmptyStyle'

export default function CharactersListEmpty() {
  return (
    <Container testID="empty-characters-list-component">
      <Description>Sorry, no characters found.</Description>
    </Container>
  )
}
