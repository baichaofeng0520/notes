<template>
    <div>
        <my-header :index = 'num' @transmit = 'transmitData'></my-header>
        <!-- vue -->
        <div class="list-con w1000" v-if="receive == 1">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'vue-1',title:'Vue面试知识点总结'}}">Vue面试知识点总结</router-link>
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
        <!-- jq -->
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
        <!-- 娱乐 -->
        <div class="list-con w1000 video-box" v-if="receive == 6">
            <ul class="clearfix">
                <block class="fl" v-for="(item,index) in videoUrl" :key="index">
                    <li>
                        <p class="title">
                            <router-link :to="{path:'/detail',query:{index:'m-1',title:item.title,url:item.url}}"><img :src="require('../assets/img/'+item.id+'.jpg')" alt=""></router-link>
                        </p>
                        <p class="name">{{item.title}}</p>
                    </li>
                </block>
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
                        <span class="name">python 获取视频第一个画面</span>
                        <a class="url" href="https://blog.csdn.net/weixin_37989267/article/details/94432815" target="_blank">https://blog.csdn.net/weixin_37989267/article/details/94432815</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">Vue + Flask 解决跨域限制问题</span>
                        <a class="url" href="https://blog.csdn.net/weixin_38564268/article/details/104857300" target="_blank">https://blog.csdn.net/weixin_38564268/article/details/104857300</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">Python库—CV2</span>
                        <a class="url" href="https://blog.csdn.net/yu1014745867/article/details/87861593?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf" target="_blank">https://blog.csdn.net/yu1014745867/article/details/87861593?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">python导入cv2的方法</span>
                        <a class="url" href="" target="_blank">https://blog.csdn.net/weixin_40475450/article/details/80819866https://blog.csdn.net/weixin_40475450/article/details/80819866</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">如何爬blob:htttp://开头的视频</span>
                        <a class="url" href="https://blog.csdn.net/qq_37591637/article/details/98944852?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param" target="_blank">https://blog.csdn.net/qq_37591637/article/details/98944852?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">Git 查看提交历史记录</span>
                        <a class="url" href="https://zhuoqianmingyue.blog.csdn.net/article/details/87548491?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param" target="_blank">https://zhuoqianmingyue.blog.csdn.net/article/details/87548491?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">Links for opencv-python</span>
                        <a class="url" href="https://pypi.tuna.tsinghua.edu.cn/simple/opencv-python/" target="_blank">https://pypi.tuna.tsinghua.edu.cn/simple/opencv-python/</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">vue常用插件之视频播放（rtmp m3u8）</span>
                        <a class="url" href="https://www.cnblogs.com/sgs123/p/12197635.html" target="_blank">https://www.cnblogs.com/sgs123/p/12197635.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">async的基本用法</span>
                        <a class="url" href="https://www.cnblogs.com/mengff/p/9651502.html" target="_blank">https://www.cnblogs.com/mengff/p/9651502.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">VUE怎么动态显示本地文件夹中的图片</span>
                        <a class="url" href="https://www.it610.com/article/1282566234713374720.htm" target="_blank">https://www.it610.com/article/1282566234713374720.htm</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">vue常用插件之图片预览</span>
                        <a class="url" href="https://www.cnblogs.com/sgs123/p/12197278.html" target="_blank">https://www.cnblogs.com/sgs123/p/12197278.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name">vue 项目中图片压缩方法小结</span>
                        <a class="url" href="https://www.cnblogs.com/teamemory/p/13322431.html" target="_blank">https://www.cnblogs.com/teamemory/p/13322431.html</a>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <span class="name"></span>
                        <a class="url" href="" target="_blank"></a>
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
        <!-- 美图 -->
        <div class="list-con w1000" v-if="receive == 9">
            <ul>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-1',id: '1'}}">image-1</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-2',id: '2'}}">image-2</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-3',id: '3'}}">image-3</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-4',id: '4'}}">image-4</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-5',id: '5'}}">image-5</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-6',id: '6'}}">image-6</router-link>
                    </p>
                </li>
                <li>
                    <p class="title">
                        <router-link :to ="{path:'/detail',query:{index:'image-1',title:'张-7',id: '7'}}">image-7</router-link>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import myHeader from '../components/m_header';

export default {
    props: {

    },
    data() {
        return {
            num: 11,//父组件传递给子组件的数据
            receive: 1,//子组件传递给父组件的数据
            videoUrl: [
                {url: 'https://test.yocoolnet.in/files/mp4/x/A/J/xAJFK.m3u8',title: '视频-1',id: 1},
                {url: 'https://test.yocoolnet.in/files/mp4/Z/5/F/Z5FWT.m3u8',title: '视频-2',id: 2},
                {url: 'https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8',title: '毒液',id: 3},
                {url: 'https://test.yocoolnet.in/files/mp4/t/9/N/t9NAw.m3u8',title: '视频-3',id: 4},
                {url: 'https://test.yocoolnet.in/files/mp4/V/6/F/V6FKO.m3u8',title: '视频-4',id: 5},
                ],
            Arr: []
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        //判断文件夹中的图片数量
        var requireModule = require.context(
            "../assets/img",
            false,
            /\.jpg$/
        );
        console.info(requireModule);
        for (var i = 0; i < requireModule.keys().length; i++) {
            this.Arr.push(
                requireModule.keys()[i].substr(2, requireModule.keys()[i].length)
            );
        }
        console.log('数组长度-1', this.Arr.length)
        console.log('数组长度-1', this.Arr)
        console.log('数组长度-2', this.videoUrl.length)

        this.getdata()
    },
    watch: {

    },
    methods: {
        //接收子组件中传递来的数据方法
        transmitData(data) {
            this.receive = data
        },

        getdata(){
            if(this.Arr.length == this.videoUrl.length) {
                console.log('不请求')
            } else {
                console.log('else')
                // 请求python数据
                for(let i = 0;i < this.videoUrl.length;i++) {
                    setTimeout(function() {
                        this.$ajax.get('http://127.0.0.1:5000/hello?vUrl=' + this.videoUrl[i].url + '&id=' + this.videoUrl[i].id).then((res)=>{
                            console.log('请求数据',res.data)
                        }).catch((error)=>{
                            console.log(error)
                        })
                    },1000)
                }
            }
        },
    },
    components: {
        myHeader
    },
};
</script>

<style scoped>
.list-con {background: #ffffff;margin-top: .2rem;box-sizing: border-box;padding: .3rem;}
.list-con li {padding: .3rem 0;border-bottom: 1px solid #eeeeee;}
.list-con li:last-child {margin-bottom: 0;border-bottom: 0;}
.list-con li p.title {font-size: .3rem;font-weight: bold;color: #333333;margin-bottom: .1rem;cursor: pointer;}
.list-con li p.title img {max-width: 2rem;}
.list-con li p.title a {color: #55aaff;word-break: break-word;}
.list-con li p.title:hover {color: #d72b00;}
.list-con li p.intro {font-size: .28rem;color: #666666;font-weight: 400;line-height: .48rem;}
.video-box ul {display: flex;align-items: center;flex-wrap: wrap;margin-right: -.41rem;}
.video-box ul li {text-align: center;margin-right: 0.39rem;padding: 0;}
.video-box ul li p.name {font-size: 0.3rem;color: #999999;margin-top: 0.1rem;font-weight: bold;}
.video-box ul li p.title {height: 3rem;display: flex;align-items: center;justify-content: center;overflow: hidden;box-sizing: border-box;border: 1px solid #e6e6e6;}
.w1000 {width: 100%}
</style>
