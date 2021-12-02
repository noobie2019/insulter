import React from 'react'
import clsx from 'clsx'
import { Provider } from 'react-redux'
import { getStore } from './'
import {
    makeStyles,
    createTheme,
    MuiThemeProvider,
} from '@material-ui/core/'
import {
  theme,
} from './theme'
import { 
	TopBar,
	// Insults,
	SelectedInsult,
} from './'

const useStyles = makeStyles(theme => ({
	swearMachine:{
		// background: '#f0f0f1',
	},
}))

export default function Insulter( props ) {

	const classes = useStyles()
	const store = getStore()
	
	return	<Provider store={ store }>
						<MuiThemeProvider theme={ createTheme( theme ) }>
						<div className={ clsx( classes.swearMachine ) }>
							<TopBar />
							<SelectedInsult/>

							
						</div>
					</MuiThemeProvider> 
				</Provider>
}

/*
<Insults />
*/