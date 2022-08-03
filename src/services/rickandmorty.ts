// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ApiPaginatedResult, Character, Location, Episode } from '../types'

// Define a service using a base URL and expected endpoints
export const rickAndMortyApi = createApi({
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ApiPaginatedResult<Character>, number>({
      query: (page = 1) => `character?page=${page}`,
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
    getLocationById: builder.query<Location, string>({
      query: (id) => `location/${id}`,
    }),
    getEpisodesByIds: builder.query<Episode[], string[]>({
      query: (ids) => `episode/[${ids.join(',')}]`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetLocationByIdQuery,
  useGetEpisodesByIdsQuery,
} = rickAndMortyApi
