import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes.ts";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('junior-token');

    if(to.meta.requiresAuth && !token) {
        next('/login');
    } else {
        next();
    }
})

export default router;