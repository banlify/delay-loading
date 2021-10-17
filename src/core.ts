interface DirectiveBinding {
  arg?: string;
  value: boolean;
  oldValue: boolean | null;
  modifiers: Record<string, boolean>;
}

import {
  DEFAULT_CONFIG,
  IGNORE_ELEMENT,
  DIRECTIVE_NAME,

  CONTAINER_CLASSES,
  CONTAINER_OVERFLOW,
  FULLSCREEN_DISPLAY,

  LOADING_ICON_FLAG,
  LOADING_TEXT_FLAG,

  LOADING_TEMPLATE,
  RENDER_LOADING_TEXT,
  INLINE_LOADING_ICON,
  LOADING_ICON_SECTION,
} from './constraint'

const setStatus = (element: HTMLElement, { fullscreen, inline }: Record<string, boolean>) => {
  const classes = element.classList

  classes.toggle(CONTAINER_CLASSES)
  classes.toggle(CONTAINER_OVERFLOW)

  if (fullscreen) {
    classes.add(FULLSCREEN_DISPLAY)
  } else if (inline) {
    // classes.add()
  }
}

const renderTemplate = (element: HTMLElement, modifiers: Record<string, boolean>) => {
  setStatus(element, modifiers)

  let template = LOADING_TEMPLATE
  const LOADING_TEXT = element.dataset.loadingText

  // If loading text not empty create loading text.
  if (LOADING_TEXT && LOADING_TEXT.trim()) {
    template = template.replace(
      LOADING_TEXT_FLAG,
      RENDER_LOADING_TEXT(LOADING_TEXT)
    )
  }

  // Sets the loading animation as the target effect.
  template = template.replace(
    LOADING_ICON_FLAG,
    modifiers.inline ? INLINE_LOADING_ICON : LOADING_ICON_SECTION
  )

  element.insertAdjacentHTML('afterbegin', template)
}

const insertAdjacentHTML = (element: HTMLElement, { arg, modifiers }: DirectiveBinding) => {
  // @ts-ignore
  if (element.instance && element.instance.ignore) {
    console.warn(`[${DIRECTIVE_NAME}]: Directive cannot be applied to the current element. current element: <${element.tagName.toLowerCase()}>`)
    return
  }

  const delay = +arg !== 0 ? +arg : DEFAULT_CONFIG.delay
  setTimeout(renderTemplate, delay, element, modifiers)
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
    el.instance.initialized = true
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
