<template>
  <div>
    <div class="form-box">
      <mt-field label="用户名" :state="usernameState" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" :state="passwordState" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <div class="go-register"><router-link :to ="{path:'/register',query:{index:'m-1'}}">注册</router-link></div>
      <mt-button type="primary" size="large" @click="submitForm">登录</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameState: '',
      passwordState: ''
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    submitForm() {
      if (this.username == '') {
        this.usernameState = 'warning'
        return false
      } else {
        this.usernameState = 'success'
      }

      if (this.password == '') {
        this.passwordState = 'warning'
        return false
      } else {
        this.passwordState = 'success'
      }
      this.$ajax.get(
        "http://47.107.115.52:80/login?user_name=" + this.username + "&pwd=" +
          this.password
      ).then((res) => {
        console.log("用户数据", res);
        if (res.data.name !== this.username) {
          Toast('用户名错误！')
          return false;
        }
        if (res.data.pwd !== this.password) {
          Toast('密码错误！')
          return false;
        }
        if (res.data.name == this.username && res.data.pwd == this.password) {
            this.$router.push({path: '/m_home'});
            console.log('namexinxi',res.data.name)
            sessionStorage.setItem('checkLogin', res.data.name)
        } else {
          Toast(res.data);
        }
      }).catch((error) => {
        console.log(error);
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.form-box {width: 100%;height: 100%;box-sizing: border-box;padding: 0.8rem 0.1rem;}
.form-box .go-register {width: 100%;font-size: .36rem;color: #333333;text-align: right;box-sizing: border-box;padding: .3rem .6rem;}
</style>