// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false


const validateConfig = {
  locale: 'zh_TW',
  dictionary: {
    zh_TW: {
      messages: {}
    }
  }
};
import VeeValidate, {
  Validator
} from 'vee-validate';
Vue.use(VeeValidate);

Validator.extend('verify_phone', {
  getMessage: () => {
    return 'INVALID PHONE NUMBER';
  },
  validate: (value) => {
    return value.replace(/\s/g, '').match(/09[0-9]{8}/) !== null && value.match(/\S/g).length == 10;
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
