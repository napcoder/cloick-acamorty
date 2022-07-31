import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import Navigation from './src/navigation'
import { setupStore } from './src/redux/store'

const store = setupStore()
let storybook

if (Constants.manifest?.extra?.startStorybook) {
  storybook = require('./storybook').default
}

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  )
}

export default Constants.manifest?.extra?.startStorybook ? storybook : App
