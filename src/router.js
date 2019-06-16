import Vue from 'vue'
import Router from 'vue-router'
import  apiRouter from  "./constant/apiRouter"
import  home from  "./views/Home"
import  login from  "./views/Login"
import apiConst from "./constant/apiConst";

Vue.use(Router)

let homeRouter=apiRouter.map(item=>{
return {
  path: item.name,
  component: () => import("./views" + item.url)

}


})
console.log(homeRouter)
export default new Router({
  mode: 'history',
  routes:[{
    path: '/',
    component:home,
    children: homeRouter
  },
    {
      path:"/login",
      component:login
    }
]

})
