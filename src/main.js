import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

// Multi-Language
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import spanish from './assets/i18n/es'
import english from './assets/i18n/en'
const messages = {
    en: english,
    es: spanish
}
const i18n = new VueI18n({
    locale: 'en', // default lang
    messages,
})

new Vue({
    i18n,
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})