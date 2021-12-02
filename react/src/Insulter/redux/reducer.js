import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import { insults } from './insults'
import {
  error,
  initting,
  initted,
  selectedCode,
} from './actions'

export const swearmachineSlice = {
  pJSON,
  error: null,
  initting: false,
  initted: false,
  insults,
  selectedCode: null,
}

const swearmachineReducer = createReducer( swearmachineSlice, {

  [selectedCode]: (state, action) => {
    state.selectedCode = action.selectedCode
    return state
  },
  
  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },

  [initting]: (state, action) => {
    state.initting = action.initting
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { swearmachineReducer }
