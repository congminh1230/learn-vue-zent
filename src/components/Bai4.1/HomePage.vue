<template>
    <el-container>
        <el-aside>
            <el-row>
                <el-menu default-active="2" class="el-menu-vertical" background-color="#001529" text-color="white"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span><router-link to="/" >Tổng quan</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-s-shop"></i>
                        <span><router-link to="product" >Quản lý sản phẩm</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span><router-link to="/order" >Quản lý hóa đơn</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-s-data"></i>
                        <span>Báo cáo thống kê</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Quản lý chi nhánh</span>
                        </template>
                        <el-menu-item-group title="Hoạt động">
                            <el-menu-item index="5-1">Sản phẩm</el-menu-item>
                            <el-menu-item index="5-2">Đơn hàng</el-menu-item>
                            <el-menu-item index="5-3">Khách hàng</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Báo cáo">
                            <el-menu-item index="5-4">Doanh thu</el-menu-item>
                            <el-menu-item index="5-5">Tồn kho</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="6">
                        <i class="el-icon-s-tools"></i>
                        <span>Cài đặt hệ thống</span>
                    </el-menu-item>
                </el-menu>
            </el-row>
        </el-aside>
        <el-container>
            <el-header>
                <div class="header">
                  <slot name="headerTitle"></slot>
                </div>
                <div class="user">
                    <el-badge :value="12" class="item">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                </div>
                <div class="dropHeader">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          <img :src="url" alt="">
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item >Thông tin tài khoản</el-dropdown-item>
                            <el-dropdown-item >Đổi mật khẩu</el-dropdown-item>
                            <el-dropdown-item >Cấu hình</el-dropdown-item>
                            <el-dropdown-item >Đăng xuất</el-dropdown-item>
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
</style>
