<template>
    <el-container>
        <el-container>
            <el-header>
                <div class="header">
                    <img src=""/>
                </div>
                <div class="user">
                    xin chào
                </div>
                <div class="dropHeader">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          <img :src="url" alt="">
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item ><router-link to="profile">Thông tin tài khoản</router-link></el-dropdown-item>
                            <el-dropdown-item ><router-link to="login">Đăng xuất</router-link></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                 <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
   return {
      url:'https://i.pinimg.com/originals/85/c8/38/85c8384e9082008d1129fc8f73d65954.jpg',
   }
  },
  methods: {
    hanld(data) {
        this.$router.push({ path: data,})
    }
  }
}

</script>

<style scoped lang="scss">
.el-header {
    background-color: #f2f6fe;
    color: #333;
    text-align: left;
    line-height: 60px;
    display: flex;
    padding-right: 0;
    .header {
        width: 50%;
    }
    .user {
        width: 50%;
        text-align: right;
    }
    .dropHeader {
        margin: 0 20px 0 30px;
        text-align: center;
        .el-dropdown {
            height: 60px;
            span {
                img {
                    width: 40px;
                    border-radius: 50%;
                    margin-top: 10px;
                }
            }
        }
    }
}
.el-aside {
    background-color: #001529;
    color: #333;
    text-align: left;
    line-height: 200px;
    height: 94vh;
}
.el-main {
    text-align: left;
}
.el-container {
    height: 800px;
}
.el-badge__content.is-fixed {
    top:10px !important;
}
.item {
    top:10px !important;

}
.el-aside[data-v-ded692e2] {
    height: 120vh;
}
</style>
