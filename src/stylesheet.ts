import { prefix, DEFAULT_CONFIG } from './constraint'
import { style } from './utils'

const coverFade = style.keyframes!({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const loadingRotate = style.keyframes!({
  '100%': { transform: 'rotate(360deg)' }
})

const loadingDash = style.keyframes!({
  '0%': {
    strokeDasharray: '1,200',
    strokeDashoffset: 0
  },
  '50%': {
    strokeDasharray: '90,150',
    strokeDashoffset: '-40px'
  },

  '100%': {
    strokeDasharray: '90,150',
    strokeDashoffset: '-120px'
  }
})

const delayLoadingInline = style.keyframes!({
  '0%': {
    width: 0,
    height: 0,
    margin: 0
  },
  '100%': {
    width: '1em',
    height: '1em'
  }
})

const stylesheet: Record<string, Record<string, any>> = {
  overflow: {
    overflow: 'hidden!important'
  },
  container: {
    position: 'relative!important',
    pointerEvents: 'none!important',
    userSelect: 'none!important'
  },
  cover: {
    display: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    animation: `${coverFade} 1s ease`,
    // backgroundColor: 'rgba(255, 255, 255, .8)',
    zIndex: DEFAULT_CONFIG.zIndex
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    fontSize: 'inherit',
    verticalAlign: 'top',
    transform: 'translate3d(-50%, -50%, 0)'
  },
  text: {
    margin: '3px 0',
    fontSize: 'inherit'
  },
  circular: {
    margin: '0 auto',
    width: '20%',
    height: '20%',
    animation: `${loadingRotate} 2s linear infinite`
  },
  path: {
    animation: `${loadingDash} 1.5s ease-in-out infinite`,
    strokeDasharray: '90, 150',
    strokeDashoffset: 0,
    strokeWidth: 3,
    strokeLinecap: 'round'
  },
  scope: {
    display: 'none',
    width: '1.1em',
    height: '1.1em',
    marginRight: '2px',
    overflow: 'hidden',
    verticalAlign: 'middle',
    animation: `${delayLoadingInline} .3s ease-in-out`
  }
}

for (const classes in stylesheet) {
  style.rule!(stylesheet[classes], classes)
}

// fullscreen
style.put(`.${prefix('fixed')} .${prefix('cover')}`, {
  position: 'fixed'
})

// display cover
style.put(`
  .${prefix('container')} .${prefix('cover')},
  .${prefix('container')} .${prefix('scope')}`, {
  display: 'inline-block'
})

style.put(`.${prefix('inline')} .${prefix('circular')}`, {
  width: '90%',
  height: '90%'
})

export default style
