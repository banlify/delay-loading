import { App } from 'vue'

import directive from './src/directive'

export default (app: App): App => {
  app.directive(directive.name, directive)
  return app
}
