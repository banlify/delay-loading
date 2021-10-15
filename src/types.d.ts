import { DirectiveBinding, VNode } from 'vue'

export type VueDirectiveType<T> = T extends Vue2 ? Vue2 : Vue3

export interface Vue2 {
  name: string
  bind(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  inserted(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  beforeUpdate(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  componentUpdated(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  unbind(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
}

export interface Vue3 {
  name: string
  created(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  beforeMount(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  mounted(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  beforeUpdate(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  updated(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  beforeUnmount(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
  unmounted(el: HTMLElement, biding: DirectiveBinding, vnode: VNode): void
}
