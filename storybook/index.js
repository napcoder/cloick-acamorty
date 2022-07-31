// if you use expo remove this line
import { withKnobs } from '@storybook/addon-knobs'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { AppRegistry } from 'react-native'

import './rn-addons'

// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  require('./stories')
}, module)

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  shouldPersistSelection: false,
  asyncStorage: null,
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default StorybookUIRoot
