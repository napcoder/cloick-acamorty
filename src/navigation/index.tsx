/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailScreen from '../screens/Detail/DetailScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import palette from '../theme/palette'
import { RootStackParamList } from '../types'

export default function Navigation() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          // title: route.params.character.name,
          title: 'Character detail',
          headerStyle: {
            backgroundColor: palette.yellow,
          },
          headerTintColor: palette.black,
          headerTitleStyle: {
            fontFamily: 'ChakraPetch-Bold',
            // fontSize: route.params.character.name.length > 20 ? 18 : 24,
            fontSize: 24,
          },
          headerBackTitle: 'Back',
          headerBackTitleStyle: {
            fontFamily: 'ChakraPetch-Regular',
            fontSize: 20,
            color: palette.black,
          },
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  )
}
