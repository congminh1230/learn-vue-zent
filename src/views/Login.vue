<template>
 <div class="content">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
   <el-form-item label="Name">
    <el-input type="name" v-model="name" autocomplete="off"></el-input>
    <span class="span" >{{errorName}}</span>
  </el-form-item>
  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="pass" autocomplete="off"></el-input>
    <span class="span" >{{errorPassword}}</span>
  </el-form-item>
  <el-form-item >
      <el-link type="primary">Quên mật khẩu ?</el-link>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleForm)">Submit</el-button>
    <el-button @click="resetForm(formName)">Reset</el-button>
  </el-form-item>
</el-form>
 </div>

</template>

<script>
export default {
    name:'LoginFrom',
    data() {
      return {
          pass: '',
          checkPass: '',
          age: '',
          name:'',
          errorName:'',
          errorPassword:''
      };
    },
    methods: {
      submitForm() {
        if(this.validate()) {
          console.log('1')
        }
      },
      resetForm() {
        this.name = ''
        this.pass = ''
        this.errorName = ''
        this.errorPassword = ''
      },
      validate() {
          let error = false
          if(this.name.length == 0) {
              error = true
              this.errorName = 'Tên không được bỏ trống'
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
      }
    },
    watch: {
        name() {
          this.errorName = ''
        },
        pass() {
          this.errorPassword = ''
        }
    }
  }
</script>
<style>
.content {
    background-color: white;
    padding: 53px 70px 16px 0px;
    border-radius: 13px;
}
body {
    background-color:#409EFF;
}
.el-form-item__content {
    text-align: end;
    line-height: 20px;
    color:#409EFF;
    width: 300px;
    text-align: left;
}
.span {
  color:red;
}


</style>