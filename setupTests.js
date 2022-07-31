import '@testing-library/jest-native/extend-expect'
import { renderWithRedux } from './src/helpers/testHelpers/renderWithRedux'

global.renderWithRedux = renderWithRedux
