import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import useCachedResources from './src/hooks/useCachedResources'
import Navigation from './src/navigation'
import { setupStore } from './src/redux/store'

const store = setupStore()
let StorybookUIRoot: any = () => null

const shouldStartStorybook = !!Constants.manifest?.extra?.startStorybook

if (shouldStartStorybook) {
  StorybookUIRoot = require('./storybook').default
}

function ActualApp() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="dark" />
      </SafeAreaProvider>
    </Provider>
  )
}

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else if (Constants.manifest?.extra?.startStorybook) {
    return (
      <SafeAreaProvider>
        <StorybookUIRoot />
        <StatusBar style="dark" />
      </SafeAreaProvider>
    )
  } else {
    return <ActualApp />
  }
}

// export default Constants.manifest?.extra?.startStorybook ? storybook : App
