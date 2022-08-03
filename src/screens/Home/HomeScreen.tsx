import { useMemo } from 'react'
import { Alert } from 'react-native'

import CharactersList from '../../components/CharactersList'
import { useGetCharactersQuery } from '../../services/rickandmorty'
import { Character, RootStackScreenProps } from '../../types'
import { SafeContainer, Title, TitleContainer } from './HomeScreenStyles'

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetCharactersQuery(1)
  // console.log(JSON.stringify(data))
  // console.log({ isSuccess, error, isLoading })

  if (error) {
    Alert.alert('Error', 'Sorry, something went wrong.')
    console.warn(error)
  }

  const results = useMemo(() => data?.results ?? [], [data])

  return (
    <SafeContainer edges={['left', 'right', 'top']}>
      <TitleContainer>
        <Title accessibilityRole="header">Cloick Acamorty</Title>
      </TitleContainer>
      <CharactersList
        data={results}
        onSelectItem={(character: Character) => navigation.navigate('Detail', { character })}
        onEndReached={() => {}}
        isLoading={isLoading}
      />
    </SafeContainer>
  )
}
