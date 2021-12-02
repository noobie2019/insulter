import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../'

export const error = createAction(`SWEARMACHINE/ERROR`)
export const initting = createAction(`SWEARMACHINE/INITTING`)
export const initted = createAction(`SWEARMACHINE/INITTED`)
export const selectedCode = createAction(`SWEARMACHINE/SELECTEDCODE`)

export const selectInsult = async ( selectedCode ) => {
    try {
    	// console.log ('selectInsult', selectedCode)
    	const store = getStore()
    	store.dispatch({type: `SWEARMACHINE/SELECTEDCODE`, selectedCode })
		return true
    } catch ( error ) {
        throwError( error )
    }
}

export const init = async () => {
    try {
    	const store = getStore()
    	store.dispatch({type: `SWEARMACHINE/INITTING`, initting: true })
		return true
    } catch ( error ) {
        throwError( error )
    }
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `SWEARMACHINE/ERROR`, error })
	return true
}
