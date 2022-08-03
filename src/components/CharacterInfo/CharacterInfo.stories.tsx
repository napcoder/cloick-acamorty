import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import mockData from '../../mocks/characterDetail1.json'
import palette from '../../theme/palette'
import { Character } from '../../types'
import CharacterInfo from './index'

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.yellow};
  padding: 20px;
`

const character = mockData as Character

export const actions = {
  // onSelectItem: action('onSelectItem'),
  // onEndReached: action('onEndReached'),
}
storiesOf('CharacterInfo', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <CharacterInfo character={character} {...actions} />)
  .add('wrong image', () => (
    <CharacterInfo
      character={{
        ...character,
        image: 'https://rickandmortyapi.com/wrongpath/character/avatar/10.jpeg',
      }}
      {...actions}
    />
  ))
  .add('invalid date', () => (
    <CharacterInfo character={{ ...character, created: 'blabla' }} {...actions} />
  ))
