<template>
  <div>
    <div class="form-box">
      <mt-field label="用户名" :state="usernameState" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" :state="passwordState" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" :state="checkpassState" placeholder="请再次输入密码" type="password" v-model="checkpass"></mt-field>
      <mt-button type="primary" size="large" @click="submitForm">注册</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      checkpass:'',
      usernameState: '',
      passwordState: '',
      checkpassState: ''
    };
  },
  computed: {},
  created() {},
  mounted() {
      if (this.$route.query.userNmae) {
        this.ruleForm.name = this.$route.query.userNmae
      }
  },
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

      if (this.checkpass == '') {
        this.checkpassState = 'warning'
        return false
      } else {
        this.checkpassState = 'success'
      }

      this.$ajax.get(
        "http://47.107.115.52:80/register?user_name=" +
          this.username +
          "&pwd=" +
          this.password
      ).then((res) => {
        console.log("请求成功", res);
        if (res.status == 200) {
          this.$router.push({path: '/login', query: {userNmae: this.username}});
        }
      }).catch((error) => {
        console.log('error', error);
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.form-box {width: 100%;box-sizing: border-box;padding: 0.8rem 0.1rem;}
</style>