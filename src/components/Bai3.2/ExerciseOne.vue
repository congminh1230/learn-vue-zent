<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple content">
        <ProductForm  @ExerciseOne="handleAddProduct" :product="product" />
      </div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple">
        <ProductList @productItemUpdate="handleFillProduct" :item="item"/>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import ProductForm from '../Bai3.2/ProductFrom.vue'
import ProductList from '../Bai3.2/ProductList.vue'

export default {
  name:'ExerciseOne',
  data() {
    return {
      item:'',
      product:''
    }
  },
  components: {
    ProductForm,
    ProductList
  },
  methods: {
    handleAddProduct(value) {
      console.log(value);
      this.item = value
      this.product = ''
    },
    handleFillProduct(value) {
      this.product = value
    }
  }
  
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content {
    padding: 20px 29px;
  }
</style>
