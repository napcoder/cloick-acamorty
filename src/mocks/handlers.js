import { rest } from 'msw'

import charactersPage1 from './charactersPage1.json'
import charactersPage2 from './charactersPage2.json'

// We use msw to intercept the network request during the test,
export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    if (page === '2') {
      return res(ctx.status(200), ctx.json(charactersPage2))
    }
    return res(ctx.status(200), ctx.json(charactersPage1))
  }),
]
