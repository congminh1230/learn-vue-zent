<template>
  <div class="container">
    <div class="loginWrap">
          <div class="inputWrap">
        <div class="inputLabel" >Tên đăng nhập</div>
        <input type="text" name="name" v-model="names">
      </div>
      <div class="inputWrap">
        <div class="inputLabel">Mật khẩu</div>
        <input type="password" name="password"  v-model="password" >
      </div>
      <button type="submit" @click="save()" class="loginButton">Đăng nhập</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LoginFormNext',
  data() {
    return {
      names:'',
      password: ''
      
    }
  },
  methods: {
       save: function (){
        let data = {
          names: this.names,
          password: this.password
        }
         this.$emit('save', data);
      }
  }
}

</script>

<style scoped lang="scss" >
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .loginWrap {
      background: #f5f5f5;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 500px;

      .inputWrap {
        margin-bottom: 12px;
  
        .inputLabel {
          font-weight: bold;
          margin-bottom: 8px;
          text-align: left;
        }
    
        input {
          width: 292px;
          height: 30px;
        }
      }
  
      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin-top: 20px;
        background: #0080dd;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }
    }

    .infoWrap {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;

      .infoLabel {
        font-weight: bold;
        color: #00AAAA;
      }
    }
  }
</style>