import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { selectInsult } from '../redux/actions'
import AudioPlayer from 'material-ui-audio-player';
import {
    makeStyles,
		Button,
    Dialog,
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
  audio:{
    margin: theme.spacing(2),
  },
}))

export default function SelectedInsult( props ) {

	const classes = useStyles()
	
	const swearmachineSlice = useSelector( state => state.swearmachine )
  const { 
    selectedCode,
  } = swearmachineSlice

  // console.log ('selectedCode', selectedCode)
  if (!selectedCode) return	null        

  return <Dialog 
            open
            onClose={ () => {
              console.log('close dialog please')
            }}
          >
          <Button
            variant={ `contained` }
            color={ `secondary` }
            onClick={ ( e ) => {
              e.preventDefault()
              // console.log ('item.code', item.code)
              selectInsult( null )
            }}>
            <span className={ clsx( classes.btnTxt ) }>
              Close
            </span>
            <Icon icon={`close`} />
          </Button>
          <div className={ clsx( classes.audio ) }>
            <AudioPlayer 
              src={ `mp3/${ selectedCode }.mp3` }
              elevation={ 0 }
              variation={ `secondary` }
              download={true}
              autoplay={ true }
              preload="auto"
              loop={true}
            />
          </div>
          <img 
            className={ clsx( classes.image ) }
            src={ `png/${ selectedCode }.png` } 
            alt={ `Selected Insult` }
          />

          

          



        </Dialog>

}

/*



*/