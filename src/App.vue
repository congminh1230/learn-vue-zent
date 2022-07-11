<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- <LoginForm/> -->
    <!-- <LoginFormNext/> -->
    <!-- <CalculatorNew/>  -->
    <!-- <ArrayNew/> -->
    <!-- <PostProduct/> -->
    <!-- <TestFrom/> -->
    <!-- <TestOne/> -->
    <ToDoList/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import LoginForm from './components/LoginForm.vue';
// import TestFrom from './components/TestFrom.vue';
// import LoginFormNext from './components/LoginFormNext.vue';
// import CalculatorNew from './components/CalculatorNew.vue'
// import PostProduct from './components/PostProduct.vue'
// import TestOne from './components/TestOne.vue'
import ToDoList from './components/bai3/ToDoList.vue'


export default {
  name: 'App',
  components: {
    // TestOne
    // HelloWorld,
    // PostProductm,
    // LoginForm
    // LoginFormNext,
    // CalculatorNew,
    // ArrayNew
    // TestFrom
    ToDoList
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
