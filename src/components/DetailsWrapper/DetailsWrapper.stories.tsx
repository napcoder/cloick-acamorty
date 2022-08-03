import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import mockData from '../../mocks/locationDetail1.json'
import palette from '../../theme/palette'
import { Location } from '../../types'
import DetailsWrapper from './index'

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.cyan};
  padding: 20px;
`

const location = mockData as Location

storiesOf('DetailsWrapper', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => (
    <DetailsWrapper title="Location" data={location}>
      <Text>I'm the children</Text>
    </DetailsWrapper>
  ))
  .add('no data', () => (
    <DetailsWrapper title="Location" data={null}>
      <Text>I'm the children</Text>
    </DetailsWrapper>
  ))
  .add('no data custom text', () => (
    <DetailsWrapper title="Location" data={null} noDataText="There are no elements here.">
      <Text>I'm the children</Text>
    </DetailsWrapper>
  ))
  .add('empty array', () => (
    <DetailsWrapper title="Location" data={[]}>
      <Text>I'm the children</Text>
    </DetailsWrapper>
  ))
  .add('loading', () => (
    <DetailsWrapper title="Location" data={null} loading>
      <Text>I'm the children</Text>
    </DetailsWrapper>
  ))
