<template>
  <div id="Test">
    <LoginFormNext @save="save"/>
    <LoginForm :names="names" :password="password" />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import LoginFormNext from './LoginFormNext.vue';
export default {
  data() {
    return {
      names:'',
      password: '',
    }
  },
  components: {
    LoginForm,
    LoginFormNext
  },
  methods: {
    save(data) {
       this.names = data.names,
       this.password = data.password
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
