import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import store from './store/store'

library.add(faCoffee, faAngleUp)

createApp(App)
.use(store)
.component('fa',FontAwesomeIcon)
.mount('#app')
