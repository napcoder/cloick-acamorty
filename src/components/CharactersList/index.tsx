// import { Character } from '../../types'
import { FlatList, ListRenderItem } from 'react-native'

import palette from '../../theme/palette'
import { Character } from '../../types'
import CharactersListItem from '../CharactersListItem'
import Spinner from '../Spinner'
import CharactersListEmpty from './CharacterListEmpty'
import { LoadingView } from './style'

interface Props {
  data: Character[]
  onSelectItem: (character: Character) => void
  showFooterLoader?: boolean
  onEndReached: () => void
  isLoading?: boolean
}

export default function CharactersList(props: Props) {
  const renderItem: ListRenderItem<Character> = ({ item }) => (
    <CharactersListItem character={item} onPress={() => props.onSelectItem(item)} />
  )
  const renderFooter = () => (
    <Spinner isVisible={props.showFooterLoader} testId="character-footer-spinner" />
  )
  const renderEmpty = () => <CharactersListEmpty />
  if (props.isLoading) {
    return (
      <LoadingView>
        <Spinner isVisible testId="character-spinner" />
      </LoadingView>
    )
  }
  return (
    <FlatList
      accessibilityRole="list"
      style={{ backgroundColor: palette.yellow }}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
      data={props.data}
      keyExtractor={(item: Character) => '' + item.id}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
      onEndReached={props.onEndReached}
      onEndReachedThreshold={2}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmpty}
    />
  )
}
