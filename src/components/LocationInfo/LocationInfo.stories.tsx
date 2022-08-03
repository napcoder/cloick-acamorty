// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import mockData from '../../mocks/locationDetail1.json'
import palette from '../../theme/palette'
import { Location } from '../../types'
import LocationInfo from './index'

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.cyan};
  padding: 20px;
`

const location = mockData as Location

export const actions = {
  // onSelectItem: action('onSelectItem'),
  // onEndReached: action('onEndReached'),
}
storiesOf('LocationInfo', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <LocationInfo title="Location" location={location} {...actions} />)
  .add('no data', () => <LocationInfo title="Location" location={null} {...actions} />)
  .add('loading', () => <LocationInfo title="Location" location={location} loading {...actions} />)
