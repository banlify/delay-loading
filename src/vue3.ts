import { DIRECTIVE_NAME as name } from './constraint'

import {
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  beforeUnmount,
  unmounted
} from './core'

const directive = {
  name,
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  beforeUnmount,
  unmounted
}

export default {
  ...directive,
  install(app) {
    app.directive(directive.name, directive)
    return app
  }
}
