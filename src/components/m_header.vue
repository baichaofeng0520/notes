<template>
    <div>
        <div class="head">
            <div class="w1000">
                <!-- <embed type="application/x-shockwave-flash" src="http://cdn.abowman.com/widgets/hamster/hamster.swf" width="250" height="210" id="flashID" name="flashID" bgcolor="#FFFFFF" quality="high" flashvars="up_backgroundColor=FFFFFF" wmode="opaque" allowscriptaccess="always"> -->
                <iframe src="../../static/hamster.html" frameborder="0" width="100%"></iframe>
                <!-- <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><router-link :to ="{path:'/detail',query:{index:'m-1',title:'1',url:'https://test.yocoolnet.in/files/mp4/x/A/J/xAJFK.m3u8'}}"><img :src="require('../assets/img/1.jpg')" alt=""></router-link></div>
                        <div class="swiper-slide"><router-link :to ="{path:'/detail',query:{index:'m-1',title:'2',url:'https://test.yocoolnet.in/files/mp4/Z/5/F/Z5FWT.m3u8'}}"><img :src="require('../assets/img/2.jpg')" alt=""></router-link></div>
                        <div class="swiper-slide"><router-link :to ="{path:'/detail',query:{index:'m-1',title:'3',url:'https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8'}}"><img :src="require('../assets/img/3.jpg')" alt=""></router-link></div>
                        <div class="swiper-slide"><router-link :to ="{path:'/detail',query:{index:'m-1',title:'4',url:'https://test.yocoolnet.in/files/mp4/t/9/N/t9NAw.m3u8'}}"><img :src="require('../assets/img/4.jpg')" alt=""></router-link></div>
                        <div class="swiper-slide"><router-link :to ="{path:'/detail',query:{index:'m-1',title:'5',url:'https://test.yocoolnet.in/files/mp4/V/6/F/V6FKO.m3u8'}}"><img :src="require('../assets/img/5.jpg')" alt=""></router-link></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div> -->
            </div>
            <div class="nav">
                <div class="w1000">
                    <ul>
                        <li @click="route(1)">Vue {{index}}</li><span>|</span>
                        <li @click="route(2)">JQuery</li><span>|</span>
                        <li @click="route(3)">JavaScript</li><span>|</span>
                        <li @click="route(4)">小程序</li><span>|</span>
                        <li @click="route(5)">前端对象</li><span>|</span>
                        <li @click="route(6)">休闲/娱乐</li><span>|</span>
                        <li @click="route(7)">工具网站</li><span>|</span>
                        <li @click="route(8)">css</li><span>|</span>
                        <li @click="route(9)">图片</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";

export default {
    // name: 'my-head',
    props: ['index'],//接收父组件传递过来的数据
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            observer: true,
            autoplay: 3000,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
            //如果需要自动切换海报
            // autoplay: {
            //   delay: 6000,//时间 毫秒
            //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
            // },
        })
    },
    watch: {

    },
    methods: {
        //子组件给父组件传递参数方法
        route(e) {
            this.$emit('transmit',e)
        }

    },
    components: {

    },
};
</script>

<style scoped>
.head {background: #ffffff;width: 100%}
.w1000 {width: 100%}
.head .nav {background: #379be9;height: .8rem;width: 100%;overflow: hidden;overflow-x: auto;}
.head .nav ul {width: 100%;height: 100%;display: flex;align-items: center;justify-content: space-between;padding: 0 .2rem;}
.head .nav ul span {color: #666666;font-size: .3rem;margin: 0 .2rem;}
.head .nav li {display: block;width: auto;height: 100%;text-align: center;color: #ffffff;font-weight: bold;font-size: .3rem;cursor: pointer;line-height: .8rem;word-break: keep-all;}
.head .nav li:hover {color: #ff3344;}
.head .nav li:active {color: #ff3344;}
.head .swiper-container {width: 100%;height: 5rem;overflow: hidden;}
.head .swiper-container .swiper-slide {display: flex;align-items: center;justify-content: center;}
.head .swiper-container .swiper-slide img {max-width: 100%;}
</style>
