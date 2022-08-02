import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { View } from 'react-native'
import styled from 'styled-components/native'

import palette from '../../theme/palette'
import { Character } from '../../types'
// import { styles } from '../constants/globalStyles'
// import Task from './Task'
import CharactersListItem from './index'

export const character = {
  id: 10,
  name: 'Alan Rails',
  status: 'Dead',
  species: 'Human',
  type: 'Superhuman (Ghost trains summoner)',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: "Worldender's lair",
    url: 'https://rickandmortyapi.com/api/location/4',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/25'],
  url: 'https://rickandmortyapi.com/api/character/10',
  created: '2017-11-04T20:19:09.017Z',
} as Character

const ContainerView = styled.View`
  background-color: ${palette.yellow};
  padding: 20px 5px;
  padding-top: 40px;
`

export const actions = {
  onPress: action('onPress'),
}
storiesOf('CharactersListItem', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <CharactersListItem character={character} {...actions} />)
  .add('no type', () => <CharactersListItem character={{ ...character, type: '' }} {...actions} />)
  .add('long name', () => (
    <CharactersListItem
      character={{ ...character, name: 'Abadango Cluster Princess' }}
      {...actions}
    />
  ))
  .add('wrong image', () => (
    <CharactersListItem
      character={{
        ...character,
        image: 'https://rickandmortyapi.com/wrongpath/character/avatar/10.jpeg',
      }}
      {...actions}
    />
  ))
