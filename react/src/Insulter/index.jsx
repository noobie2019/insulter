import pJSON from '../../package.json'

import Insulter from './Insulter'

import TopBar from './components/TopBar'
import Insults from './components/Insults'
import SelectedInsult from './components/SelectedInsult'



import { createBrowserHistory } from 'history'
import reduxStore from './redux'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const store = reduxStore()
export const getStore = () => { 
	return store 
}

export const getHistory = () => { 
	return createBrowserHistory() 
}

export {
	Insulter,
	Insults,
	TopBar,
	SelectedInsult,
}
