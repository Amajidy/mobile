import Vue from 'vue'

import {focus, password} from '~/directives'

const GlobalDirectives = {
  install (Vue) {
    Vue.directive('focus', focus);
    Vue.directive('password', password);
  }
};

Vue.use(GlobalDirectives);
export default GlobalDirectives
