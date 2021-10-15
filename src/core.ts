import { DirectiveBinding } from 'vue'

import {
  CONTAINER_CLASSES,
  CONTAINER_OVERFLOW,
  FULLSCREEN_DISPLAY,

  LOADING_ICON_FLAG,
  LOADING_TEXT_FLAG,

  LOADING_TEMPLATE,
  RENDER_LOADING_TEXT,
  INLINE_LOADING_ICON,
  SECTION_LOADING_ICON,
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
  setTimeout(() => {
    let template = LOADING_TEMPLATE
    const LOADING_TEXT = element.dataset.loadingText

    if (LOADING_TEXT && LOADING_TEXT.trim()) {
      template = template.replace(
        LOADING_TEXT_FLAG,
        RENDER_LOADING_TEXT(LOADING_TEXT)
      )
    }

    element.classList.add(CONTAINER_CLASSES, modifiers.fullscreen ? 'delay-loading-fixed' : '')
    element.insertAdjacentHTML('afterbegin', template)
  }, +arg || 300)
}

export function created() { }

export function beforeMount(el, binding) {
  el.instance = {
    initialized: false
  }
}

export function mounted(el, binding, vnode) {
  if (!!binding.value) {
    insertAdjacentHTML(el, binding)
    el.instance.initialized = true
  }
}

export function beforeUpdate(el, binding, vnode) {
  el.classList.toggle(CONTAINER_CLASSES)
  if (binding.value && !el.instance.initialized) {
    insertAdjacentHTML(el, binding)
  }

}

export function updated(el, binding, vnode) { }

export function beforeUnmount(el) {
  el.classList.remove(CONTAINER_CLASSES)
}

export function unmounted(el) { }
