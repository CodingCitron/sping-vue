import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "Home" */ '../views/HomePage.vue'),
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () =>
            import(
                /* webpackChunkName: "SignUpPage" */ '../views/SignUpPage.vue'
            ),
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: () =>
            import(
                /* webpackChunkName: "SignUpPage" */ '../views/SignInPage.vue'
            ),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
