import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import CharactersList from '../../components/CharactersList'
import { useGetCharactersQuery } from '../../services/rickandmorty'
import { Character, RootStackScreenProps } from '../../types'
import { SafeContainer, Title, TitleContainer } from './HomeScreenStyles'

export default function HomeScreen({ navigation }: RootStackScreenProps<'Home'>) {
  // Using a query hook automatically fetches data and returns query values
  const [page, setPage] = useState<number>(1)
  const [characters, setCharacters] = useState<Character[]>([])
  const { data, error, isLoading, isFetching } = useGetCharactersQuery(page)
  // console.log(JSON.stringify(data))
  // console.log({ isSuccess, error, isLoading })
  // console.log({ page })


  useEffect(() => {
    if (
      !isLoading &&
      !isFetching &&
      !error &&
      data?.results &&
      data.results.length > 0 &&
      !characters.find((item) => item.id === data.results[0].id)
    ) {
      setCharacters((characters) => [...characters, ...data.results])
    }
  }, [data, isLoading, isFetching, error])

  if (error) {
    Alert.alert('Error', 'Sorry, something went wrong.')
    console.warn(error)
  }

  return (
    <SafeContainer edges={['left', 'right', 'top']}>
      <TitleContainer>
        <Title accessibilityRole="header">Cloick Acamorty</Title>
      </TitleContainer>
      <CharactersList
        data={characters}
        onSelectItem={(character: Character) => navigation.navigate('Detail', { character })}
        onEndReached={() => {
          if (!isLoading && !isFetching && !error && data?.info.next != null) {
            setPage((page) => page + 1)
          }
        }}
        isLoading={isLoading}
        showFooterLoader={isFetching}
      />
    </SafeContainer>
  )
}
