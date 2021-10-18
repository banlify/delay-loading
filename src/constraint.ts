export const DEFAULT_CONFIG = {
  delay: 300,
  zIndex: 10,
}

export const IGNORE_ELEMENT = ['IMG', 'LINK', 'SCRIPT', 'IFRAME', 'PATH', 'HEAD', 'HTML', 'META', 'BASE', 'SVG']

export const DIRECTIVE_NAME = 'delay-loading'
export const CLASSES_PREFIX = 'delay-loading'

export const prefix = (name: string) => `${CLASSES_PREFIX}-${name}`

export const INLINE_CLASSES = prefix('inline')
export const FULLSCREEN_CLASSES = prefix('fixed')
export const OVERFLOW_CLASSES = prefix('overflow')
export const CONTAINER_CLASSES = prefix('container')

export const LOADING_ICON_FLAG = '<!-- DELAY_LOADING_ICON -->'
export const LOADING_TEXT_FLAG = '<!-- DELAY_LOADING_TEXT -->'

export const RENDER_LOADING_TEXT = (text: string) => `<p class="${prefix('text')}">${text}</p>`

export const INLINE_TEMPLATE = `<div class="${prefix('scope')}">${LOADING_ICON_FLAG}</div>`

export const NORMAL_TEMPLATE = `<div class="${prefix('cover')}"><div class="${prefix('spinner')}">${LOADING_ICON_FLAG}${LOADING_TEXT_FLAG}</div></div>`

export const LOADING_SPINNER = `<svg viewBox="25 25 50 50" class="${prefix('circular')}"><circle cx="50" cy="50" r="20" fill="none" class="${prefix('path')}"></circle></svg>`
