// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import mockData from '../../mocks/characterDetail1.json'
import mockEpisodes1 from '../../mocks/episodesList1.json'
import mockLocation1 from '../../mocks/locationDetail1.json'
import mockLocation2 from '../../mocks/locationDetail2.json'
import palette from '../../theme/palette'
import { Character, Episode, Location } from '../../types'
import CharacterInfo from './index'

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.yellow};
  padding: 20px;
`

const character = mockData as Character
const origin = mockLocation1 as Location
const location = mockLocation2 as Location
const episodes = mockEpisodes1 as Episode[]

export const actions = {
  // onSelectItem: action('onSelectItem'),
  // onEndReached: action('onEndReached'),
}
storiesOf('CharacterInfo', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => (
    <CharacterInfo
      character={character}
      location={location}
      origin={origin}
      {...actions}
      episodes={episodes}
    />
  ))
  .add('long name', () => (
    <CharacterInfo
      character={{ ...character, name: 'Abadango Cluster Princess' }}
      location={location}
      origin={origin}
      episodes={episodes}
      {...actions}
    />
  ))
  .add('wrong image', () => (
    <CharacterInfo
      location={location}
      origin={origin}
      character={{
        ...character,
        image: 'https://rickandmortyapi.com/wrongpath/character/avatar/10.jpeg',
      }}
      episodes={episodes}
      {...actions}
    />
  ))
  .add('invalid date', () => (
    <CharacterInfo
      character={{ ...character, created: 'blabla' }}
      location={location}
      origin={origin}
      episodes={episodes}
      {...actions}
    />
  ))
  .add('loading all', () => (
    <CharacterInfo
      character={character}
      location={location}
      isLoadingLocation
      origin={origin}
      isLoadingOrigin
      {...actions}
      episodes={episodes}
      isLoadingEpisodes
    />
  ))
  .add('no data', () => (
    <CharacterInfo character={character} location={null} origin={null} {...actions} episodes={[]} />
  ))
