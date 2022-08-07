<template>
  <div class="about">
    <h1>{{count}}</h1>
    <button @click="handleClick">hihi</button>
  </div>
</template>

<script>
  import { mapState,mapMutations } from 'vuex'

  export default {
    name: 'testVue1',
    computed: {
      // ...mapGetters([
      //    'test'
      // ])
      ...mapState([
         'count'
      ])
    },
    mounted() {
      console.log(this.$store.getters.getProduct(1))
    },
    methods: {
         ...mapMutations([
         'increase'
      ]),
      handleClick() {
         this.increase(10)
         
      }
    }
  }
</script>