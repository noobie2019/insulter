// import { getStore } from '../../'
// import { 
//     gsap,
//     Power2,
// } from 'gsap'
// import { 
//     getElement,
//     getSizes,
// } from './'

// const duration = 0.66

const setup = () => {
    return true
}

const onResize = () => {
    return true
}

const hide = () => {
    return true
}

const show = () => { 
    return true
}

export const bottomFabAS = event => {
    switch ( event ) {
        case `onResize`: return onResize()
        case `setup`: return setup()
        case `hide`: return hide()
        case `show`: return show()
        default: { return null }
    }
}
