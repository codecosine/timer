//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/less/bootstrap.less';
import './style/timeline.less';

import Vue from 'vue';
import App from './App';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';



Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/index': {
    component: App
  }
});

router.redirect({
  '*': '/index'
});

router.start(App, '#app');

