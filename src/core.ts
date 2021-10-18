import type { DirectiveBinding, DirectiveModifiers, DirectiveElement } from './types'

import {
  DEFAULT_CONFIG,
  IGNORE_ELEMENT,
  DIRECTIVE_NAME,

  INLINE_CLASSES,
  OVERFLOW_CLASSES,
  CONTAINER_CLASSES,
  FULLSCREEN_CLASSES,

  LOADING_ICON_FLAG,
  LOADING_TEXT_FLAG,

  LOADING_SPINNER,
  INLINE_TEMPLATE,
  LOADING_TEMPLATE,
  RENDER_LOADING_TEXT,
} from './constraint'

const setStatus = (element: HTMLElement, { fullscreen, inline }: DirectiveModifiers) => {
  const classes = element.classList

  classes.toggle(CONTAINER_CLASSES)
  classes.toggle(OVERFLOW_CLASSES)

  if (fullscreen) {
    classes.add(FULLSCREEN_CLASSES)
  } else if (inline) {
    classes.add(INLINE_CLASSES)
  }
}

const setRender = (element: HTMLElement, { inline }: DirectiveModifiers) => {
  let template: string
  const LOADING_TEXT = element.dataset.loadingText
  const LOADING_ICON = element.dataset.loadingIcon || LOADING_SPINNER

  if (inline) {
    template = INLINE_TEMPLATE
  } else {
    template = LOADING_TEMPLATE

    // If loading text not empty create loading text.
    if (LOADING_TEXT && LOADING_TEXT.trim()) {
      template = template.replace(
        LOADING_TEXT_FLAG,
        RENDER_LOADING_TEXT(LOADING_TEXT)
      )
    }
  }

  // Sets the loading animation as the target effect.
  template = template.replace(
    LOADING_ICON_FLAG,
    LOADING_ICON
  )

  element.insertAdjacentHTML('afterbegin', template)
}

const insertAdjacentHTML = (
  element: DirectiveElement,
  { arg, modifiers }: DirectiveBinding
) => {
  if (element.instance && element.instance.ignore) {
    console.warn(`[${DIRECTIVE_NAME}]: Directive cannot be applied to the current element. current element: <${element.tagName.toLowerCase()}>`)
    return
  }

  const delay = +arg !== 0 ? +arg : DEFAULT_CONFIG.delay
  setTimeout(() => {
    setStatus(element, modifiers)
    setRender(element, modifiers)
    element.instance.initialized = true
  }, delay)
}

export function beforeMount(el) {
  el.instance = {
    initialized: false,
    ignore: IGNORE_ELEMENT.includes(el.tagName)
  }
}

export function mounted(el, binding) {
  if (!!binding.value) {
    insertAdjacentHTML(el, binding)
  }
}

export function beforeUpdate(el, binding) {
  if (!el.instance.initialized) {
    insertAdjacentHTML(el, binding)
    return
  }

  setStatus(el, binding.modifiers)
}

export function unmounted(el) {
  el.classList.remove(CONTAINER_CLASSES)
}
