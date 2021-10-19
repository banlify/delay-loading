import type { DirectiveBinding, DirectiveModifiers, DirectiveElement } from './types'
import { clearTimer, getPosition } from './utils'

import {
  DEFAULT_CONFIG,
  IGNORE_ELEMENT,

  INLINE_CLASSES,
  RELATIVE_CLASSES,
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
  modifiers: DirectiveModifiers,
  ...restArgs: any
) {
  element.instance.timer = window.setTimeout(() => {
    program(element, modifiers, ...restArgs)
    clearTimer(element.instance)
  }, element.instance.delay)
}

function init(element: DirectiveElement, modifiers: DirectiveModifiers, value: boolean) {
  setRender(element, modifiers)
  setStatus(element, modifiers, value)
}

function setStatus(element: DirectiveElement, { fullscreen, inline }: DirectiveModifiers, value: boolean) {
  const classes = element.classList


  if (value) {
    classes.add(CONTAINER_CLASSES)
  } else {
    classes.remove(CONTAINER_CLASSES)
  }

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

  template = template.replace(LOADING_BACKGROUND_FLAG, loadingBackground || DEFAULT_CONFIG.background)
  template = template.replace(new RegExp(LOADING_COLOR_FLAG, 'gm'), loadingColor || DEFAULT_CONFIG.color)

  element.insertAdjacentHTML('afterbegin', template)
  element.instance.initialized = true
}

export function beforeMount(el: DirectiveElement, { arg }: DirectiveBinding) {
  if (getPosition(el) === 'static') {
    el.classList.add(RELATIVE_CLASSES)
  }

  el.instance = {
    timer: undefined,
    initialized: false,
    delay: +arg! || DEFAULT_CONFIG.delay,
    ignore: IGNORE_ELEMENT.includes(el.tagName)
  }
}

export function mounted(el: DirectiveElement, { value, modifiers }: DirectiveBinding) {
  if (!value) return

  exec(init, el, modifiers, value)
}

export function beforeUpdate(el: DirectiveElement, { value, modifiers }: DirectiveBinding) {
  if (el.instance.timer) {
    clearTimer(el.instance)
    return
  }

  if (!value) {
    setStatus(el, modifiers, value)
    return
  }

  exec(el.instance.initialized ? setStatus : init, el, modifiers, value)
}

export function unmounted(el: DirectiveElement) {
  el.classList.remove(CONTAINER_CLASSES)
}
