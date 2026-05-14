import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // ? Page Routes
  { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
  { path: '/contact', name: 'contact', component: () => import('@/views/Contact.vue') },
  { path: '/product', name: 'product', component: () => import('@/views/Product.vue') },
  { path: '/cart', name: 'cart', component: () => import('@/views/Cart.vue') },
  { path: '/profile', name: 'profile', component: () =>import('@/views/Profile.vue') },
  { path: '/detail/:id', name: 'detail', component: () => import('@/views/Detail.vue') },

  // ? Auth Routes

  // ! 404 Catch-all (Router 4 specific syntax)
  { path: '/:pathMatch(.*)', name: 'not-found', component: () => import('@/views/NotFound.vue') },

  // ! Test Routes
  { path: '/test', name: 'test', component: () => import('@/views/TestApi.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
