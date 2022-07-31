import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import useCachedResources from './src/hooks/useCachedResources'
import Navigation from './src/navigation'
import { setupStore } from './src/redux/store'

const store = setupStore()
let storybook

if (Constants.manifest?.extra?.startStorybook) {
  storybook = require('./storybook').default
}

function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="dark" />
        </SafeAreaProvider>
      </Provider>
    )
  }
}

export default Constants.manifest?.extra?.startStorybook ? storybook : App
