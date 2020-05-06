import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Projects from '../store/project_info.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Dynamically load project pages
  ...Projects.projects.map( proj =>({
    path: `/project/${proj.id}`,
    name: `proj-${proj.id}`,
    component: () => import(`../views/projects/P_${proj.id}.vue`)
  })),
  // Fallback pages
  {
    path: '/*',
    name: 'missing',
    component: () => import(/* webpackChunkName: "missing" */ '../views/Missing.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
