import { StyleSheet, Text, View } from 'react-native'

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>DETAIL SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
