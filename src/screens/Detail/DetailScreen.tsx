import { skipToken } from '@reduxjs/toolkit/query/react'
import { useMemo } from 'react'

import CharacterInfo from '../../components/CharacterInfo'
import { useGetEpisodesByIdsQuery, useGetLocationByIdQuery } from '../../services/rickandmorty'
import { RootStackScreenProps } from '../../types'
import { RootContainer } from './DetailScreenStyle'

export default function DetailScreen({ route }: RootStackScreenProps<'Detail'>) {
  const character = useMemo(() => route.params.character, [route.params.character])
  const locationId = useMemo(
    () => character.location.url.replace('https://rickandmortyapi.com/api/location/', ''),
    [character.location]
  )
  const originId = useMemo(
    () => character.origin.url.replace('https://rickandmortyapi.com/api/location/', ''),
    [character.origin]
  )
  const episodeIds = useMemo(
    () =>
      character.episode.map((item) => item.replace('https://rickandmortyapi.com/api/episode/', '')),
    [character.episode]
  )

  const {
    isLoading: isLoadingLocation,
    isError: isErrorrLocation,
    data: location,
  } = useGetLocationByIdQuery(locationId || skipToken)

  const {
    isLoading: isLoadingOrigin,
    isError: isErrorOrigin,
    data: origin,
  } = useGetLocationByIdQuery(originId || skipToken)

  const {
    isLoading: isLoadingEpisodes,
    isError: isErrorEpisodes,
    data: episodes,
  } = useGetEpisodesByIdsQuery(episodeIds || skipToken)

  return (
    <RootContainer edges={['bottom']}>
      <CharacterInfo
        character={character}
        origin={origin}
        isLoadingOrigin={isLoadingOrigin}
        location={location}
        isLoadingLocation={isLoadingLocation}
        episodes={episodes}
        isLoadingEpisodes={isLoadingEpisodes}
      />
    </RootContainer>
  )
}
