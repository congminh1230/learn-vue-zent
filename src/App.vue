<template>
  <div id="app">
    <ProDuctIem/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import LoginForm from './components/LoginForm.vue';
// import TestBai1 from './components/bai4/TestBai1.vue';
// import LoginFormNext from './components/LoginFormNext.vue';
// import CalculatorNew from './components/CalculatorNew.vue'
// import PostProduct from './components/PostProduct.vue'
// import TestOne from './components/TestOne.vue'
import ProDuctIem from './components/bai3/ProDuctIem.vue'


export default {
  name: 'App',
  components: {
    ProDuctIem
},
  
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
