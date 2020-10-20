<template>
    <div>
        <div class="head">
            <div class="w1000">
               <img src="../assets/logo.png" alt="">
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
                        <li @click="route(8)">css</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
.head .nav {background: #379be9;height: .6rem;}
.head .nav ul {height: 100%;display: flex;align-items: center;justify-content: space-between;padding: 0 .2rem;}
.head .nav ul span {color: #666666;font-size: .14rem}
.head .nav li {display: inline-block;width: auto;height: 100%;text-align: center;color: #ffffff;font-weight: bold;font-size: .2rem;cursor: pointer;line-height: .6rem;}
.head .nav li:hover {color: #ff3344;}
</style>
