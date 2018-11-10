
import appSus from './pages/home.cmp.js'
import missKeep from './pages/miss-keep.cmp.js'
import misterEmail from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'
import emailResponse from './pages/email-response.cmp.js'

const routes = [
    {path: '/', component: appSus},
    {path: '/missKeep', component: missKeep},
    {path: '/misterEmail', component: misterEmail},
    {path: '/misterEmail/response/:emailId', component: emailResponse},
    {path: '/misterEmail/:emailId', component: emailDetails},
    
   
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;