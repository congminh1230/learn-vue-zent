<template>
  <div class="hello">
    <h1>hihihi</h1>
    <button @click="handleReverse" > Click vào reverse  </button>
    <button @click="handleUnshift" > Click vào unshift </button> 
    <button @click="handlePush" > Click vào push  </button>
    <button @click="handleShift" > Click vào shift  </button>
    <button @click="handlePop" > Click vào pop </button> 
    
  </div>
</template>

<script>
export default {
  name: 'ArrayNew',
  props: {
    msg: String
  },
  data() {
    return {
      array1 : ['minh','lien','nam','kjkkkkkkkkkkk','dasdasdasdjkjkjkjkjk'],
      array2 : [5,6,7,8,9],

    }
  },
  methods: {
      // handleConcat() {
      //  let data = this.array1.concat(this.array2)
      //  console.log(data)
      // },
      // handleFilter() {
      //  let data = this.array1.filter(array => array.length >8 )
      //  console.log(data)
      // }
      // handleIncludes() {
      //    let data = this.array1.includes("minh")
      //    console.log(data)
      // }
      // handleJoin() {
      //    let data = this.array1.join('-')
      //    console.log(data)

      // }
      // handleFind() {
      //  let data = this.array1.find(array => array.length > 4)
      //  console.log(data)
      // }
      handlePop() {
       let data = this.array1.pop()
       console.log(data)
       console.log(this.array1)
      },
      handleShift() {
       let data = this.array1.shift()
       console.log(data);
       console.log(this.array1)

      },
      handlePush() {
       let data = this.array1.push("hihi","hahah",'hohoho')
       console.log(data)
       console.log(this.array1)
      },
      handleUnshift() {
          let data = this.array1.unshift("hi")
         console.log(data)
         console.log(this.array1)
      },
      handleReverse() {
       let data = this.array1.reverse();
       console.log(data)
      }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
