export const PLUGIN_NAME = 'delay-loading'

export const CONTAINER_CLASSES = 'delay-loading-container'
export const CONTAINER_OVERFLOW = 'delay-loading-overflow'
export const FULLSCREEN_DISPLAY = 'delay-loading-fixed'

export const LOADING_ICON_FLAG = '<!-- LOADING_ICON -->'
export const LOADING_TEXT_FLAG = '<!-- LOADING_TEXT -->'

export const INLINE_LOADING_ICON = `<i class="inline-loading-icon"></i>`

export const RENDER_LOADING_TEXT = (text: string) => `<p class="delay-loading-text">${text}</p>`

export const LOADING_TEMPLATE = `
<div class="delay-loading-cover">
  <div class="delay-loading-spinner">
    ${LOADING_ICON_FLAG}
    ${LOADING_TEXT_FLAG}
  </div>
</div>`

export const SECTION_LOADING_ICON = `
<svg viewBox="25 25 50 50" class="circular">
  <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
</svg>`
