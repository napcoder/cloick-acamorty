import { render, screen } from '@testing-library/react-native'
import { rest } from 'msw'
import React from 'react'
import renderer from 'react-test-renderer'

import { server } from '../../mocks/server'
import HomeScreen from './HomeScreen'

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

describe('HomeScreen', () => {
  test('Renders snapshot correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  describe('Integration', () => {
    it('Should render a title', () => {
      const { debug } = render(<HomeScreen />)
      debug()

      const title = screen.getByRole('header')
      expect(title).toHaveTextContent('Cloick Acamorty')
    })
    it('Should alert error when server request fails', () => {
      server.use(rest.get('/resource', (req, res, ctx) => res(ctx.status(500))))
      const { debug } = render(<HomeScreen />)
      debug()

      const title = screen.getByRole('alert')
      expect(title).toHaveTextContent('Sorry, something went wrong.')
    })
    it('Should display a no content element when no data received', async () => {
      server.use(
        rest.get('/resource', (req, res, ctx) =>
          res(
            ctx.status(200),
            ctx.json({
              info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null,
              },
              results: [],
            })
          )
        )
      )
      const { debug } = render(<HomeScreen />)
      debug()
      expect.assertions(1)
      await expect(screen.findAllByRole('listItem')).rejects.toThrow()
    })
    it('Should display 20 elements', async () => {
      expect.assertions(2)
      render(<HomeScreen />)
      const list = await screen.findByRole('list')
      expect(list).toBeTruthy()
      const listItems = await screen.findAllByRole('listItem')
      expect(listItems).toHaveLength(20)
    })
  })
})
