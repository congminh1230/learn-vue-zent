<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="Thông tin cá nhân">
      <el-row>
        <el-col :span="12">
            <div class="grid-content bg-purple" style="text-align: center;">
                <img class="img-avatar" src="https://1.bigdata-vn.com/wp-content/uploads/2021/12/Hinh-Nen-Girl-Xinh-Full-HD-Cho-Laptop-Va-May.jpg"/>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light" style="text-align: center;">
                <div class="mainForm" v-loading="loading">
              <div class="inputWarp">
                <label>Tên hiển thị <span class="required">*</span></label>
                <el-input v-model="name"></el-input>
                <div v-if="this.errorName !== '' " class="error">
                  <span> {{ errorName }} </span>
                </div>
              </div>
              <div class="inputWarp">
                <label>Email <span class="required">*</span></label>
                <el-input type="email" v-model="email"></el-input>
                <div v-if="this.errorEmail !== '' " class="error">
                  <span> {{ errorEmail }} </span>
                </div>
              </div>
              <div class="inputWarp">
                <label>Số điện thoại </label>
                <el-input v-model="phone"></el-input>
                <div v-if="this.errorPhone !== '' " class="error">
                  <span> {{ errorPhone }} </span>
                </div>
              </div>
              <div class="inputWarp">
                <label>Địa chỉ</label>
                <el-input type="textarea" :rows="5" v-model="address"></el-input>
                <div v-if="errorAddress !== '' " class="error">
                  <span> {{ errorAddress }} </span>
                </div>
              </div>
            </div>
            <div class="footerForm">
              <el-button type="primary" icon="el-icon-check" @click="handleUpdateInfo">Lưu</el-button>
            </div>
            </div>
        </el-col>
    </el-row>
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
.el-tabs__nav-wrap {
 display: flex;
    justify-content: center;
}
.img-avatar {
 border-radius: 50%;
}
.mainForm {
 width: 500px;
 text-align: initial;
    padding-top: 100px;
}
</style>