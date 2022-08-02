// import { Character } from '../../types'
import { FlatList, ListRenderItem } from 'react-native'

import palette from '../../theme/palette'
import { Character } from '../../types'
import CharactersListItem from '../CharactersListItem'
import CharactersListEmpty from './CharacterListEmpty'
import CharacterListSpinner from './CharacterListSpinner'
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
  const renderFooter = () => <CharacterListSpinner isVisible={props.showFooterLoader} />
  const renderEmpty = () => <CharactersListEmpty />
  if (props.isLoading) {
    return (
      <LoadingView>
        <CharacterListSpinner isVisible />
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
      onEndReachedThreshold={15}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmpty}
    />
  )
}
