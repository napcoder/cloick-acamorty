import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native'
import { rest } from 'msw'
import React from 'react'
import { Alert } from 'react-native'

import { renderWithRedux } from '../../helpers/testHelpers/renderWithRedux'
import character from '../../mocks/characterDetail1.json'
import { server } from '../../mocks/server'
import { Character } from '../../types'
import DetailScreen from './DetailScreen'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: {
    params: {
      character: character as Character,
    },
  },
  ...props,
})

describe('DetailScreen', () => {
  describe('Integration', () => {
    beforeEach(() => {
      jest.resetAllMocks()
    })

    it('Should render the title', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)

      const title = await screen.findByRole('header')
      expect(title).toHaveTextContent('Rick Sanchez')
    })
    it('Should alert error when server request fails', async () => {
      jest.spyOn(Alert, 'alert')
      server.use(
        rest.get('https://rickandmortyapi.com/api/episode/:episodeList', (req, res, ctx) =>
          res(ctx.status(500))
        )
      )
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)

      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith(
          'Error',
          'Something went wrong while retrieving character data.'
        )
      })
      expect(Alert.alert).toHaveBeenCalledTimes(1)
    })
    it('Should alert error only once, when multiple server requests fail', async () => {
      jest.spyOn(Alert, 'alert')
      server.use(
        rest.get('https://rickandmortyapi.com/api/episode/:episodeList', (req, res, ctx) =>
          res(ctx.status(500))
        ),
        rest.get('https://rickandmortyapi.com/api/location/:locationId', (req, res, ctx) =>
          res(ctx.status(500))
        )
      )
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)

      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith(
          'Error',
          'Something went wrong while retrieving character data.'
        )
      })
      expect(Alert.alert).toHaveBeenCalledTimes(1)
    })
    it('Should render section titles', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)
      const location = await screen.findByText(/Location/i)
      const origin = await screen.findByText(/Origin/i)
      const episodes = await screen.findByText(/Episodes/i)

      expect(location).toBeTruthy()
      expect(origin).toBeTruthy()
      expect(episodes).toBeTruthy()
    })

    it('Should render spinners Location', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)
      const spinner = await screen.findByTestId('Location-spinner')

      expect(spinner).toBeTruthy()
    })
    it('Should render spinners Origin', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)
      const spinner = await screen.findByTestId('Origin-spinner')

      expect(spinner).toBeTruthy()
    })
    it('Should render spinners Episodes', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)
      const spinner = await screen.findByTestId('Episodes-spinner')

      expect(spinner).toBeTruthy()
    })

    it('Should display Earth data', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<DetailScreen {...props} />)

      // await screen.findByTestId('Origin-spinner')
      await waitForElementToBeRemoved(() => screen.queryByTestId('Origin-spinner'))
      const earth = await screen.findAllByText(/Earth/i)
      const dimension = await screen.findAllByText('Dimension C-137')
      const residents = await screen.findAllByText('27')
      expect(earth.length).toBeGreaterThanOrEqual(1)
      expect(dimension.length).toBeGreaterThanOrEqual(1)
      expect(residents.length).toBeGreaterThanOrEqual(1)
    })

    it('Should not perform query, when location url not present', async () => {
      jest.spyOn(Alert, 'alert')

      server.use(
        rest.get('https://rickandmortyapi.com/api/location/:episodeList', (req, res, ctx) =>
          res(ctx.status(500))
        )
      )
      const props: any = createTestProps({
        route: {
          params: {
            character: {
              ...character,
              origin: {
                name: 'Earth (C-137)',
                url: '',
              },
              location: {
                name: 'Earth (C-137)',
                url: '',
              },
            },
          },
        },
      })
      renderWithRedux(<DetailScreen {...props} />)

      const originSpinner = screen.queryByTestId('Origin-spinner')
      expect(originSpinner).toBeFalsy()
      expect(Alert.alert).toHaveBeenCalledTimes(0)
    })
    it('Should display only earth name, when location url not present', async () => {
      const props: any = createTestProps({
        route: {
          params: {
            character: {
              ...character,
              origin: {
                name: 'Earth (C-137)',
                url: '',
              },
              location: {
                name: 'Other planet',
                url: '',
              },
            },
          },
        },
      })
      renderWithRedux(<DetailScreen {...props} />)

      await waitForElementToBeRemoved(() => screen.queryByTestId('Episodes-spinner'))
      const originSpinner = screen.queryByTestId('Origin-spinner')
      expect(originSpinner).toBeFalsy()
      // await screen.findByTestId('Origin-spinner')
      const earth = screen.getByText(/Earth/i)
      expect(earth).toBeTruthy()
      const dimension = screen.queryByText('Dimension C-137')
      expect(dimension).toBeNull()
    })
  })
})
