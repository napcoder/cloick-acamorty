import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import mockPage1 from '../../mocks/charactersPage1.json'
import palette from '../../theme/palette'
import { Character } from '../../types'
// import { Character } from '../../types'
import CharactersList from './index'

const page1 = mockPage1.results as Character[]

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.yellow};
  /* padding: 20px; */
`

export const actions = {
  onSelectItem: action('onSelectItem'),
}
storiesOf('CharactersList', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <CharactersList data={page1} {...actions} />)
  .add('empty', () => <CharactersList data={[]} {...actions} />)
  .add('footer loader', () => <CharactersList data={page1} showFooterLoader {...actions} />)
