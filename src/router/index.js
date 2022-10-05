import { createRouter, createWebHistory } from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes:[
    
     {path: "/", component: () => import ("../views/SignIn.vue") },
     
     {path: "/main", component: () => import ("../views/main.vue") },
    ]
}

);


export default router;