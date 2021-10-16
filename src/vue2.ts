import { DIRECTIVE_NAME as name } from './constraint'

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
  install(app) {
    app.directive(directive.name, directive)
    return app
  }
}
