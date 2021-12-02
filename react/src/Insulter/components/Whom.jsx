import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Grid,
    ButtonBase,
} from '@material-ui/core/'
import { selectInsult } from '../redux/actions'

const useStyles = makeStyles(theme => ({
	whom:{
		margin: theme.spacing(2),
	},
	image:{
		width: '100%',
	},
}))

export default function Whom( props ) {

	const classes = useStyles()
	const swearmachineSlice = useSelector( state => state.whom )
	const { 
	    insults,
	} = swearmachineSlice
	
	return	<div className={ clsx( classes.dataLayer ) }>
	            Whom
    	    </div>
}

/*
<span className={ clsx( classes.btnTxt ) }>
	Free & Open Source
</span>


*/