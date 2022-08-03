import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import mockData from '../../mocks/episodesList1.json'
import palette from '../../theme/palette'
import { Episode } from '../../types'
import EpisodesList from './index'

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.cyan};
  padding: 20px;
`

const episodes = mockData as Episode[]

storiesOf('EpisodesList', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <EpisodesList episodes={episodes} />)
  .add('empty list', () => <EpisodesList episodes={[]} />)
  .add('loading', () => <EpisodesList episodes={[]} loading />)
