import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ListContacts from '../views/ListContacts.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ListContacts',
    component: ListContacts,
  },
  {
    path: '/insert',
    name: 'InsertContacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/InsertContacts.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
