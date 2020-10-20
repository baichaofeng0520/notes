<template>
    <div>
        <my-head :index = 'num' @transmit = 'transmitData'></my-head>
        <!-- vue -->
        <div class="list-con w1000" v-if="receive == 1">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'vue-1',title:'Vue面试知识点总结'}}">Vue面试知识点总结<b></b></router-link>
                    </p>
                    <p class="intro">看看面试题，只是为了查漏补缺，看看自己那些方面还不懂。切记不要以为背了面试题，就万事大吉了，最好是理解背后的原理，这样面试的时候才能侃侃而谈。不然，稍微有水平的面试官一看就能看出，是否有真才实学还是刚好背中了这道面试题。</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'vue-2',title:'vue中使用axios'}}">vue中使用axios</router-link>
                    </p>
                    <p class="intro">...........</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'vue-3',title:'vue创建项目并且上传到git中的步骤'}}">vue创建项目并且上传到git中的步骤</router-link>
                    </p>
                    <p class="intro">创建vue项目步骤，将vue项目上传至git中的步骤</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'vue-4',title:'vue中使用vue-video-player'}}">vue中使用vue-video-player</router-link>
                    </p>
                    <p class="intro">。。。。。。。。</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'vue-5',title:'Vue解决接口访问跨域问题'}}">Vue解决接口访问跨域问题</router-link>
                    </p>
                    <p class="intro">。。。。。。。。</p>
                </li>
            </ul>
        </div>
        <!-- JQ -->
        <div class="list-con w1000" v-if="receive == 2">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'',title:''}}">JQ</router-link>
                    </p>
                    <p class="intro">看看面试题，只是为了查漏补缺，看看自己那些方面还不懂。切记不要以为背了面试题，就万事大吉了，最好是理解背后的原理，这样面试的时候才能侃侃而谈。不然，稍微有水平的面试官一看就能看出，是否有真才实学还是刚好背中了这道面试题。</p>
                </li>
            </ul>
        </div>
        <!-- js -->
        <div class="list-con w1000" v-if="receive == 3">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'js-1',title:'js 中的类'}}">js 中的类</router-link>
                    </p>
                    <p class="intro">............</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'js-2',title:'js promise应用'}}">js promise应用</router-link>
                    </p>
                    <p class="intro">............</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'js-3',title:'js 代码高亮highlight.js使用'}}">js 代码高亮highlight.js使用</router-link>
                    </p>
                    <p class="intro">............</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'js-4',title:'js 前端请求后台接口方法汇总'}}">js 前端请求后台接口方法汇总</router-link>
                    </p>
                    <p class="intro">............</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'js-5',title:'JS如何判断滚动条是否滚到底部'}}">JS如何判断滚动条是否滚到底部</router-link>
                    </p>
                    <p class="intro">............</p>
                </li>
            </ul>
        </div>
        <!-- 小程序 -->
        <div class="list-con w1000" v-if="receive == 4">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'wx-1',title:'使用Promise封装小程序wx.request'}}">使用Promise封装小程序wx.request</router-link>
                    </p>
                    <p class="intro">因为业务需要，每个http请求都要加上一个请求头，所以每次都要写很多重复的代码。现在尝试把wx.request简单的封装了一下，调用一个request方法，每次请求自动携带header头信息，这样就省事多了，包含了常见的get post put delete 四种请求方法，支持Promise方式调用。</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'wx-2',title:'小程序图片懒加载'}}">小程序图片懒加载</router-link>
                    </p>
                    <p class="intro">。。。。。。。。。。</p>
                </li>
            </ul>
        </div>
        <!-- 前端对象 -->
        <div class="list-con w1000" v-if="receive == 5">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'ht-1',title:'前端中对象的分类'}}">前端中对象的分类</router-link>
                    </p>
                    <p class="intro">前端中包含的诸多对象，包括js对象、dom对象、HTML对象，及浏览器对象（Browser对象）</p>
                </li>
            </ul>
        </div>
        <!-- 娱乐电影 -->
        <div class="list-con w1000" v-if="receive == 6">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'毒液',url:'https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8'}}">《毒液》</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'斯坦森',url:'http://tx.hls.huya.com/huyalive/30765679-2554414705-10971127618396487680-3048991636-10057-A-0-1.m3u8'}}">斯坦森</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'甄子丹',url:'http://ws4.streamhls.huya.com/huyalive/29169025-2686219938-11537226783573147648-2847699096-10057-A-1524024759-1_1200/playlist.m3u8'}}">甄子丹</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'李连杰',url:'http://js.hls.huya.com/huyalive/94525224-2460686093-10568566295157014528-2789253848-10057-A-0-1_1200.m3u8'}}">李连杰</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'高清电影',url:'http://aldirect.hls.huya.com/huyalive/29169025-2686219962-11537226886652362752-2710080226-10057-A-0-1_1200.m3u8'}}">高清电影</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'怪物科幻',url:'http://tx.hls.huya.com/huyalive/30765679-2478268764-10644083292078342144-2847699106-10057-A-0-1.m3u8'}}">怪物科幻</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'女神系列',url:'https://aldirect.hls.huya.com/huyalive/94525224-2472147404-10617792251071299584-2777026638-10057-A-0-1_1200.m3u8'}}">女神系列</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'女神港片',url:'http://tx.hls.huya.com/huyalive/30765679-2484192476-10669525441389264896-2789274564-10057-A-0-1.m3u8'}}">女神港片</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'漫威电影',url:'http://tx.hls.huya.com/huyalive/30765679-2504742278-10757786168918540288-3049003128-10057-A-0-1.m3u8'}}">漫威电影</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'韩-GOODTV',url:'http://mobliestream.c3tv.com:554/live/goodtv.sdp/playlist.m3u8'}}">韩-GOODTV</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'韩国高清1',url:'http://123.108.164.71/etv2sb/phd10062/playlist.m3u8'}}">韩国高清1</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'韩国高清2',url:'http://123.108.164.110/etv1sb/phd10497/playlist.m3u8'}}">韩国高清2</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'dddd',url:'rtmp://198.211.33.185/livepkgr/1C'}}">dddd</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'m-1',title:'',url:''}}"></router-link>
                    </p>
                </li>
            </ul>
        </div>
        <!-- 工具类网站 -->
        <div class="list-con w1000" v-if="receive == 7">
            <ul>
                <li>
                    <p class="title">
                        <span class="name">Unicode编码转换网站：</span>
                        <a class="url" href="http://tool.chinaz.com/tools/unicode.aspx" target="_blank">http://tool.chinaz.com/tools/unicode.aspx</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">廖雪峰学习网站：</span>
                        <a class="url" href="https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544#0" target="_blank">https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544#0</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">css3参考手册：</span>
                        <a class="url" href="http://caibaojian.com/css3/values/color/transparent.htm" target="_blank">http://caibaojian.com/css3/values/color/transparent.htm</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">猫云插件工具平台（稳定、快速、免费的前端开源项目 CDN 加速服务）：</span>
                        <a class="url" href="https://www.bootcdn.cn/" target="_blank">https://www.bootcdn.cn/</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">PC端轮播图插件SuperSlide：</span>
                        <a class="url" href="http://www.superslide2.com/" target="_blank">http://www.superslide2.com/</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">博客文章代码块高亮转换工具：</span>
                        <a class="url" href="http://www.planetb.ca/syntax-highlight-word" target="_blank">http://www.planetb.ca/syntax-highlight-word</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">（博客园）移动端上遇到的各种坑与相对解决方案：</span>
                        <a class="url" href="https://www.cnblogs.com/baihuaxiu/p/6654496.html" target="_blank">https://www.cnblogs.com/baihuaxiu/p/6654496.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">拿去吧：</span>
                        <a class="url" href="https://www.naqub.cn/2354.html" target="_blank">https://www.naqub.cn/2354.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">样式特效源码下载：</span>
                        <a class="url" href="https://www.html5tricks.com/" target="_blank">https://www.html5tricks.com/</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">剪辑软件premiere/pro-cc 2018破解版安装教程：</span>
                        <a class="url" href="http://www.downza.cn/soft/273285.html" target="_blank">http://www.downza.cn/soft/273285.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">如何在64位win10系统下通过virtualbox虚拟机安装苹果macOS 10.12：</span>
                        <a class="url" href="https://blog.csdn.net/LEON1741/article/details/80910244" target="_blank">https://blog.csdn.net/LEON1741/article/details/80910244</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'xn-1',title:'如何在64位win10系统下通过virtualbox虚拟机安装苹果macOS 10.12'}}">如何在64位win10系统下通过virtualbox虚拟机安装苹果macOS 10.12</router-link>
                    </p>
                    <p class="intro">用虚拟机在WIN上玩转Mac OS系统</p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">Oracle VM VirtualBox安装配置Mac OS:</span>
                        <a class="url" href="https://blog.csdn.net/Tingshuo2009/article/details/105033352?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase" target="_blank">https://blog.csdn.net/Tingshuo2009/article/details/105033352?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">JQ特效代码下载：</span>
                        <a class="url" href="http://www.jq22.com/webqd2630" target="_blank">http://www.jq22.com/webqd2630</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name"></span>
                        <a class="url" href="" target="_blank"></a>
                    </p>
                </li>
            </ul>
        </div>
        <!-- css样式 -->
        <div class="list-con w1000" v-if="receive == 8">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'cs-1',title:'transform详解'}}">transform详解</router-link>
                    </p>
                    <p class="intro">..........</p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to="{path:'/detail',query:{index:'cs-2',title:'display详解'}}">display详解</router-link>
                    </p>
                    <p class="intro">。。。。。。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import myHead from '../components/header';

export default {
    props: {

    },
    data() {
        return {
            num: 11,//父组件传递给子组件的数据
            receive: 1//子组件传递给父组件的数据
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        //接收子组件中传递来的数据方法
        transmitData(data) {
            this.receive = data
        },
    },
    components: {
        myHead
    },
};
</script>

<style scoped>
.list-con {background: #ffffff;margin-top: 20px;box-sizing: border-box;padding: 30px 50px;}
.list-con li {padding: 30px 0;border-bottom: 1px solid #eeeeee;}
.list-con li:last-child {margin-bottom: 0;border-bottom: 0;}
.list-con li p.title {font-size: 20px;font-weight: bold;color: #333333;margin-bottom: 10px;cursor: pointer;}
/* css实现小三角使用 transparent 隐藏任何一边边框*/
.list-con li p.title b {border-width: 8px 8px 8px 8px;border-style: solid;border-color: crimson coral yellow green;}

.list-con li p.title span.name {font-size: 14px;color: #999999;font-weight: 400;}
.list-con li p.title a.url {font-size: 14px;color: cornflowerblue;font-weight: 400;}
.list-con li p.title:hover {color: #d72b00;}
.list-con li p.intro {font-size: 14px;color: #666666;font-weight: 400;line-height: 24px;}
@media screen and (max-width:640px){
.list-con {background: #ffffff;margin-top: .2rem;box-sizing: border-box;padding: .3rem;}
.list-con li {padding: .3rem 0;border-bottom: 1px solid #eeeeee;}
.list-con li:last-child {margin-bottom: 0;border-bottom: 0;}
.list-con li p.title {font-size: .3rem;font-weight: bold;color: #333333;margin-bottom: .1rem;cursor: pointer;}
.list-con li p.title span.name {font-size: .28rem;color: #999999;font-weight: 400;}
.list-con li p.title a.url {font-size: .28rem;color: cornflowerblue;font-weight: 400;}
.list-con li p.intro {font-size: .28rem;color: #666666;font-weight: 400;line-height: .48rem;}
.w1000 {width: 100%}
}
</style>
