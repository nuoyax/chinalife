import Vue from 'vue'
import Router from 'vue-router'
import  apiRouter from  "./constant/apiRouter"
import  home from  "./views/Home"
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
  routes:[{
    path: '/',
    component:home,
    children: homeRouter
  }
]

})
