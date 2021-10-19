export const DEFAULT_CONFIG = {
  delay: 300,
  zIndex: 10,
  color: '#00dc9e',
  background: 'rgba(255,255,255, .68)'
}

export const IGNORE_ELEMENT = ['IMG', 'LINK', 'SCRIPT', 'IFRAME', 'PATH', 'HEAD', 'HTML', 'META', 'BASE', 'SVG']

export const DIRECTIVE_NAME = 'delay-loading'
export const CLASSES_PREFIX = 'delay-loading'

export const prefix = (name: string) => `${CLASSES_PREFIX}-${name}`

export const INLINE_CLASSES = prefix('inline')
export const FULLSCREEN_CLASSES = prefix('fixed')
export const OVERFLOW_CLASSES = prefix('overflow')
export const CONTAINER_CLASSES = prefix('container')

export const LOADING_COLOR_FLAG = '{{ DELAY_LOADING_COLOR }}'
export const LOADING_BACKGROUND_FLAG = '{{ DELAY_LOADING_BACKGROUND }}'
export const LOADING_ICON_FLAG = '<!-- DELAY_LOADING_ICON -->'
export const LOADING_TEXT_FLAG = '<!-- DELAY_LOADING_TEXT -->'

export const RENDER_LOADING_TEXT = (text: string) => `<p class="${prefix('text')}" style="color:${LOADING_COLOR_FLAG}">${text}</p>`

export const INLINE_TEMPLATE = `<div class="${prefix('scope')}">${LOADING_ICON_FLAG}</div>`

export const LOADING_SPINNER = `<svg viewBox="25 25 50 50" class="${prefix('circular')}"><circle cx="50" cy="50" r="20" fill="none" stroke="${LOADING_COLOR_FLAG}" class="${prefix('path')}"></circle></svg>`

export const NORMAL_TEMPLATE = `<div class="${prefix('cover')}" style="background:${LOADING_BACKGROUND_FLAG};z-index:${DEFAULT_CONFIG.zIndex}"><div class="${prefix('spinner')}">${LOADING_ICON_FLAG}${LOADING_TEXT_FLAG}</div></div>`
