import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue'

import Register from './views/formRegister'
import Feedback from './views/feedback'
import Upload from './views/upload'
import Gallery from './views/gallery'
import Login from './views/login'
import Stock from './views/stock'
import addProduct from './views/addProduct'
import edit from './views/edit'
Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: '/familytree',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },

    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: addProduct
    }, {
      path: '/stock/edit/:id',
      name: 'edit',
      component: edit
    },

  ],
});
