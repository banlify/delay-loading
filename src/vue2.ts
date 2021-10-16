import { DIRECTIVE_NAME as name } from './constraint'

import {
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  unmounted
} from './core'

const directive = {
  name,
  bind: beforeMount,
  inserted: mounted,
  beforeUpdate,
  componentUpdated: updated,
  unbind: unmounted
}

export default {
  ...directive,
  install(app) {
    app.directive(directive.name, directive)
    return app
  }
}
