// import des modules que l'on utilisera dans l'appli ici
// nous les gérerons avec la gestion de pacquets de node (npm)
// npm install vue-router@4 pour un nouveau projet
import { createApp } from 'vue'
// gestion des routes npm install vue-router@4 -- save
//import { createRouter, createWebHistory } from 'vue-router'
import router from './router/index'

import App from './App.vue'

// ne pas oublier d'importer le component des routes le mieux 
// est de les externaliser pour ne pas surcharger le fichier principal.
/** 
import Home from './views/Home.vue'
import About from './views/About.vue'

//creation des routes
const router = createRouter({
    history: createWebHistory(),
    // les routes fonctionnent avec le path et le name comme dans symfony, 
    // mais il faudra rajouter le composant vue qui gère cette vue.
    // Path, Name, Component.
    // il faudra par exemple créer le component Home.vue
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/about', name: "About", component: About }
    ]
})
**/

createApp(App)
.use(router)
.mount('#app')
