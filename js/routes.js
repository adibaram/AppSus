<<<<<<< HEAD
import appSus from './pages/home.cmp.js'
import missKeep from './pages/miss-keep.cmp.js'
import misterEmail from './pages/mister-email.cmp.js'
=======
import appSus from './pages/app-sus/home.cmp.js'
import missKeep from './pages/miss-keep/cmps/miss-keep.cmp.js'
import misterEmail from './pages/mister-email/cmps/email-app.cmp.js'
>>>>>>> fa1b29e91e4ae488b20d318e51b912b616070dab

const routes = [
    {path: '/', component: appSus},
    {path: '/missKeep', component: missKeep},
    {path: '/misterEmail', component: misterEmail},
   
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;