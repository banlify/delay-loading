import { DIRECTIVE_NAME as name, DEFAULT_CONFIG } from './constraint'

import {
  beforeMount,
  mounted,
  beforeUpdate,
  unmounted
} from './core'

const directive = {
  name,
  beforeMount,
  mounted,
  beforeUpdate,
  unmounted
}

export default {
  ...directive,
  install(app: Record<string, any>, config: Record<string, number>) {
    Object.assign(DEFAULT_CONFIG, config)
    app.directive(directive.name, directive)
  }
}
