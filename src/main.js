import { createApp } from 'vue'
import './style.css'
import './scss/style.scss'
import App from './App.vue'



import router from './router'




createApp(App)
.use(router)
.mount('#app')
// createApp(App)

// .mount('#app')

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
 }) //защита прокрутки чтобы при переходе страница прокручивалась к началу

 




