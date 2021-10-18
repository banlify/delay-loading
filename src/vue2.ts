import { DIRECTIVE_NAME as name, DEFAULT_CONFIG } from './constraint'

import {
  beforeMount as bind,
  mounted as inserted,
  beforeUpdate as componentUpdated,
  unmounted as unbind
} from './core'

const directive = {
  name,
  bind,
  inserted,
  componentUpdated,
  unbind
}

export default {
  ...directive,
  install(app: Record<string, any>, config: Record<string, number>) {
    Object.assign(DEFAULT_CONFIG, config)
    app.directive(directive.name, directive)
  }
}
