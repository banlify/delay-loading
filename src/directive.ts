import './index.css';
import { Vue2, Vue3 } from './types';
import { isVue2, isVue3 } from 'vue-demi';
import {
  created,
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  beforeUnmount,
  unmounted
} from './core'


let directive

if (isVue2) {
  directive = {
    bind: beforeMount,
    inserted: mounted,
    beforeUpdate,
    componentUpdated: updated,
    unbind: unmounted
  }
} else {
  directive = {
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    beforeUnmount,
    unmounted
  }
}

export default directive;
