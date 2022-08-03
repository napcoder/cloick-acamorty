import { format, isValid as isValidDate } from 'date-fns'

import { Character } from '../../types'
import Row from '../DetailRow'
import { DetailContainer, FrameContainer, Name, Portrait } from './style'

interface Props {
  character: Character
}

export default function CharacterDetail({ character }: Props) {
  let formattedDate = 'n.a.'
  const createdAt = new Date(character.created)
  if (isValidDate(createdAt)) {
    formattedDate = format(createdAt, 'PPP')
  }
  return (
    <FrameContainer>
      <Name>{character.name}</Name>
      <Portrait source={{ uri: character.image }} resizeMode="contain" />
      <DetailContainer>
        <Row label="Id" text={'#' + character.id} />
        <Row label="Name" text={character.name} />
        <Row label="Species" text={character.species} />
        <Row label="Gender" text={character.gender} />
        <Row label="Type" text={character.type || 'n.a.'} />
        <Row label="Status" text={character.status} />
        <Row label="Created" text={formattedDate} />
      </DetailContainer>
    </FrameContainer>
  )
}
