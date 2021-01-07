<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      this.$router.replace(/* '/m_home' */'/login');
    } else {
      // alert("pc端");
      this.$router.replace('/pc_home');
    };
    
    //缓存中没有用户信息，清空登录记录
    if(sessionStorage.getItem('checkLogin') == '') {
      this.$ajax.get(
        "http://47.107.115.52:80/clearLogin"
      ).then((res) => {
        console.log("用户数据", res);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      this.$ajax.get(
        "http://47.107.115.52:80/checkLogin?user_name=" + sessionStorage.getItem('checkLogin')
      ).then((res) => {
        console.log("用户数据", res);
        if (res.data.status == 1) {
          this.$router.push({path: '/m_home'});
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
      
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background: url('./assets/image/bg-27.jpg')no-repeat center; */
  /* background-size: 100% 100%; */
  /* height: 100%; */
}
input,textarea{word-wrap:none;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}
html{-webkit-text-size-adjust:none;overflow-x:hidden}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,form,input,textarea,p,span{padding:0;margin:0;}
body{font:normal 14px/1.5em pbfont,"微软雅黑","宋体","冬青黑体简体中文 w3"; color: #333;background: #ffffff;}
img,html,body{border:0;}
/** 重置表格元素 **/
input{border:0; outline: 0;}
ol,ul{list-style:none;font-size: 0}
em{font-weight:normal;font-style:normal;}
em,i{font-weight:normal;font-style:normal;font-size:100%;}
h1,h2,h3,h4,h5,h6,em{font-weight:normal;}
.clearfix{*zoom:1;}
.clearfix:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0;}
a:hover{text-decoration: none; color:#d7000f;}
img{vertical-align:middle;}
.ellipsis{text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}/* 文本省略 */
.hide,.none{display:none}
.hidden{visibility:hidden;}
.show,.block{display:block;}
.inlineb{display:inline-block;}
.tc{text-align: center;}
.cp{cursor:pointer;}/* 鼠标指针变成手指样式 */
.fl{float:left;}
.fr{float:right;}
.w1000{ width: 1000px; margin: 0 auto; position:relative;}
a {color: #3e4146;text-decoration: none;-webkit-transition: all 0.3s ease;-moz-transition: all 0.3s ease;-o-transition: all 0.3s ease;transition: all 0.3s ease;}/* ease开始和结束慢，中间快 || linear：匀速 || ease-in：加速 || ease-out：减速*/

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color: #a39f9f;}
input:-moz-placeholder, textarea:-moz-placeholder {color:#a39f9f;}
input::-moz-placeholder, textarea::-moz-placeholder {color:#a39f9f;}
input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:#a39f9f;}

.my-gallery {display: flex;align-items: center;flex-wrap: wrap;justify-content: space-between;}
figure {margin: 0;padding: 0;}
figure img {width: 3.3rem;margin-bottom: .3rem;transform:translateZ(0);}
.pswp img {transform:translateZ(0);height: auto!important;}
.pswp__img, .pswp__item {top: -41!important;}

@media screen and (max-width: 321px) {
    body {
        font-size:16px
    }
}

@media screen and (min-width: 321px) and (max-width:400px) {
    body {
        font-size:18px
    }
}

@media screen and (min-width: 400px) and (max-width: 500px) {
    body {
        font-size:20px
    }
}

@media screen and (min-width: 500px) {
    body {
        font-size: 22px;
        max-width: 11rem;
        margin: 0 auto;
    }
}
</style>
