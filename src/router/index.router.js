import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
				{
				  path: "/:catchAll(.*)",
				  redirect: { name: "Home" },
        },
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: '/location',
          name: 'Location',
          component: () => import('../views/Location.vue'),
        },
    ]
})

export default router