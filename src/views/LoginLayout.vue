<template>
 <div class="main">
  <div class="loginLayout">
    
    <div class="content">
      <img style="width: 100px;" src="../assets/logoflixgo.png"/>
      <h2>Đăng ký</h2>
    <el-form :model="email" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
  >
    <el-input placeholder="Email" v-model="emailRegister"></el-input>
    <span class="span" >{{errorEmailRegister}}</span>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input type="password" v-model="passRegister" placeholder="Mật khẩu" autocomplete="off"></el-input>
    <span class="span" >{{errorPassRegister}}</span>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input type="password" v-model="passRepeat" placeholder="Xác nhận mật khẩu" autocomplete="off"></el-input>
    <span class="span" >{{errorPassRepeat}}</span>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitRegister()">Đăng ký</el-button>
  </el-form-item>
</el-form>
    </div>
 </div>
 <div class="loginLayout">
    
    <div class="content">
      <img style="width: 100px;" src="../assets/logoflixgo.png"/>
      <h2>Đăng nhập</h2>
    <el-form :model="email" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
  >
    <el-input placeholder="Email" v-model="email"></el-input>
    <span class="span" >{{errorEmail}}</span>
  </el-form-item>
  <el-form-item prop="pass">
    <el-input type="password" v-model="pass" placeholder="Mật khẩu" autocomplete="off"></el-input>
    <span class="span" >{{errorPassword}}</span>
  </el-form-item>
  <el-form-item >
      <el-link type="primary"><router-link to="/reset/password">Quên mật khẩu ?</router-link></el-link>
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
        passRepeat:'',
        emailRegister:'',
        errorEmailRegister:'',
        errorPassRepeat:'',
        errorPassRegister:'',
        passRegister:'',
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
            this.$router.push('/')
          }
      },
      submitRegister() {
          if(this.validateRegister()) {
            this.$router.push('/login')
          }
      },
      validate() {
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
          if(this.pass.length == 0) {
              error = true
              this.errorPassword = 'Mật khẩu không được bỏ trống'
          }
          if(this.pass.length < 7) {
              error = true
              this.errorPassword = 'Mật khẩu phải lớn hơn 8 kí tự'
          }
          return !error
      },
      validateRegister() {
              let error = false 
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(this.emailRegister.length == 0) {
                error = true
                this.errorEmailRegister = 'Email không được bỏ trống'
            }else if(!this.emailRegister.match(validRegex)){
                error = true
                this.errorEmailRegister = 'Email không đúng định dạng'
            }
            if(this.passRegister.length == 0) {
                error = true
                this.errorPassRegister = 'Mật khẩu không được để trống'
            }else if(this.passRegister.length < 7){
                error = true
                this.errorPassRegister = 'Mật khẩu không được nhỏ hơn 7 kí tự'
            }
            if(this.passRepeat.length == 0) {
                error = true
                this.errorPassRepeat = 'Mật khẩu không được để trống'
            }
            if( this.passRepeat.length > 0 && !(this.passRepeat == this.passRegister)) {
                error = true
                this.errorPassRepeat = 'Mật khẩu không trùng khớp'
            }
            
            
            return !error
      }
      
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
    text-align: initial;
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
display: flex;
    justify-content: space-around;
}

</style>