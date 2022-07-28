<template>
 <div class="main">
  <div class="loginLayout">
    
    <div class="content">
      <img style="width: 100px;" src="../assets/logoflixgo.png"/>
    <el-form :model="email" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
  >
    <el-input placeholder="Email" v-model="email"></el-input>
    <span class="span" >{{errorEmail}}</span>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">Đăng nhập</el-button>
  </el-form-item>
</el-form>
    </div>
 </div>
 </div>
</template>

<script>
export default {
 name:'LoginLayout',
  data() {
      return {
        pass:'',
        email:'',
        errorEmail:'',
        errorPassword:'',
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm() {
          if(this.validate()) {
            alert("thành công")
          }
      },
      validate() {
        console.log(this.email)
          let error = false
           var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(!this.email.match(validRegex)) {
              error = true
              this.errorEmail = 'Email không đúng định dạng'
          }
           if(this.email.length  == 0)  {
              error = true
              this.errorEmail = 'Email không được để trống'
          }
          
          return !error
      },
      
    },
     watch: {
        pass() {
          this.errorPassword = ''
        },
        email() {
          this.errorEmail = ''
        }
    }
}
</script>
<style > 
.loginLayout {
  height: 100vh;
    overflow: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.content {
    background-color: white;
    padding: 52px 37px 19px 34px;
    border-radius: 13px;
}

.el-form-item__content {
    text-align: end;
    line-height: 20px;
    color:#409EFF;
    width: 300px;
    text-align: end;
}
.el-form-item__content {
    margin-left:0 !important ;

}
.span {
  color:red;
}
.el-button {
  width: 100%;
  text-transform: uppercase;
  font-size: 11px;
}
.main {
  width: 100%;
  height: 1000px;
    background-color:#409EFF;

}

</style>