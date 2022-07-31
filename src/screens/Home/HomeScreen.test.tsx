import { render, screen } from '@testing-library/react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import HomeScreen from './HomeScreen'

describe('HomeScreen', () => {
  test('Renders snapshot correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  describe('Integration', () => {
    it('Should render a title', () => {
      render(<HomeScreen />)

      const title = screen.queryByText('Cloick Acamorty')
      expect(title).toBeTruthy()
    })
  })
})
