import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Product from '../views/Product.vue'
// import Docs from '../views/Docs.vue'
// import Contacts from '../views/Contacts.vue'









// --------------------------
const scrollBehavior = function (to, from, savedPosition) {


  if (to.hash) {
    return {
      // // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
      // el: to.hash,
      // // offset has to be set as left and top at the top level
      // left: 0,
      // top: 145
    }

  } else{
return { x: 0, y: 0 }
  }




}
// -----------------------------



const routes = [
    {path: '/home', name: 'Home', component: Home},
    


  

]


console.log("🚀 ~ file: index.js ~ line 53 ~ children", routes.children);
const router = createRouter({
    // mode: 'history',
    scrollBehavior,
    history: createWebHistory(),
    hash: createWebHashHistory(),
    routes,



})

export default router

