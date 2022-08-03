import { storiesOf } from '@storybook/react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import palette from '../../theme/palette'
import DetailRow from './index'

const ContainerView = styled.View`
  flex: 1;
  background-color: ${palette.cyan};
  padding: 20px;
`

storiesOf('DetailRow', module)
  .addDecorator((story) => <ContainerView>{story()}</ContainerView>)
  .add('default', () => <DetailRow label="Species" text="Human" />)
  .add('no label', () => <DetailRow label="" text="Human" />)
  .add('no text', () => <DetailRow label="Species" text="" />)
  .add('low min width', () => <DetailRow label="Species" text="Human" labelMinWidth={5} />)
  .add('big min width', () => <DetailRow label="Species" text="Human" labelMinWidth={200} />)
  .add('borders disabled', () => <DetailRow label="Species" text="Human" enableBorder={false} />)
  .add('long text', () => (
    <DetailRow label="Name" text="This is a very long and interesting name, sir." />
  ))
