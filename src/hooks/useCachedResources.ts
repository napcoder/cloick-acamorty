import {
  ChakraPetch_300Light,
  // ChakraPetch_300Light_Italic,
  ChakraPetch_400Regular,
  // ChakraPetch_400Regular_Italic,
  // ChakraPetch_500Medium,
  // ChakraPetch_500Medium_Italic,
  // ChakraPetch_600SemiBold,
  // ChakraPetch_600SemiBold_Italic,
  ChakraPetch_700Bold,
  // ChakraPetch_700Bold_Italic,
} from '@expo-google-fonts/chakra-petch'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          'ChakraPetch-Light': ChakraPetch_300Light,
          'ChakraPetch-Regular': ChakraPetch_400Regular,
          'ChakraPetch-Bold': ChakraPetch_700Bold,
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
