import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import palette from '../../theme/palette'
import Spinner from './index'

const ContainerView = styled.View`
  /* flex: 1; */
  background-color: ${palette.cyan};
  padding: 20px;
`

storiesOf('Spinner', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <Spinner isVisible />)
  .add('hidden', () => <Spinner isVisible={false} />)
  .add('aside', () => <Spinner isVisible aside />)
  .add('big padding Top', () => <Spinner isVisible paddingTop={140} />)
  .add('big padding Bottom', () => <Spinner isVisible paddingBottom={140} />)
  .add('big padding Left', () => <Spinner isVisible paddingLeft={140} />)
  .add('big padding Right', () => <Spinner isVisible paddingRight={140} />)
