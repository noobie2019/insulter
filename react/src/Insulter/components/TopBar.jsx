import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    AppBar,
    Button,
		IconButton,
		Toolbar,
} from '@material-ui/core/'
import {
  Icon,
} from '../theme'

const useStyles = makeStyles(theme => ({
	swearMachine:{
	},
	appbar:{
    boxShadow: 'none',
    background: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  moveLeft: {
    marginLeft: -theme.spacing( 3 ),
  },
   btnTxt:{ 
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
}))

export default function TopBar( props ) {

	const classes = useStyles()
	
	const swearmachineSlice = useSelector( state => state.swearmachine )
  const { 
    pJSON,
  } = swearmachineSlice
	
	return	<AppBar 
              className={clsx( classes.appbar )}
              position={ `static` } 
              color={ `primary` }>
              <Toolbar>

                <Button
                  color={ `inherit` }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    window.open(`/`, `_self`)
                  }}>
                  <Icon icon={`ptos`} color={ `inherit` } />
                  <span className={ clsx( classes.btnTxt ) }>
                    {process.env.REACT_APP_APP} { pJSON.version }
                  </span>
                </Button>

                

                <div className={classes.grow} /> 

                <IconButton
                  color={ `inherit` }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    window.open(`https://ptos.moderntoss.com`, `_blank`)
                  }}>
                  <Avatar src={`png/moderntoss/modern_toss_logo.png`} alt={ `Modern Toss` } />
                </IconButton>

                <IconButton
                  color={ `inherit` }
                  onClick={ ( e ) => {
                    e.preventDefault()
                    window.open(`https://github.com/noobie2019/swearmachine`, `_blank`)
                  }}>
                  
                  <Icon icon={`github`} color={ `inherit` } />
                </IconButton>

              </Toolbar>
            </AppBar>            
}

/*



*/