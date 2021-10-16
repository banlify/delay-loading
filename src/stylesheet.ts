import { prefix, CIRCULAR_SIZE } from './constraint'
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
    transform: 'scale(0)',
    opacity: 1
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 0
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
    backgroundColor: 'rgba(255, 255, 255, .8)',
    zIndex: 100
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
    fontSize: 'inherit',
    color: 'var(--loading-color)'
  },
  circular: {
    margin: '0 auto',
    width: CIRCULAR_SIZE + 'px',
    height: CIRCULAR_SIZE + 'px',
    animation: `${loadingRotate} 2s linear infinite`
  },
  path: {
    animation: `${loadingDash} 1.5s ease-in-out infinite`,
    strokeDasharray: '90, 150',
    strokeDashoffset: 0,
    strokeWidth: 3,
    stroke: 'var(--loading-color)',
    strokeLinecap: 'round'
  },
  inline: {
    display: 'inline-block',
    position: 'relative',
    width: 0,
    height: 0,
    overflow: 'hidden',
    verticalAlign: 'middle',
    transition: 'width .5s, height .5s',
  }
}

style.put(':root', { '--loading-color': '#00dc9e' })

for (const classes in stylesheet) {
  style.rule!(stylesheet[classes], classes)
}

// fullscreen
style.put(`.${prefix('fixed')} .${prefix('cover')}`, {
  position: 'fixed'
})

// display cover
style.put(`.${prefix('container')} .${prefix('cover')}`, {
  display: 'block'
})

// inline loading icon
style.put(`.${prefix('container')} .${prefix('inline')}`, {
  width: '1em',
  height: '1em'
})

// inline loading icon board
style.put(`.delay-loading-inline::after, .delay-loading-inline::before`, {
  content: '',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  border: '2px solid currentColor',
  animation: `${delayLoadingInline} 2s linear infinite`,
  color: 'inherit'
})

// initial status
style.put(`.delay-loading-inline::after, .delay-loading-inline::before`, {
  animationDelay: '1s',
  opacity: 0
})


export default style
