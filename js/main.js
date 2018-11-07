import router from './routes.js'
import appSus from './pages/home.cmp.js'

new Vue({
    el: '#app',
    router,
    components: {
      appSus
    }
  })