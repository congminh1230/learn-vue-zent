<template>
   <div class="infoWrap">
      <div class="infoLabel">
        Tên:{{ names }}
      </div>
      <div class="infoLabel">
        Mật khẩu:{{ password }}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    names: {
        type:String,
        default: ""
    },
    password: {
        type:String,
        default: ""
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
      width: 300px;

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
<!-- <template>
    <div class="content">
       <form action="">
            <div class="block-1" >
                <div class="name">
                    <input type="text" v-model="name" placeholder="Tên *">
                    <p>{{ error.name }}</p>
                </div>
                <div class="phone">
                    <input type="text" v-model="phone" placeholder="Số điện thoại *">
                    <p>{{ error.phone }}</p>
                </div>   
            </div>   
            <div class="block-2">
                <div class="name">
                    <input type="password" v-model="pass" placeholder="Mật khẩu *">
                    <p>{{ error.pass }}</p>
                </div>           
                <div class="name">
                    <input type="password" v-model="cfPass" placeholder="Nhập lại mật khẩu *">
                    <p>{{ error.cfPass }}</p>
                </div>    
            </div>     
            <div class="btn">
                <a class="sub" @click="sub">Submit</a> 
            </div>       
       </form>
    </div>
</template>

<script>

export default {
    name: "checkForm",
    data() {
        return {
            check: true,
            name:'',
            phone: '',
            pass: '',
            cfPass: '',
            error: {
                name: '',
                phone: '',
                pass: '',
                cfPass: ''
            },
        }
    },
    methods: {
        sub(){
            if(!this.name){
                this.error.name = 'Vui lòng nhập vào trường này!!';
                this.check = false;
            }else{
                this.error.name = ''
            }
            if(!this.phone){
                this.error.phone = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else {
                var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
                let lol = re.test(this.phone);
                if(lol == true) {
                     this.error.phone = '';
                }else {
                    this.error.phone = 'Vui lòng nhập đúng định dạng số điện thoại!!'
                    this.check = false;
                }
            }
            if(!this.pass){
                this.error.pass = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else if(this.pass.length > 8){
                    this.error.pass = '';
            }else {
                this.error.pass = 'Mât khẩu ít nhất 8 kí tự!!'
                    this.check = false;
            }
            if(!this.cfPass){
                this.error.cfPass = 'Vui lòng nhập vào trường này!!'
                this.check = false;
            }else if (this.cfPass !== this.pass) {
                this.error.cfPass = 'Mật khẩu chưa trùng khớp!!'
                this.check = false;
            }else{
                this.error.cfPass = ''
            }
            if (this.check == true) {
                alert('Đăng nhập thành công')
            }
        }
    },
    watch: {
        name(value) {
            if(value.length > 0 ) {
                this.error.name = ''
            }else {
                this.error.name = 'Vui lòng nhập vào trường này!!'
            }
        },
        phone(phone) {
            if(phone.length > 0 ) {
                this.error.phone = ''
            }else {
                this.error.phone = 'Vui lòng nhập vào trường này!!'
            }
        },
        pass(pass) {
            if(pass.length > 0 ) {
                this.error.pass = ''
            }else {
                this.error.pass = 'Vui lòng nhập vào trường này!!'
            }
        },
        cfPass(cfPass) {
            if(cfPass.length > 0 ) {
                this.error.cfPass = ''
            }else {
                this.error.cfPass = 'Vui lòng nhập vào trường này!!'
            }
        }
    },
}
</script>

<style scoped lang="scss">
    .content{
       
        form{
            span{
                color: red;
            }
            p{
                color: red;
            }
            input{
                width: 200px;
                height: 20px;
                float: right;
            }
            button{
                cursor: pointer;
            }
        }
        .block-1 {
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
            gap: 20px;
        }
        .block-2 {
            display: flex;
            justify-content: center;
            gap: 20px;

        }
        input {
            width: 450px !important;
            padding: 15px;
            border-radius: 20px;
            border: 1px solid #c5c3c3;
        }
        .btn {
            margin-top: 30px;
           a {
                background-color: #2f86ff;
                padding: 10px 41px;
                border-radius: 20px;
                color: white;
           }
        }
    }
</style>
 -->
