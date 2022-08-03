import { ScrollView } from 'react-native'

import { safeParseAndFormatISODate } from '../../helpers/date-helpers'
import { Character, Episode, Location } from '../../types'
import Row from '../DetailRow'
import EpisodesList from '../EpisodesList'
import LocationInfo from '../LocationInfo'
import { DetailContainer, FrameContainer, LongName, Name, Portrait } from './style'

interface Props {
  character: Character
  origin: Location | null | undefined
  isLoadingOrigin?: boolean
  location: Location | null | undefined
  isLoadingLocation?: boolean
  episodes: Episode[] | null | undefined
  isLoadingEpisodes?: boolean
}

export default function CharacterDetail({
  character,
  location,
  origin,
  episodes,
  isLoadingEpisodes = false,
  isLoadingLocation = false,
  isLoadingOrigin = false,
}: Props) {
  const formattedDate = safeParseAndFormatISODate(character.created, 'PPP', 'n.a.')
  return (
    <FrameContainer>
      {character.name.length > 20 ? (
        <LongName>{character.name}</LongName>
      ) : (
        <Name>{character.name}</Name>
      )}
      <Portrait
        defaultSource={require('../../../assets/image-placeholder.jpeg')}
        source={{ uri: character.image }}
        resizeMode="contain"
      />
      <ScrollView
        style={{ alignSelf: 'stretch' }}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 40 }}>
        <DetailContainer>
          <Row label="Id" text={'#' + character.id} />
          <Row label="Name" text={character.name} />
          <Row label="Species" text={character.species} />
          <Row label="Gender" text={character.gender} />
          <Row label="Type" text={character.type || 'n.a.'} />
          <Row label="Status" text={character.status} />
          <Row label="Created" text={formattedDate} />
        </DetailContainer>
        <LocationInfo title="Origin" location={origin} loading={isLoadingOrigin} />
        <LocationInfo title="Location" location={location} loading={isLoadingLocation} />
        <EpisodesList episodes={episodes} loading={isLoadingEpisodes} />
      </ScrollView>
    </FrameContainer>
  )
}
