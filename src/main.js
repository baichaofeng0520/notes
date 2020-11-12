// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
// import './assets/js/special'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

import 'swiper/dist/css/swiper.min.css';

//video.js播放
// import 'video.js/dist/video-js.css'

//vue-video-player播放
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' //videoJs的样式
// import 'vue-video-player/src/custom-theme.css' //vue-video-player的样式
// import 'videojs-flash'; //引入才能播放rtmp视屏
import 'videojs-contrib-hls' //引入才能播放m3u8文件
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



