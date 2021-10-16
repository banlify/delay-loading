interface DirectiveBinding {
  arg?: string;
  value: boolean;
  oldValue: boolean | null;
  modifiers: Record<string, boolean>;
}

import {
  DEFAULT_DELAY,

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

// const toggleWrapperState = (element: HTMLElement, { modifiers }: DirectiveBinding) => {
//   const classes = element.classList

//   if (!classes.contains(CONTAINER_CLASSES)) {
//     classes.add(CONTAINER_CLASSES)
//   }

//   if (modifiers.fullscreen) {
//     classes.add(FULLSCREEN_DISPLAY)
//   }
// }

const insertAdjacentHTML = (element: HTMLElement, { arg, modifiers }: DirectiveBinding) => {
  const delay = +arg !== 0 ? +arg : DEFAULT_DELAY
  setTimeout(renderTemplate, delay, element, modifiers)
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

export function beforeMount(el) {
  console.log(el.tagName)
  el.instance = {
    initialized: false
  }
}

export function mounted(el, binding) {
  if (!!binding.value) {
    el.classList.add(CONTAINER_CLASSES, CONTAINER_OVERFLOW)
    insertAdjacentHTML(el, binding)
    el.instance.initialized = true
  }
}

export function beforeUpdate(el, binding) {
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

export function unmounted(el) {
  el.classList.remove(CONTAINER_CLASSES)
}
