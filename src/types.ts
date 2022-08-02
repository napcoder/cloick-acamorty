import { NativeStackScreenProps } from '@react-navigation/native-stack'

/*********** REACT NAVIGATION ***************/

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined
  Detail: { character: Character }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

/******** API ***********/

export interface CharacterLocation {
  name: string
  url: string
}

export interface ApiResourceBase {
  id: number
  name: string
  url: string
  created: string
}

export interface Character extends ApiResourceBase {
  status: 'Dead' | 'Alive' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: CharacterLocation
  location: CharacterLocation
  image: string
  episode: string[]
}

export interface Location extends ApiResourceBase {
  type: string
  dimension: string
  residents: Character[]
}

export interface Episode extends ApiResourceBase {
  air_date: string
  episode: string
  character: string[]
}

export interface ApiPaginatedResult<T extends Character | Location | Episode> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info: {
    /** The length of the response */
    count: number
    /** The amount of pages */
    pages: number
    /** Link to the next page (if it exists) */
    next: string | null
    /** Link to the previous page (if it exists) */
    prev: string | null
  }
  results: T[]
}
