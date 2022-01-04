import Vue from 'vue'
import validatorMessageFa from 'vee-validate/dist/locale/fa';
// import validatorMessageEn from 'vee-validate/dist/locale/en';

import VeeValidate, { Validator } from 'vee-validate';
export default () => {
    Vue.use(VeeValidate);


    Validator.localize('fa', validatorMessageFa);

    VeeValidate.Validator.extend('verify_password', {
        getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
        validate: value => {
            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            return strongRegex.test(value);
        }
    });
}


