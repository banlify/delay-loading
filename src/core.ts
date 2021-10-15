import { DirectiveBinding, VNode } from 'vue'

const CONTAINER_CLASSES = 'delay-loading-container'

const LOADING_TEMPLATE = `
<div class="delay-loading-cover">
  <div class="delay-loading-spinner">
    <!--<svg viewBox="25 25 50 50" class="circular">
      <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
    </svg>-->
    <i class="inline-loading-icon"></i>
    <!-- loading-text -->
  </div>
</div>
`

const INLINE_LOADING_ICON = `<i class="inline-loading-icon"></i>`

const insertAdjacentHTML = (element: HTMLElement, { arg }: DirectiveBinding) => {
  setTimeout(() => {
    let template = LOADING_TEMPLATE
    const LOADING_TEXT = element.dataset.loadingText

    if (LOADING_TEXT && LOADING_TEXT.trim()) {
      template = template.replace(
        '<!-- loading-text -->',
        `<p class="delay-loading-text">${LOADING_TEXT}</p>`
      )
    }

    element.classList.add(CONTAINER_CLASSES)
    element.insertAdjacentHTML('afterbegin', template)
  }, +arg || 0)
}

export function created() { }

export function beforeMount() { }

export function mounted(el, binding, vnode) {
  if (!!binding.value) {
    insertAdjacentHTML(el, binding)
    el.instance = {
      initialized: true
    }
  }
}

export function beforeUpdate(el, binding, vnode) {
  el.classList.toggle(CONTAINER_CLASSES)
}

export function updated(el, binding, vnode) { }

export function beforeUnmount(el) {
  el.classList.remove(CONTAINER_CLASSES)
}

export function unmounted() { }
