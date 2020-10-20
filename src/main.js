// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/js/special'
import VideoPlayer from 'vue-video-player';
import "video.js/dist/video-js.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



