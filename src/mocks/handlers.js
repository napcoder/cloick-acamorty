import { rest } from 'msw'

import characterDetail1 from './characterDetail1.json'
import charactersPage1 from './charactersPage1.json'
import charactersPage2 from './charactersPage2.json'
import episodesList1 from './episodesList1.json'
import locationDetail1 from './locationDetail1.json'

// We use msw to intercept the network request during the test,
export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    if (page === '2') {
      return res(ctx.status(200), ctx.json(charactersPage2))
    }
    return res(ctx.status(200), ctx.json(charactersPage1))
  }),
  rest.get('https://rickandmortyapi.com/api/character/:characterId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(characterDetail1))
  }),
  rest.get('https://rickandmortyapi.com/api/location/:locationId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(locationDetail1))
  }),
  rest.get('https://rickandmortyapi.com/api/episode/:episodeList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(episodesList1))
  }),
]
