import { CLASSES_PREFIX } from './constraint'
import { DirectiveInstance, DirectiveElement } from './types'

import { create } from 'nano-css'
import { addon as addonRule } from 'nano-css/addon/rule'
// import { addon as addonCache } from 'nano-css/addon/cache'
// import { addon as addonDRule } from 'nano-css/addon/drule'
import { addon as keyframe } from 'nano-css/addon/keyframes'

import type { NanoRenderer } from 'nano-css'

const nano = create({ pfx: CLASSES_PREFIX + '-' })

keyframe(nano)
addonRule(nano)

export var style: NanoRenderer = nano

export const clearTimer = (instance: DirectiveInstance) => {
  clearTimeout(instance.timer)
  instance.timer = undefined
}

export const getPosition = (element: DirectiveElement) => window.getComputedStyle(element)['position']
