<template>
   <BaseLayout>
        <template #header>
            <img  class="img" :src="banner"/>
        </template>
        <template #imgaes>
             <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in img" :key="index">
                    <el-image :src="item.image" class="image-carousel"></el-image>
                </el-carousel-item>
            </el-carousel>
        </template>
        <template #content>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item >Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">Điện thoại</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="content">
                    <img class="imgTocchien loaded"
                         src="https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/thuydung/2021_03_09/7/he-lo-hinh-anh-iphone-13-khong-cong-vat-ly-dep-quen-sau.png"
                         alt="">
                <p style="padding: 20px 89px;" >Khi so sánh với dòng iPhone 13, giá bán trung bình của dòng iPhone 14 sẽ tăng lên đáng kể, bởi iPhone 13 bao gồm cả mẫu iPhone 13 mini có giá khởi điểm 699 USD. Nếu muốn mua tất cả các phiên bản iPhone 2021, người dùng cần 3,596 USD, tuy nhiên với thế hệ iPhone 14, người dùng sẽ cần bỏ ra số tiền lên đến 3,996 USD.</p>
            </div>
        </template>
   </BaseLayout>
</template>
<script>
import BaseLayout from './BaseLayout.vue'
export default {
  name: 'NewsDetailPage',
  components: {
    BaseLayout
  },
  data() {
   return {
    banner:'https://img1.kienthucvui.vn/uploads/2021/05/28/hinh-anh-du-khach-lan-duoi-bien-o-nha-trang_104227701.jpg',
    img : [
        {
            image:'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg'
        },
        {
            image:'https://i.pinimg.com/originals/85/c8/38/85c8384e9082008d1129fc8f73d65954.jpg'
        },
        {
            image:'https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg'
        }
    ],
   }
  }
}

</script>

<style>
.img {
    height: 200px !important;
    object-fit: cover !important;
    width: 100%;
}
</style>
