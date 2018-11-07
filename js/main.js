import router from './routes.js'
import appSus from './pages/app-sus/home.cmp.js'


new Vue({
    el: '#app',
    router,
    components: {
      appSus
    }
  })