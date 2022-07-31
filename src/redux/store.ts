import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
