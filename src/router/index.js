import { createRouter, createWebHistory } from 'vue-router'
import Home from '.././views/Home.vue'
import About from '.././views/About.vue'

//creation des routes
const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/about', name: "About", component: About }
]

const router = createRouter({
    history: createWebHistory(),
    // les routes fonctionnent avec le path et le name comme dans symfony, 
    // mais il faudra rajouter le composant vue qui gère cette vue.
    // Path, Name, Component.
    // il faudra par exemple créer le component Home.vue
    
    routes
   /* routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About }
    ]*/
})
export default router