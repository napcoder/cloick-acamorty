import { Character } from '../../types'
import {
  Avatar,
  Container,
  InfoContainer,
  InfoText,
  LongName,
  MainRow,
  Name,
  NameRow,
  RootTouchable,
} from './style'

interface Props {
  character: Character
  onPress: () => void
}

export default function CharactersListItem({ character, onPress }: Props) {
  return (
    <RootTouchable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Character number ${character.id}: ${character.name}`}
      accessibilityHint={`Go to character ${character.name} detail screen.`}>
      <Container>
        <NameRow>
          <Name>#{character.id} - </Name>

          {character.name.length > 20 ? (
            <LongName>{character.name}</LongName>
          ) : (
            <Name>{character.name}</Name>
          )}
        </NameRow>
        <MainRow>
          <Avatar
            source={{ uri: character.image }}
            resizeMode="contain"
            defaultSource={require('../../../assets/image-placeholder.jpeg')}
          />
          <InfoContainer>
            <InfoText>Species: {character.species}</InfoText>
            <InfoText>Status: {character.status}</InfoText>
            <InfoText>Gender: {character.gender}</InfoText>
            <InfoText>Type: {character.type || 'n.a.'}</InfoText>
          </InfoContainer>
        </MainRow>
      </Container>
    </RootTouchable>
  )
}
