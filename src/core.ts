import type { DirectiveBinding, DirectiveModifiers, DirectiveElement } from './types'
import { clearTimer } from './utils'

import {
  DEFAULT_CONFIG,
  IGNORE_ELEMENT,

  INLINE_CLASSES,
  OVERFLOW_CLASSES,
  CONTAINER_CLASSES,
  FULLSCREEN_CLASSES,

  LOADING_ICON_FLAG,
  LOADING_TEXT_FLAG,
  LOADING_COLOR_FLAG,
  LOADING_BACKGROUND_FLAG,

  LOADING_SPINNER,
  INLINE_TEMPLATE,
  NORMAL_TEMPLATE,
  RENDER_LOADING_TEXT,
} from './constraint'

function exec(
  program: Function,
  element: DirectiveElement,
  modifiers: DirectiveModifiers
) {
  element.instance.timer = window.setTimeout(() => {
    program(element, modifiers)
    clearTimer(element.instance)
  }, element.instance.delay)
}

function init(element: DirectiveElement, modifiers: DirectiveModifiers) {
  setRender(element, modifiers)
  setStatus(element, modifiers)
}

function setStatus(element: DirectiveElement, { fullscreen, inline }: DirectiveModifiers) {
  const classes = element.classList

  classes.toggle(CONTAINER_CLASSES)
  classes.toggle(OVERFLOW_CLASSES)

  if (fullscreen) {
    classes.add(FULLSCREEN_CLASSES)
  } else if (inline) {
    classes.add(INLINE_CLASSES)
  }
}

function setRender(element: DirectiveElement, { inline }: DirectiveModifiers) {
  const { loadingText, loadingColor, loadingBackground } = element.dataset
  let template: string = inline ? INLINE_TEMPLATE : NORMAL_TEMPLATE

  if (!inline && loadingText && loadingText.trim()) {
    template = template.replace(
      LOADING_TEXT_FLAG,
      RENDER_LOADING_TEXT(loadingText)
    )
  }

  template = template.replace(
    LOADING_ICON_FLAG,
    element.dataset.loadingIcon || LOADING_SPINNER
  )

  template = template.replace(LOADING_BACKGROUND_FLAG, loadingBackground || 'rgba(255,255,255,.78)')
  template = template.replace(new RegExp(LOADING_COLOR_FLAG, 'gm'), loadingColor || 'var(--loading-color)')

  element.insertAdjacentHTML('afterbegin', template)
  element.instance.initialized = true
}

export function beforeMount(el, { modifiers }: DirectiveBinding) {
  el.instance = {
    timer: null,
    stopped: false,
    initialized: false,
    ignore: IGNORE_ELEMENT.includes(el.tagName),
    delay: +modifiers.arg || DEFAULT_CONFIG.delay
  }
}

export function mounted(el, { value, modifiers }: DirectiveBinding) {
  if (!value) return

  exec(init, el, modifiers)
}

export function beforeUpdate(el, { value, modifiers }: DirectiveBinding) {
  // Cancel execution if the interval between state changes is less than the set value
  if (el.instance.timer) {
    clearTimer(el.instance)
    return
  }

  if (!value) {
    setStatus(el, modifiers)
    return
  }

  exec(el.instance.initialized ? setStatus : init, el, modifiers)
}

export function unmounted(el) {
  el.classList.remove(CONTAINER_CLASSES)
}
