import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { swearmachineReducer, swearmachineSlice } from './reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    swearmachine: swearmachineReducer,
  })

  const preloadedState = {
    swearmachine: swearmachineSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore