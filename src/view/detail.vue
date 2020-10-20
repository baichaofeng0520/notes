<template>
    <div>
        <!-- <my-head></my-head> -->
        
        <div class="part-head" id="top-head">
            <div class="img"><router-link to="/m_home"><img src="../assets/image/user.png" alt=""></router-link></div>
        </div>
        <div class="title w1000">{{this.$route.query.title}}</div>
        <!-- vue -->
        <div class="list-con w1000" id="list-con" v-if="index == 'vue-1'">
            <div class="content">
                <div class="part">
                    <label>一、对于MVVM的理解</label>
                    <p>MVVM 是 Model-View-ViewModel 的缩写。</p>
                    <p><strong>Model</strong>代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。</p>
                    <p><strong>View</strong>代表UI 组件，它负责将数据模型转化成UI 展现出来。</p>
                    <p><strong>ViewModel</strong>监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。</p>
                    <p>在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。</p>
                    <p><strong>ViewModel</strong>通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。</p>
                </div>
                <div class="part">
                    <label>二、Vue的生命周期</label>
                    <p><strong>beforeCreate（创建前）</strong>在数据观测和初始化事件还未开始</p>
                    <p><strong>created（创建后）</strong>完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来</p>
                    <p><strong>beforeMount（载入前）</strong>在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。</p>
                    <p><strong>mounted（载入后）</strong>在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。</p>
                    <p><strong>beforeUpdate（更新前）</strong>在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。</p>
                    <p><strong>updated（更新后）</strong>在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。</p>
                    <p><strong>beforeDestroy（销毁前）</strong>在实例销毁之前调用。实例仍然完全可用。</p>
                    <p><strong>destroyed（销毁后）</strong>在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。</p>
                    <p>
                        <span>1.什么是vue生命周期？</span><br>
                        <span>答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。</span>
                    </p>
                    <p>
                        <span>2.vue生命周期的作用是什么？</span><br>
                        <span>答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。</span>
                    </p>
                    <p>
                        <span>3.vue生命周期总共有几个阶段？</span><br>
                        <span>答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。</span>
                    </p>
                    <p>
                        <span>4.第一次页面加载会触发哪几个钩子？</span><br>
                        <span>答：会触发 下面这几个beforeCreate, created, beforeMount, mounted。</span>
                    </p>
                    <p>
                        <span>5.DOM 渲染在 哪个周期中就已经完成？</span><br>
                        <span>答：DOM 渲染在 mounted 中就已经完成了。</span>
                    </p>
                </div>
                <div class="part">
                    <label>三、 Vue实现数据双向绑定的原理：Object.defineProperty（）</label>
                    <p>vue实现数据双向绑定主要是：<strong>采用数据劫持结合发布者-订阅者模式的方式</strong>，通过Object.defineProperty（）来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。</p>
                    <p>vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。</p>
                    <p>
                        <strong>js实现简单的双向绑定</strong><br>
                        <input type="text" id="txt"><br>
                        <span id="show"></span>
                        《script type="text/javascript"》<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;var obj = {}<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;Object.defineProperty(obj, 'txt', {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;get: function () {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return obj<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;set: function (newValue) {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('txt').value = newValue<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('show').innerHTML = newValue<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;})<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;document.addEventListener('keyup', function (e) {<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.txt = e.target.value<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;})<br>
                        《/script》
                    </p>
                </div>
                <div class="part">
                    <label>四、Vue组件间的参数传递</label>
                    <p>
                        <strong>1.父组件与子组件传值</strong><br>
                        <span>父组件传给子组件：子组件通过props方法接受数据;</span><br>
                        <span>子组件传给父组件：$emit方法传递参数</span>
                    </p>
                    <p>
                        <strong>2.非父子组件间的数据传递，兄弟组件传值</strong><br>
                        <span>eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。（虽然也有不少人推荐直接用VUEX，具体来说看需求咯。技术只是手段，目的达到才是王道。）</span>
                    </p>
                </div>
                <div class="part">
                    <label>五、Vue的路由实现：hash模式 和 history模式</label>
                    <p><strong>hash模式：</strong>在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；</p>
                    <p>特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。</p>
                    <p>hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。</p>
                    <p><strong>history模式：</strong>history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。<strong>Vue-Router 官网里如此描述：</strong>“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”</p>
                </div>
                <div class="part">
                    <label>六、vue-cli如何新增自定义指令？</label>
                    <p>
                        <span>1.创建局部指令</span><br>
                        <span class="img"></span>
                    </p>
                    <p>
                        <span>2.全局指令</span><br>
                        <img src="../assets/image/2.png" alt="">
                    </p>
                    <p>
                        <span>3.指令的使用</span><br>
                        <img src="../assets/image/3.png" alt="">
                    </p>
                </div>
                <div class="part">
                    <label>七、vue如何自定义一个过滤器？</label>
                    <p>
                        <span>html代码：</span><br>
                        <img src="../assets/image/4.png" alt="">
                    </p>
                    <p>
                        <span>JS代码：</span><br>
                        <img src="../assets/image/5.png" alt="">
                    </p>
                    <p>
                        <span>全局定义过滤器</span><br>
                        <img src="../assets/image/6.png" alt="">
                    </p>
                    <p>过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。</p>
                </div>
                <div class="part">
                    <label>八、一句话就能回答的面试题</label>
                    <p>
                        <strong>1.css只在当前组件起作用</strong><br>
                        <span>答：在style标签中写入scoped即可 例如：<!-- <style scoped></style> --></span>
                    </p>
                    <p>
                        <strong>2.v-if 和 v-show 区别</strong><br>
                        <span>答：v-if按照条件是否渲染，v-show是display的block或none；</span>
                    </p>
                    <p>
                        <strong>3.$route和$router的区别</strong><br>
                        <span>答：$route是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等。</span>
                    </p>
                    <p>
                        <strong>4.vue.js的两个核心是什么？</strong><br>
                        <span>答：数据驱动、组件系统</span>
                    </p>
                    <p>
                        <strong>5.vue几种常用的指令</strong><br>
                        <span>答：v-for 、 v-if 、v-bind、v-on、v-show、v-else</span>
                    </p>
                    <p>
                        <strong>6.vue常用的修饰符？</strong><br>
                        <span>答：.prevent: 提交事件不再重载页面；.stop: 阻止单击事件冒泡；.self: 当事件发生在该元素本身而不是子元素的时候会触发；.capture: 事件侦听，事件发生的时候会调用</span>
                    </p>
                    <p>
                        <strong>7.v-on 可以绑定多个方法吗？</strong><br>
                        <span>答：可以</span>
                    </p>
                    <p>
                        <strong>8.vue中 key 值的作用？</strong><br>
                        <span>答：当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。</span>
                    </p>
                    <p>
                        <strong>9.什么是vue的计算属性？</strong><br>
                        <span>答：在模板中放入太多的逻辑会让模板过重且难以维护，在需要对数据进行复杂处理，且可能多次使用的情况下，尽量采取计算属性的方式。好处：①使得数据处理结构清晰；②依赖于数据，数据更新，处理结果自动更新；③计算属性内部this指向vm实例；④在template调用时，直接写计算属性名即可；⑤常用的是getter方法，获取数据，也可以使用set方法改变数据；⑥相较于methods，不管依赖的数据变不变，methods都会重新计算，但是依赖数据不变的时候computed从缓存中获取，不会重新计算。</span>
                    </p>
                    <p>
                        <strong>10.vue等单页面应用及其优缺点</strong><br>
                        <span>答：优点：Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件，核心是一个响应的数据绑定系统。MVVM、数据驱动、组件化、轻量、简洁、高效、快速、模块友好。缺点：不支持低版本的浏览器，最低只支持到IE9；不利于SEO的优化（如果要支持SEO，建议通过服务端来进行渲染组件）；第一次加载首页耗时相对长一些；不可以使用浏览器的导航按钮需要自行实现前进、后退。</span>
                    </p>
                    <p>
                        <strong>11.怎么定义 vue-router 的动态路由? 怎么获取传过来的值</strong><br>
                        <span>答：在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。</span>
                    </p>
                </div>
                <div class="part">
                    <label>九、$router和$route的区别</label>
                    <p>$route为当前router跳转对象里面可以获取name、path、query、params等</p>
                    <p>$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法，返回上一个history使用$router.go方法。</p>
                    <p>
                        <strong>路由传参的方式：</strong><br>
                        <span><strong>用params传递：</strong>this.$router.push({name:'Login',params:{id:'leelei'}})</span><br>
                        <span><strong>用query传递：</strong>this.$router.push({path:'/login',query:{id:'leelei'})</span><br>
                        <span>query传参是针对path的，params传参是针对name的。。接收参数的方式都差不多。。this.$route.query.和this.$route.params.</span><br>
                        <span style="color: rgb(243, 171, 83);">使用query传参的话，会在浏览器的url栏看到传的参数类似于get请求，使用params传参的话则不会，类似于post请求。</span>
                    </p>
                </div>
                <div class="part">
                    <label>父组件怎么调用子组件里的方法</label>
                    <p>1.在父组件中：首先要引入子组件 import Child from './child';</p>
                    <p>2.《child ref="mychild"》《/child》是在父组件中为子组件添加一个占位，ref="mychild"是子组件在父组件中的名字</p>
                    <p>3.父组件中 components: {是声明子组件在父组件中的名字}</p>
                    <p>4.在父组件的方法中调用子组件的方法，很重要 this.$refs.mychild.parentHandleclick("嘿嘿嘿"); parentHandleclick是子组件中的方法</p>
                </div>
                <div class="part">
                    <label>应该在vue的生命周期的什么阶段发出ajax请求</label>
                    <p>看实际情况，一般在 created 里面就可以，如果涉及到需要页面加载完成之后的话就用 mounted</p>
                </div>
            </div>
        </div>
        <!-- vue中使用axios -->
        <div class="list-con w1000" id="list-con" v-if="index == 'vue-2'">
            <div class="content">
                <div class="part">
                    <label @click="changeStatus">1.安装axios+{{this.$store.state.count}}</label>
                    <p>npm：</p>
                    <p>$ npm install axios -S</p>
                    <p>2.vue初始化项目</p>
                    <p>cdn：</p>
                    <p>script src="https://unpkg.com/axios/dist/axios.min.js" script</p>
                </div>
                <div class="part">
                    <label>2.配置axios</label>
                    <p>在项目中新建api/index.js文件，用以配置axios</p>
                    <p>api/index.js</p>
                    <p><img src="../assets/image/34.png" alt=""></p>
                    <p>这里的配置了POST、GET、PUT、DELETE方法。并且自动将JSON格式数据转为URL拼接的方式</p>
                    <p>同时配置了跨域，不需要的话将withCredentials设置为false即可</p>
                    <p>并且设置了默认头部地址为：http://localhost:8080/，这样调用的时候只需写访问方法即可</p>
                </div>
                <div class="part">
                    <label>3.使用axios</label>
                    <p>注：PUT请求默认会发送两次请求，第一次预检请求不含参数，所以后端不能对PUT请求地址做参数限制</p>
                    <p>首先在main.js中引入方法</p>
                    <p><img src="../assets/image/35.png" alt=""></p>
                    <p>然后在需要的地方调用即可</p>
                    <p><img src="../assets/image/36.png" alt=""></p>
                </div>
            </div>
        </div>
        <!-- vue创建项目 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'vue-3'">
            <div class="content">
                <div class="part">
                    <label @click="changeStatus">vue创建项目+{{this.$store.state.count}}</label>
                    <p>1.首先安装vue-cli</p>
                    <p>npm install -g vue-cli</p>
                    <p>2.vue初始化项目</p>
                    <p>vue init webpack 项目名</p>
                    <div class="im-1"></div>
                    <p>Use ESLint to lint your code? (Y/n)   是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的</p>
                    <p>Setup unit tests with Karma + Mocha? (Y/n)   是否安装单元测试</p>
                    <p>Setup e2e tests with Nightwatch(Y/n)?    是否安装e2e测试</p>
                    <p>最后，因为各个模板间都是相互依赖的，所以要安装依赖，用命令进入项目的目录，在命令行输入npm install</p>
                </div>
                <div class="part">
                    <label>上传项目到git中</label>
                    <p class="p">
                        <span>1、先进入项目文件夹，通过命令 git init 把这个目录变成git可以管理的仓库</span>
                        <span class="bg">git init</span>
                    </p>
                    <p class="p">
                        <span>2、把文件添加到版本库中，使用命令 git add .添加到暂存区里面去，不要忘记后面的小数点“.”，意思为添加文件夹下的所有文件。</span>
                        <span class="bg">git add .</span>
                    </p>
                    <p class="p">
                        <span>3、用命令 git commit告诉Git，把文件提交到仓库。引号内为提交说明。</span>
                        <span class="bg">git commit -m 'message'</span>
                    </p>
                    <p class="p">
                        <span>4、关联到远程库。</span>
                        <span class="bg">git remote add origin 你的远程库地(如：https://github.com/jwhuang59/vue-element-traveling.git)</span>
                    </p>
                    <p class="p">
                        <span>5、将项目所有push文件到仓库中。</span>
                        <span class="bg">git push -u origin master</span>
                    </p>
                    <p>
                        <strong>常见问题</strong><br>
                        <span class="im-2"></span>
                        <span>原因：本地和远程的文件应该合并后才能上传本地的新文件</span>
                    </p>
                    <p>
                        <strong>解决:</strong><br>
                        <span>拉取合并master代码</span><br>
                        <span>git pull --rebase origin master</span><br>
                        <span>然后再提交：git push -u origin master</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- vue中使用vue-video-player -->
        <div class="list-con w1000" id="list-con" v-if="index == 'vue-4'">
            <div class="content">
                <div class="part">
                    <label>vue-video-player的使用总结</label>
                    <p>首先 npm install vue-video-player -S;</p>
                    <p>在main.js进行配置：</p>
                    <p><img src="../assets/image/37.png" alt=""><br><img src="../assets/image/38.png" alt=""></p>
                    <p>在组件中使用</p>
                    <p><img src="../assets/image/39.png" alt=""></p>
                    <p>常用参数：</p>
                    <p><img src="../assets/image/40.png" alt=""><br><img src="../assets/image/41.png" alt=""></p>
                </div>
            </div>
        </div>
        <!-- Vue解决接口访问跨域问题 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'vue-5'">
            <div class="content">
                <div class="part">
                    <label>Vue解决接口访问跨域问题</label>
                    <p>Vue解决跨域问题的原理就是代理，具体操作如下</p>
                    <p>1.打开 config -> index.js</p>
                    <p>2.找到proxyTable</p>
                    <p>3.粘贴 如下代码，'https://www.baidu.com' 换成要访问的的api域名，记住是域名，不是整个api地址。代码（效果图）如下</p>
                    <p><img src="../assets/image/42.png" alt=""></p>
                    <p>配置如下（方便复制粘贴）</p>
                    <!-- <p><img src="../assets/image/43.png" alt=""></p> -->
                    <pre v-highlight>
                        <code class="lang-javascript">
                            dev: {
                                env: require('./dev.env'),
                                port: 8080,
                                autoOpenBrowser: true,
                                assetsSubDirectory: 'static',
                                assetsPublicPath: '/',
                                proxyTable: {
                                    '/api':{
                                        target:"https://www.baidu.com/",//这里设置你要访问的域名（或IP+端口）
                                        changeOrigin:true,
                                        pathRewrite:{
                                            '^/base_api':''//base_api是自定义用来代替http://www.baidu.com/的
                                        }
                                    }
                                }
                            }
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <!-- js类 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'js-1'">
            <div class="content">
                <div class="part">
                    <label>js 中的类</label>
                    <p>ES5 中定义一个类</p>
                    <p><img src="../assets/image/9.png" alt=""></p>
                    <p>ES6以后的语法（可以看做是ES5的语法糖）</p>
                    <p><img src="../assets/image/10.png" alt=""></p>
                    <p>ES6 的类，完全可以看作构造函数的另一种写法。</p>
                    <p><img src="../assets/image/11.png" alt=""></p>
                    <p>上面代码表明，<strong>类的数据类型就是函数，类本身就指向构造函数。</strong></p>
                </div>
                <div class="part">
                    <label>ES6 需要注意的点</label>
                    <p>1.类的内部所有定义的方法，都是不可枚举的（non-enumerable）。 ES5 的写法，prototype上的方法就是可枚举的。</p>
                    <p>2.2.类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。</p>
                    <p><img src="../assets/image/12.png" alt=""></p>
                    <p>prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。</p>
                    <p>3.类和模块的内部，默认就是严格模式</p>
                    <p>4.constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。</p>
                    <p><img src="../assets/image/13.png" alt=""></p>
                    <p>上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。</p>
                    <p>5.类不存在变量提升（hoist），这一点与 ES5 完全不同。</p>
                </div>
            </div>
        </div>
        <div class="list-con w1000" id="list-con" v-if="index == 'js-2'">
            <div class="content">
                <div class="part">
                    <label>promise应用</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            //乘法运算方法
                            multiply(input) {
                                return new Promise(function (resolve, reject) {
                                    console.log('记录：', input +'*'+ input +' = '+ input * input)
                                    setTimeout(resolve, 500, input * input);
                                });
                            },

                            // 0.5秒后返回input+input的计算结果:
                            //加法运算方法
                            add(input) {
                                return new Promise(function (resolve, reject) {
                                    console.log('记录：', input +'+'+ input +' = '+ (input + input))
                                    setTimeout(resolve, 500, input + input);
                                });
                            },

                            var p = new Promise(function (resolve, reject) {
                                console.log('start new Promise...');
                                resolve(3);
                            });

                            p.then(this.multiply)//结果9
                            .then(this.add)//结果18
                            .then(this.multiply)//结果324
                            .then(this.add)//结果648
                            .then(function (result) {
                                console.log('Got value:' + result)//最终结果648
                            });
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="list-con w1000" id="list-con" v-if="index == 'js-3'">
            <div class="content">
                <div class="part">
                    <label>1.安装highlight.js</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            npm install highlight.js;
                        </code>
                    </pre>
                    <label>2.在main.js中引入highlight.js</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            import hljs from 'highlight.js';
                            import 'highlight.js/styles/atom-one-dark.css';	//样式
                        </code>
                    </pre>
                    <label>3.在main.js中自定义指令</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            Vue.directive('highlight',function (el) {
                                let blocks = el.querySelectorAll('pre code');
                                blocks.forEach((block)=>{
                                    hljs.highlightBlock(block)
                                })
                            })
                        </code>
                    </pre>
                    <label>4.在需要高亮内容标签使用v-highlight</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            div
                                pre v-highlight
                                    code class="lang-javascript"
                                        {{codeText}}
                                    /code
                                /pre
                            /div
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="list-con w1000" id="list-con" v-if="index == 'js-5'">
            <div class="content">
                <div class="part">
                    <label>JS如何判断滚动条是否滚到底部</label>
                    <p>判断滚动条到底部，需要用到DOM的三个属性值，即scrollTop、clientHeight、scrollHeight。</p>
                    <p>scrollTop为滚动条在Y轴上的滚动距离。</p>
                    <p>clientHeight为内容可视区域的高度。</p>
                    <p>scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。</p>
                    <p>从这个三个属性的介绍就可以看出来，滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight。</p>
                    <p>代码如下（兼容不同的浏览器）。</p>
                    <p>let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;</p>
                    <p>let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;</p>
                    <p>let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;</p>
                    <p>避免没有数据的时候 重复执行 scrollHeight > clientHeight </p>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
                                this.loadmore();
                            }
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <!-- 微信小程序 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'wx-1'">
            <div class="content">
                <div class="part">
                    <label>封装代码</label>
                    <p><img src="../assets/image/14.png" alt=""><img src="../assets/image/15.png" alt=""></p>
                </div>
                <div class="part">
                    <label>使用方法</label>
                    <p><span>在app.js中引入：</span><br><img src="../assets/image/16.png" alt=""></p>
                    <p><span>然后在要使用的页面里引入使用即可：</span><br><img src="../assets/image/17.png" alt=""></p>
                    <p>使用方法：</p>
                    <p>Get请求就是：<span style="color: #c7254e">ajax.getRequest(url: String, data: Object);</span></p>
                    <p>Post请求就是：<span style="color: #c7254e">ajax.postRequest(url: String, data: Object);</span></p>
                    <p><strong>参考页面：</strong><a style="color: #0681d0" href="https://juejin.im/post/5b050e5651882542816aabfa" target="_blank">封装wx.request</a></p>
                </div>
            </div>
        </div>
        <div class="list-con w1000" id="list-con" v-if="index == 'wx-2'">
            <div class="content">
                <div class="part">
                    <label>1.wxml</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            view class="content"
                                block wx:key="{{img}}" wx:for="{{img}}"
                                    view class="pic-list"
                                    //listIndex大于item.index时，图片显示
                                    image src="{{ listIndex > index ? item : '' }}" class="pic {{listIndex > index ?'Action':''}}" mode="widthFix" 
                                    /view
                                /block
                            /view
                        </code>
                    </pre>
                    <label>2.wxss</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            page {
                                background: #fff;
                            }
                            .pic-list {
                                width: 100vw;
                                background: #efeff4;
                                margin: 3vw 0;
                            }
                            .pic {
                                width: 100%;
                                display: block;
                                opacity: 0;
                                transition: opacity 0.3s linear 0.3s;
                            }
                            .Action {
                                opacity: 1;
                            }
                        </code>
                    </pre>
                    <label>3.js</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            onShow: function () {
                                //获取屏幕尺寸
                                const screenWidth = wx.getSystemInfoSync().windowWidth
                                const screenHeight = wx.getSystemInfoSync().windowHeight
                                this.setData({
                                    //获取页面初始状态图片数量，0.63为图片容器的高度值(63vw)，将代码中0.63改为你的容器对应高度
                                    listIndex: screenHeight / (screenWidth * 0.63),
                                    screenWidth: screenWidth,
                                    screenHeight: screenHeight
                                })
                            },
                            // 滚动事件 
                            onPageScroll(e) { 
                                //滚动距离+屏幕高度换算vw倍数
                                let listIndex = (e.scrollTop + this.data.screenHeight) / (this.data.screenWidth * 0.63)
                                this.setData({
                                    listIndex: listIndex
                                })
                            }
                        </code>
                    </pre>
                </div>
            </div>
        </div>

        <!-- 前端对象分类 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'ht-1'">
            <div class="content">
                <div class="part">
                    <label>JavaScript 对象（JS对象）</label>
                    <p>
                        <ul>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-array.html">JavaScript Array 对象☞</a><br><img src="../assets/image/18.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-boolean.html">JavaScript Boolean 对象☞</a><br><img src="../assets/image/19.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-date.html">JavaScript Date 对象☞</a><br><img src="../assets/image/20.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-math.html">JavaScript Math 对象☞</a><br><img src="../assets/image/21.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-number.html">JavaScript Number 对象☞</a><br><img src="../assets/image/22.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-string.html">JavaScript String 对象☞</a><br><img src="../assets/image/23.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-regexp.html">JavaScript RegExp 对象☞</a><br><img src="../assets/image/24.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-global.html">JavaScript 全局属性/函数☞</a><br><img src="../assets/image/25.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-operators.html">JavaScript 运算符☞</a><br><img src="../assets/image/26.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/jsref-obj-error.html">JavaScript Error☞</a><br><img src="../assets/image/27.png" alt=""></li>
                        </ul>
                    </p>
                </div>
                <div class="part">
                    <label>Browser 对象（浏览器对象）</label>
                    <p>
                        <ul>
                            <li><a href="https://www.runoob.com/jsref/obj-window.html">Window 对象☞</a><br><img src="../assets/image/28.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/obj-navigator.html">Navigator 对象☞</a><br><img src="../assets/image/29.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/obj-screen.html">Screen 对象☞</a><br><img src="../assets/image/30.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/obj-history.html">History 对象☞</a><br><img src="../assets/image/31.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/obj-location.html">Location 对象☞</a><br><img src="../assets/image/32.png" alt=""></li>
                            <li><a href="https://www.runoob.com/jsref/obj-storage.html">存储对象☞</a><br><img src="../assets/image/33.png" alt=""></li>
                        </ul>
                    </p>
                </div>
                <div class="part">
                    <label>Dom 对象（dom对象）</label>
                    <p>
                        <ul>
                            <li><a href="">HTML DOM Document 对象☞</a></li>
                            <li><a href="">HTML DOM 元素对象☞</a></li>
                            <li><a href="">HTML DOM 属性对象☞</a></li>
                            <li><a href="">HTML DOM 事件对象☞</a></li>
                            <li><a href="">HTML DOM Console 对象☞</a></li>
                            <li><a href="">CSSStyleDeclaration 对象☞</a></li>
                            <li><a href="">DOM HTMLCollection☞</a></li>
                        </ul>
                    </p>
                </div>
                <div class="part">
                    <label>HTML 对象（html对象）</label>
                    <p>
                        <ul>
                            <li><a href="">a标签</a></li>
                            <li><a href="">div标签</a></li>
                            <li><a href="">button标签</a></li>
                            <li><a href="">form 标签</a></li>
                            <li><a href="">img 标签</a></li>
                            <li><a href="">body 标签</a></li>
                            <li><a href="">各标签等.....</a></li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        <!-- 视频 -->
        <div class="list-con w1000 mobile" id="list-con" v-if="index == 'm-1'">
            <video-player class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @ready="playerReadied">
            </video-player>
        </div>
        <!-- css样式 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'cs-1'">
            <div class="content">
                <div class="part">
                    <label>transform语法</label>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            /* Keyword values 关键字值 */
                            transform: none;

                            /* Function values 函数值 */
                            transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
                            transform: translate(12px, 50%);
                            transform: translateX(2em);
                            transform: translateY(3in);
                            transform: scale(2, 0.5);
                            transform: scaleX(2);
                            transform: scaleY(0.5);
                            transform: rotate(0.5turn);
                            transform: skew(30deg, 20deg);
                            transform: skewX(30deg);
                            transform: skewY(1.07rad);
                            transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);
                            transform: translate3d(12px, 50%, 3em);
                            transform: translateZ(2px);
                            transform: scale3d(2.5, 1.2, 0.3);
                            transform: scaleZ(0.3);
                            transform: rotate3d(1, 2.0, 3.0, 10deg);
                            transform: rotateX(10deg);
                            transform: rotateY(10deg);
                            transform: rotateZ(10deg);
                            transform: perspective(17px);

                            /* Multiple function values 多个函数值 */
                            transform: translateX(10px) rotate(10deg) translateY(5px);

                            /* Global values */
                            transform: inherit;
                            transform: initial;
                            transform: unset;
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div class="list-con w1000" id="list-con" v-if="index == 'cs-2'">
            <div class="content">
                <div class="part">
                    <label>display: none</label>
                    <p>none 是 CSS 1 就提出来的属性，将元素设置为none的时候既不会占据空间，也无法显示，相当于该元素不存在。</p>
                </div>
                <div class="part">
                    <label>display: inline</label>
                    <p>inline也是 CSS 1 提出的属性，它主要用来设置行内元素属性，设置了该属性之后设置高度、宽度都无效，同时text-align属性设置也无效，但是设置了line-height会让inline元素居中</p>
                </div>
                <div class="part">
                    <label>display: block</label>
                    <p>设置元素为块状元素，如果不指定宽高，默认会继承父元素的宽度，并且独占一行，即使宽度有剩余也会独占一行，高度一般以子元素撑开的高度为准，当然也可以自己设置宽度和高度。</p>
                    <p>在设计的过程中有时需要设计一个div宽高都是整个屏幕，整个时候宽度很好设置，可是高度一般很难设置，因为页面一般都是可以滚动的，所以高度一般可变，所以这个时候可以使用一个小技巧，</p>
                    <p>基本原理：div继承的是父元素body的高度，body是继承html的高度，html是继承的浏览器屏幕的高度。</p>
                </div>
                <div class="part">
                    <label>display: list-item</label>
                    <p>此属性默认会把元素作为列表显示，要完全模仿列表的话还需要加上 list-style-position，list-style-type</p>
                </div>
                <div class="part">
                    <label>display: inline-block</label>
                    <p>inline-block为 CSS 2.1 新增的属性。 inline-block既具有block的宽高特性又具有inline的同行元素特性。 通过inline-block结合text-align: justify 还可以实现固定宽高的列表两端对齐布局</p>
                </div>
                <div class="part">
                    <label>display: table</label>
                    <p>table 此元素会作为块级表格来显示（类似table），表格前后带有换行符。CSS表格能够解决所有那些我们在使用绝对定位和浮动定位进行多列布局时所遇到的问题。例如，display:table的CSS声明能够让一个HTML元素和它的子节点像table元素一样。使用基于表格的CSS布局，使我们能够轻松定义一个单元格的边界、背景等样式， 而不会产生因为使用了table那样的制表标签所导致的语义化问题。</p>
                </div>
                <div class="part">
                    <label>display: flex</label>
                    <p>flex是一种弹性布局属性<br>注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。<br>主要属性有两大类：容器属性和项目的属性</p>
                    <p>容器属性</p>
                    <p>
                        <span>1.flex-direction: 属性决定主轴的方向（即项目的排列方向）。</span><br>
                        <span>2.flex-wrap: 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</span><br>
                        <span>3.flex-flow: 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</span><br>
                        <span>4.justify-content: 属性定义了项目在主轴上的对齐方式。</span><br>
                        <span>5.align-items: 属性定义项目在交叉轴上如何对齐。</span><br>
                        <span>6.align-content: 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</span>
                    </p>
                    <p>项目属性</p>
                    <p>
                        <span>1.order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0</span><br>
                        <span>2.flex-grow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</span><br>
                        <span>3.flex-shrink: 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</span><br>
                        <span>4.flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（mainsize）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</span><br>
                        <span>5.flex: 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</span><br>
                        <span>6.align-self:属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</span>
                    </p>
                </div>
                <div class="part">
                    <label>display: -webkit-box</label>
                    <p>容器属性</p>
                    <p>
                        <span>1.display: box 该显示样式的新值可将此元素及其直系子代加入弹性框模型中。Flexbox 模型只适用于直系子代。</span><br>
                        <span>2.box-orient 值：horizontal | vertical | inherit框的子代是如何排列的？还有两个值：inline-axis（真正的默认值）和 block-axis，但是它们分别映射到水平和垂直方向。</span><br>
                        <span>3.box-pack 值：start | end | center | justify 设置沿 box-orient轴的框排列方式。因此，如果 box-orient 是水平方向，就会选择框的子代的水平排列方式，反之亦然。</span><br>
                        <span>4.box-align 值：start | end | center | baseline | stretch 基本上而言是 box-pack的同级属性。设置框的子代在框中的排列方式。如果方向是水平的，该属性就会决定垂直排列，反之亦然。</span>
                    </p>
                    <p>项目属性</p>
                    <p>
                        <span>1.box-flex 值：0 | 任意整数 该子代的弹性比。弹性比为 1 的子代占据父代框的空间是弹性比为 2 的同级属性的两倍。其默认值为0，也就是不具有弹性。</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 搞机 -->
        <div class="list-con w1000" id="list-con" v-if="index == 'xn-1'">
            <div class="content">
                <div class="part">
                    <label>1.新建虚拟机</label>
                    <p>在virtualbox主界面下选择新建一个虚拟机，直接进入专家模式，按照下图。设置电脑的名称和类型，在此我设置的是“MacOS 10.12”，大家要记住这里设置的名字，因为后面会用得到。然后设置系统的内存大小，在此我设的是4096，因为我的总内存有8G，大伙自己看着办就好，但是建议不要小于2048。然后选择虚拟硬盘，直接选择从我百度网盘上下载的镜像文件即可。</p>
                    <p><img src="../assets/image/xn-1.jpg" alt=""></p>
                </div>
                <div class="part">
                    <label>2.虚拟电脑设置</label>
                    <p>虚拟电脑创建成功后，不要急着启动，先进行一些设置。打开虚拟机的设置页面，进行如下设置：</p>
                    <p><img src="../assets/image/xn-2.jpg" alt=""></p>
                    <p>去除软驱</p>
                    <p><img src="../assets/image/xn-3.jpg" alt=""></p>
                    <p>设置CPU个数</p>
                    <p><img src="../assets/image/xn-4.jpg" alt=""></p>
                    <p>设置显示参数</p>
                    <p>到此，点击OK保存设置，关闭virtualbox软件。</p>
                </div>
                <div class="part">
                    <label>3.环境参数设置</label>
                    <p>以管理员身份运行命令提示符（cmd），然后依次输入以下命令：</p>
                    <pre v-highlight>
                        <code class="lang-javascript">
                            cd "C:\Program Files\Oracle\VirtualBox\" 

                            VBoxManage.exe modifyvm "MacOS 10.12" --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
                            VBoxManage setextradata "MacOS 10.12" "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac11,3"
                            VBoxManage setextradata "MacOS 10.12" "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
                            VBoxManage setextradata "MacOS 10.12" "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
                            VBoxManage setextradata "MacOS 10.12" "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
                            VBoxManage setextradata "MacOS 10.12" "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
                            <!-- 修改分辨率 -->
                            VBoxManage setextradata "MacOS 10.12" CustomVideoMode1 1600x900x32
                            VBoxManage setextradata "MacOS 10.12" VBoxInternal2/EfiGraphicsResolution 1600x900
                        </code>
                    </pre>
                    <p>每条指令输入之后，运行成功的话，不会给出任何提示。如果收到了错误的提示，则说明你的指令输入错误。</p>
                    <p><img src="../assets/image/xn-5.jpg" alt=""></p>
                    <p>这里要注意的一点是，上面的”MacOS 10.12”表示的就是之前所建立的虚拟 电脑的名称。必须与你自己所输入的名称一致。如果你的名字不是这个，那就要改成你自己的名字。</p>
                    <p>输入完毕后，打开虚拟机，启动创建的虚拟机，出现下面的界面。</p>
                    <p><img src="../assets/image/xn-5.jpg" alt=""></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myHead from '../components/header';

import { Make } from "../assets/js/index";

import "vue-video-player/src/custom-theme.css";
// videojs
import videojs from 'video.js'
window.videojs = videojs
// hls plugin for videojs6
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
export default {
    props: {

    },
    data() {
        return {
            index: '',
            arrColor: ['#FF0000','#FF7F00','#FFFF00','#00FF00','#00FFFF','#0000FF','#8B00FF'],
            n: 0,
            timer: '',
            title: '',
            playerOptions: {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: true, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    withCredentials: false,
                    type: "application/x-mpegURL",
                    src: this.$route.query.url
                }],
                poster: "http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                },
            }

        };
    },
    //是在DOM执行完成后立马执行（如：赋值）
    computed: {
        a: '1'
        
    },
    //执行时挂载阶段还没有开始，模版还没有渲染成html，所以无法获取元素。created钩子函数主要用来初始化数据。
    created() {

    },
    //一般用来向后端发起请求，拿到数据后做一些业务处理。该函数在模版渲染完成后才被调用。DOM操作一般是在mounted钩子函数中进行。
    mounted() {
        this.followDoctor()
        
        this.index = this.$route.query.index
        console.log('获取路由传递过来的参数',this.$route.query.index)
        console.log('获取路由传递过来的参数',this.$route.query.title)
        console.log('数组',this.arrColor[1])
        console.log('数组长度',this.arrColor.length)
        console.log('获取Vuex中的数据',this.$store.state.count)
        console.log('获取Vuex中的数据',this.$store.getters.doneTodos)
        console.log('computed执行',this.a)

        // this.timer = setInterval(() => {
        //     if(this.n == this.arrColor.length) {
        //         this.n = 0
        //     }
        //     // document.getElementById('top-head').style.background = this.arrColor[this.n]
        //     document.getElementById('list-con').style.borderColor = this.arrColor[this.n]
        //     this.n++
        // }, 2500);
    },
    //组件销毁之前执行
    beforeDestroy() {
        //清除定时器
        clearInterval(this.timer)
    },
    //用于检测vue实例上数据的变动
    //默认加载的时候先computed再watch，不执行methods；等触发某一事件后，则是：先methods再watch。
    watch: {
    
    },
    //方法有一定的触发条件，如click等。
    //所有方法都应该在methods里定义，在mounted或created里面使用this调用，用这种方法实现初始化。
    methods: {
        //改变更新Vuex中的状态数据
        changeStatus() {
            this.$store.commit('increment','改变之后的状态')
        },
        playerReadied(player) {
            var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
            player.tech_.hls.xhr.beforeRequest = function(options) {
                // console.log(options)
                return options
            }
        },

        //调用api示例
        followDoctor() {
            //请求接口基础写法
            this.$ajax.get('/api/KZCDBasice/GetAllMagazinePhoto',{       // 还可以直接把参数拼接在url后边
                params:{
                    id: 136
                }
            }).then(function(res){
                console.log('数据',res)
            }).catch(function (error) {
                console.log(error);
            });

            /* 封装接口调用方式 */
            let parames = {
                id: 137
            };
            Make.followDoctor(parames).then(res => {
                console.log('接口返回数据',res)
                console.log('后台返回数据',res.data)
            });
        },

    },
    components: {
        myHead,
    },
};
</script>

<style scoped>
.list-con {background: #ffffff;box-sizing: border-box;padding: 30px;border-radius: 25px;}
.title {font-size: 20px;font-weight: bold;color: #ffffff;text-align: center;background: #21292f;height: 50px;line-height: 50px;margin-bottom: 15px;border-bottom-left-radius: 45px;border-top-right-radius: 45px;}

.hljs {font-size: 14px;font-family: "Source Code Pro","DejaVu Sans Mono","Ubuntu Mono","Anonymous Pro","Droid Sans Mono","PingFang SC","Microsoft YaHei";background: #f2f2f2;}
pre {margin: 0;display: grid;}

#top-head {background: #21292f;text-align: center;height: 300px;margin-bottom: 30px;line-height: 300px;}
#top-head .img {display: inline-block;margin-top: 20px;}

.content p {line-height: 24px;margin: 8px 0;font-size: 14px;}
.content .part {margin-bottom: 20px;background: #ffffff;padding: 10px;}
.content .part:last-child {margin-bottom: 0;}
.content .part label {display: inline-block;padding-bottom: 10px;border-bottom: 1px solid #cccccc;width: 100%;font-size: 18px;
font-weight: bold;}
.content .part p.p span {display: block}
.content .part p.p span.bg {background: #eef0f4;padding: 10px 20px;font-size: 15px;color: #666666;}
.content .part p span.img {display: block;width: 733px;height: 437px; background: url('../assets/image/1.jpg')no-repeat center;background-size: 100% 100%;}
.content .part p img {width: 100%;}
.content .part p li {margin-bottom: 20px;}
.content .part p li:last-child {margin-bottom: 0;}
.content .part p li a {font-size: 16px;color: #64854c;font-weight: bold;}
.content .part p li img {border: 1px solid #d4d4d4;}
.content .part .im-1 {display: block;width: 661px;height: 350px; background: url('../assets/image/7.jpg')no-repeat center;background-size: 100% 100%;}
.content .part .im-2 {display: block;width: 399px;height: 257px; background: url('../assets/image/8.jpg')no-repeat center;background-size: 100% 100%;}
@media screen and (max-width:640px){
    .list-con {background: #ffffff;box-sizing: border-box;padding: .3rem;}
    .mobile {padding: .18rem .15rem!important;}
    .w1000 {width: 100%;}
    .content p {line-height: .46rem;margin: .3rem 0;font-size: .28rem;}
    .content .part {margin-bottom: .2rem;background: #ffffff;padding: .1rem;}
    .content .part label {display: inline-block;padding-bottom: .1rem;border-bottom: 1px solid #cccccc;width: 100%;font-size: .36rem;
    font-weight: bold;}
    .content .part img {width: 100%;}
    .content .part p.p span.bg {background: #eef0f4;padding: .2rem .4rem;font-size: .3rem;color: #666666;}
    .content .part p span.img {width: 100%;height: 4.37rem;}
    .content .part .im-1 {width: 100%;height: 3.50rem;}
    .content .part .im-2 {width: 3.99rem;height: 2.57rem;}
    #top-head {height: 3rem;margin-bottom: .3rem;line-height: 3rem;}
    #top-head .img {margin-top: .2rem;width: 2.56rem;height: 2.56rem;}
    #top-head .img img {width: 100%;height: 100%;}
    .title {font-size: .3rem;height: .5rem;line-height: .5rem;margin-bottom: .3rem;border-bottom-left-radius: .45rem;border-top-right-radius: .45rem;}
}
</style>

