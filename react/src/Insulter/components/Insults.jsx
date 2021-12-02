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
	dataLayer:{
		margin: theme.spacing(2),
	},
	image:{
		width: '100%',
	},
}))

export default function Insults( props ) {

	const classes = useStyles()
	const swearmachineSlice = useSelector( state => state.swearmachine )
	const { 
	    insults,
	} = swearmachineSlice
	let show = `text`
	
	return	<div className={ clsx( classes.dataLayer ) }>
            <Grid container>
            	{ insults.map( (item, i ) => {
            		return <Grid item 
            					xs={ 4 }
            					// sm={ 4 }
            					// md={ 2 }
            					key={ `ej_${ i }` }>
            					<ButtonBase
            						onClick={ ( e ) => {
            							e.preventDefault()
            							// console.log ('item.code', item.code)
            							selectInsult( item.code )
            						}}>
	            					{ show === `image` ? <img 
	            						className={ clsx( classes.image ) }
	            						src={ `png/${ item.code }.png` } 
	            						alt={ item.title }
	            					/> : <div>{ item.title }</div> }
	            					
            					</ButtonBase>
            				</Grid>
            	})}
            </Grid>
          </div>
}

/*
<span className={ clsx( classes.btnTxt ) }>
	Free & Open Source
</span>


*/