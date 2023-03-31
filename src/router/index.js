import Vue from 'vue'
import VueRouter from  'vue-router'
import FormPage from '../views/FormPage.vue';
import ProductCards from '../views/ProductCards.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: FormPage
  },
  {
    path: '/about',
    name: 'about',
    component: ProductCards
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router