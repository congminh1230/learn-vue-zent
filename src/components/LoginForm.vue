<template>
   <div>
         <div class="main">
            <div   class="form">
               <form @submit.prevent="save()">
                  <div class="form-control">
                     <div class="header">Họ và tên</div>
                     <input name="name" type="text" v-model="data.name"/>
                  </div>
                  <div class="form-control">
                     <div class="header" >Ngày sinh</div>
                     <input name="birthday" type="text" v-model="data.birthday"/>
                  </div>
                   <div class="form-control">
                     <div class="header" >Số điện thoại</div>
                     <input name="phone" type="text" v-model="data.phone"/>
                  </div>
                   <div class="form-control">
                     <div class="header" >Link facebook</div>
                     <input name="facebook" type="text" v-model="data.facebook"/>
                  </div>
                  <div class="button">
                     <button type="submit">Đăng Nhập</button>
                  </div>
                  
               </form>
            </div>
            <div class="title">
               <div class="">
                  <h3 >Họ và tên {{dataForm.name}}</h3>
                  <h3>Ngày sinh {{dataForm.birthday}}</h3>
                  <h3>Số điện thoại{{dataForm.phone}}</h3>
                  <a :href="dataForm.facebook">Facebook</a>
               </div>
            </div>
            
         </div>
   </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
      return {
         data: {
            name: '',
            birthday:'',
            phone:'',
            facebook:'',
         },
         dataForm : {
            name: '',
            birthday:'',
            phone:'',
            facebook:'',
         }
      }
  },
  methods: {
      save() {

         // this.name = this.data;
         this.dataForm.name = this.data.name
         this.dataForm.birthday = this.data.birthday
         this.dataForm.phone = this.data.phone
         this.dataForm.facebook = this.data.facebook  
d        }
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
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid;
      width: 311px;

      h3 {
         display: flex;
         align-items: center;
         color: #00AAAA;
      }
   }
}
</style>