export const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/RegisterForm.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/LoginForm.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: { requiresAuth: true },
        component: () => import('../views/Dashboard.vue')
    },
]