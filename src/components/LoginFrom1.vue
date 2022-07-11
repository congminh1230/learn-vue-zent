<template>
   <div>
         <div class="main">
           <div class="infoWrap">
             <div class="infoLabel">
               Xin chào
             </div>
             <div class="infoLabel">
               Xin chào
             </div>
           </div>
         </div>
   </div>
</template>

<script>
export default {
  name: 'LoginForm1',
  data() {
    return {
      message: '',
      content: ''
    }
  }
}

</script>

<style scoped lang="scss" >
.main {
   display: flex;
   justify-content: center;
   gap: 50px;
   .form {
      padding: 31px 39px 53px 31px;
      border: 1px solid;
      background: #f5f5f5;
      .form-control {
         
         .header {
            text-align: initial;
            font-weight: 700;
            padding:10px 0;
         }
         input {
            width: 250px;
            padding: 6px 0px;
         }
         .textarea {
           width: 247px;
           height: 200px;
         }
      }
      .button {
         button {
            padding: 10px 57px;
            background-color: #1f9cff;
            border: 0;
            border-radius: 5px;
            margin-top: 30px;
         }
      }
     
   }
    .title {
      border: 2px dashed black;
      width: 311px;

      // h3 {
      //    display: flex;
      //    align-items: center;
      //    color: #00AAAA;
      // }
   }
}
</style>