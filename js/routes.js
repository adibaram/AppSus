
import appSus from './pages/home.cmp.js'
import missKeep from './pages/miss-keep.cmp.js'
import misterEmail from './pages/mister-email.cmp.js'

const routes = [
    {path: '/', component: appSus},
    {path: '/missKeep', component: missKeep},
    {path: '/misterEmail', component: misterEmail},
   
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;