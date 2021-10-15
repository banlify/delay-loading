import { App } from 'vue'

import directive from './src/directive'

directive.name = 'delay-loading'

export default {
  ...directive,
  install(app: App): App {
    app.directive(directive.name, directive)
    return app
  }
}
