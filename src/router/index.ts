import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/explore',
      name: 'musicians.index',
      component: () => import('../views/ExploreView.vue'),
      props: route => ({ query: [route.query.instrument, route.query.rol] }),
    },
    {
      path: '/musicians/:id',
      name: 'musicians.show',
      component: () => import('../views/MusicianView.vue'),
      props: true,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
  ],
});

export default router;
