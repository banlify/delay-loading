export function created() { }

export function beforeMount() { }

export function mounted(el, binding, vnode) {
  if (!!binding.value) {
    el.instance = {
      // 
    }
  }
}

export function beforeUpdate(el, binding, vnode, prevNode) { }

export function updated(el, binding, vnode, prevNode) { }

export function beforeUnmount() { }

export function unmounted() { }
