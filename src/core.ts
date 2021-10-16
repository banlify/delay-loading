interface DirectiveBinding {
  arg?: string;
  value: boolean;
  oldValue: boolean | null;
  modifiers: Record<string, boolean>;
}

import {
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

const toggleWrapperState = (element: HTMLElement, { modifiers }: DirectiveBinding) => {
  const classes = element.classList

  if (!classes.contains(CONTAINER_CLASSES)) {
    classes.add(CONTAINER_CLASSES)
  }

  if (modifiers.fullscreen) {
    classes.add(FULLSCREEN_DISPLAY)
  }
}

const insertAdjacentHTML = (element: HTMLElement, { arg, modifiers }: DirectiveBinding) => {
  setTimeout(renderTemplate, +arg || 300, element, modifiers)
}

const renderTemplate = (element: HTMLElement, modifiers: Record<string, boolean>) => {
  let template = LOADING_TEMPLATE
  const LOADING_TEXT = element.dataset.loadingText

  if (LOADING_TEXT && LOADING_TEXT.trim()) {
    template = template.replace(
      LOADING_TEXT_FLAG,
      RENDER_LOADING_TEXT(LOADING_TEXT)
    )
  }

  template = template.replace(
    LOADING_ICON_FLAG,
    modifiers.inline ? INLINE_LOADING_ICON : LOADING_ICON_SECTION
  )

  element.insertAdjacentHTML('afterbegin', template)
}

export function beforeMount(el, binding) {
  el.instance = {
    initialized: false
  }
}

export function mounted(el, binding, vnode) {
  if (!!binding.value) {
    el.classList.add(CONTAINER_CLASSES, CONTAINER_OVERFLOW)
    insertAdjacentHTML(el, binding)
    el.instance.initialized = true
  }
}

export function beforeUpdate(el, binding, vnode) {
  el.classList.toggle(CONTAINER_CLASSES)

  if (binding.value) {
    if (!el.instance.initialized) {
      insertAdjacentHTML(el, binding)
    }

    el.classList.add(CONTAINER_OVERFLOW)
  } else {
    el.classList.remove(CONTAINER_OVERFLOW)
  }
}

export function updated(el, binding, vnode) { }

export function beforeUnmount(el) { }

export function unmounted(el) {
  el.classList.remove(CONTAINER_CLASSES)
}
