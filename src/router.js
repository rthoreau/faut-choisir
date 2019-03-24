import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard.vue';
import List from './components/List.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/List/:id', component: List }
  ]
});

export default router;