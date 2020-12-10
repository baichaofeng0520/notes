import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import pc_home from '../view/pc_home.vue'
import m_home from '../view/m_home.vue'
import Detail from '../view/detail.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '',
    //   redirect: '/pc_home'
    // },
    {
      path: '/pc_home',
      name: 'pc_home',
      component: pc_home
    },
    {
      path: '/m_home',
      name: 'm_home',
      component: m_home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})
