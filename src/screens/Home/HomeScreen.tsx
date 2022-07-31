import { SafeContainer, Title, TitleContainer } from './HomeScreenStyles'

export default function HomeScreen() {
  return (
    <SafeContainer>
      <TitleContainer>
        <Title accessibilityRole="header">Cloick Acamorty</Title>
      </TitleContainer>
    </SafeContainer>
  )
}
