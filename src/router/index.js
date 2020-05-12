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
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
  },
  // Dynamically load project pages
  ...Projects.projects.map( proj =>({
    path: `/project/${proj.id}`,
    name: `proj-${proj.id}`,
    component: () => import(`../views/projects/P_${proj.id}.vue`)
  })),
  // Dynamically load blog posts
  // TO DO
  
  // Fallback pages
  {
    path: '/*',
    name: 'missing',
    component: () => import(/* webpackChunkName: "missing" */ '../views/Missing.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // Needs to be set since the vue.config.js publicpath has been changed according to: 
  routes,                     // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
});

export default router;
