import { isVue2, isVue3 } from 'vue-demi';
import { LoadingVue2, LoadingVue3 } from './types';
import {
  created,
  beforeMount,
  mounted,
  beforeUpdate,
  updated,
  beforeUnmount,
  unmounted
} from './core'

let directive: LoadingVue2 | LoadingVue3 = { name: 'loading' };

(() => {
  if (isVue2) {
    Object.assign(directive, {});
  } else if (isVue3) {
    Object.assign(directive, {});
  }
})();

export default directive;
