import { fireEvent, screen, waitFor } from '@testing-library/react-native'
import { rest } from 'msw'
import React from 'react'
import { Alert } from 'react-native'

import { renderWithRedux } from '../../helpers/testHelpers/renderWithRedux'
import { server } from '../../mocks/server'
import HomeScreen from './HomeScreen'

const createTestProps = (props: object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
})

describe('HomeScreen', () => {
  describe('Integration', () => {
    it('Should render the title', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<HomeScreen {...props} />)

      const title = await screen.findByRole('header')
      expect(title).toHaveTextContent('Cloick Acamorty')
    })
    it('Should alert error when server request fails', async () => {
      jest.spyOn(Alert, 'alert')
      server.use(
        rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) =>
          res(ctx.status(500))
        )
      )
      const props: any = createTestProps({})
      renderWithRedux(<HomeScreen {...props} />)

      await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('Error', 'Sorry, something went wrong.')
      })
      expect(Alert.alert).toHaveBeenCalledTimes(1)
    })
    it('Should display a no content element when no data received', async () => {
      server.use(
        rest.get('https://rickandmortyapi.com/api/character*', (req, res, ctx) => {
          return res(
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
        })
      )
      const props: any = createTestProps({})
      renderWithRedux(<HomeScreen {...props} />)
      const emptyListComponent = await screen.findByTestId('empty-characters-list-component')
      expect(emptyListComponent).toBeTruthy()
    })

    it('Should display a list', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<HomeScreen {...props} />)
      const list = await screen.findByRole('list')
      expect(list).toBeTruthy()
    })

    // 10 because is n/2 as FlatList default, and fetched items are 20
    it('Should display at least one element', async () => {
      const props: any = createTestProps({})
      renderWithRedux(<HomeScreen {...props} />)

      const listItems = await screen.findAllByText(/#/)
      expect(listItems.length).toBeGreaterThan(0)
    })

    it('Should go to detail of Rick', async () => {
      const props: any = createTestProps({})
      spyOn(props.navigation, 'navigate')
      renderWithRedux(<HomeScreen {...props} />)

      const rickItem = await screen.findByText(/Rick Sanchez/)
      fireEvent.press(rickItem)

      expect(props.navigation.navigate).toHaveBeenCalledWith(
        'Detail',
        expect.objectContaining({
          character: expect.objectContaining({ id: 1, name: 'Rick Sanchez' }),
        })
      )
    })
  })
})
