export const CIRCULAR_SIZE = 48

export const DIRECTIVE_NAME = 'delay-loading'
export const CLASSES_PREFIX = 'delay-loading'

export const prefix = (name: string) => `${CLASSES_PREFIX}-${name}`

export const FULLSCREEN_DISPLAY = prefix('fixed')
export const CONTAINER_OVERFLOW = prefix('overflow')
export const CONTAINER_CLASSES = prefix('container')

export const LOADING_ICON_FLAG = '<!-- DELAY_LOADING_ICON -->'
export const LOADING_TEXT_FLAG = '<!-- DELAY_LOADING_TEXT -->'

export const INLINE_LOADING_ICON = `<i class="${prefix('inline')}"></i>`

export const RENDER_LOADING_TEXT = (text: string) => `<p class="${prefix('text')}">${text}</p>`

export const LOADING_TEMPLATE = `
<div class="${prefix('cover')}">
  <div class="${prefix('spinner')}">
    ${LOADING_ICON_FLAG}
    ${LOADING_TEXT_FLAG}
  </div>
</div>`

export const LOADING_ICON_SECTION = `
<svg viewBox="25 25 50 50" class="${prefix('circular')}">
  <circle cx="50" cy="50" r="20" fill="none" class="${prefix('path')}"></circle>
</svg>`
