<template>
  <div class="content" >
    <el-col :lg="15" :sm="5" class="filter-wrap">
      <el-button
          type="primary"
          plain
          @click="openDialogAddProduct">
        <i class="el-icon-plus"></i> Thêm mới
      </el-button>
      <div >
        <el-input
            v-model="search"
            clearable
            @keydown.enter.native="handleSearch"
            placeholder="Nhập tên sản phẩm"/>
      </div>
    </el-col>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="Date"
          prop="id">
      </el-table-column>
      <el-table-column
          label="Name"
          prop="name"
          v-model="name"
      >
      </el-table-column>
      <el-table-column
          label="Price"
          prop="price"
          v-model="price"
      >
      </el-table-column>
      <el-table-column
          align="right">
        <template slot-scope="tableData">
          <el-button
              size="mini"
              @click="openDialogEditProduct(tableData.row)">Edit</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(tableData.row.id)">Delete</el-button>
        </template>

      </el-table-column>

    </el-table>
    <el-pagination
        small
        layout="prev, pager, next"
        :total="page.total"
        :page-size="page.pageSize"
        :current-page="page.currentPage"
        >
    </el-pagination>
    <el-dialog class="modal-payment" style="text-align: initial;" width="50%" top="5vh" v-loading="loading"
               title="Thêm mới sản phẩm" :visible.sync="dialogAddProduct">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-row>
            <div class="inputWarp">
              <label>Tên sản phẩm <span class="required">*</span> </label>
              <el-input v-model="name">
              </el-input>
                <span class="error" > {{ errorName }} </span>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp">
              <label>Giá sản phẩm  <span class="required">*</span></label>
              <el-input v-model="price">
              </el-input>
                <span class="error"> {{ errorPrice }} </span>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAddProduct= false">Đóng</el-button>
        <el-button type="primary" @click="handleCreateProduct">Tạo mới</el-button>
      </span>
    </el-dialog>
    <el-dialog class="modal-payment" style="text-align: initial;" width="50%" top="5vh" v-loading="loading"
               title="Chỉnh sửa sản phẩm" :visible.sync="dialogEditProduct">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-row>
            <div class="inputWarp">
              <label>Tên sản phẩm <span class="required">*</span> </label>
              <el-input v-model="name">
              </el-input>
              <span class="error" > {{ errorName }} </span>
            </div>
          </el-row>
          <el-row>
            <div class="inputWarp">
              <label>Giá sản phẩm  <span class="required">*</span></label>
              <el-input v-model="price">
              </el-input>
              <span class="error"> {{ errorPrice }} </span>
            </div>
          </el-row>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogEditProduct = false">Đóng</el-button>
        <el-button type="primary" @click="handleEdit">Cập nhật</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import  api from  '../../api/index'
export default {
  data() {
    return {
      tableData: [],
      name:'',
      price:'',
      description:'',
      product_id:'',
      errorName:'',
      errorPrice:'',
      search:'',
      errorDescription:'',
      dialogAddProduct:false,
      dialogEditProduct:false,
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
        from: 0,
        to: 0
      },
    }
  },
  mounted() {
    this.getListProducts()
  },
  methods: {
    getListProducts(params = {}) {
      api.getProducts(params).then((res) => {
        this.tableData = res.data.data.data
        this.page.currentPage = res.data.data.current_page
        this.page.pageSize = res.data.data.per_page
        this.page.total = res.data.data.total

      })

    },
    handleEdit() {
      if(this.validate()) {
        let data = {
          name: this.name,
          price: this.price
        }
        api.editProduct(data,this.product_id).then((res) => {
          console.log(res)
          this.dialogEditProduct = false
          this.getListProducts()
          this.resetFrom()
          this.$message({
            message: 'Thành công',
            type: "success"
          })
        }).catch(error => {
          console.log(error)
          this.$message.error({
            type: 'error',
            message: "Có lỗi xảy ra, vui lòng thử lại sau."
          })
        })
      }
    },
    handleDelete(id) {
      this.$confirm('Dữ liệu không thể phục hồi, Bạn có muốn biếp tục?', 'Cảnh báo', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Đóng',
        type: 'warning'
      }).then(() => {
        api.deleteProduct(id).then( () => {
          this.$message({
            message: 'Thành công',
            type: "success"
          });
          this.getListProducts()
        })
      })
    },
    openDialogAddProduct(){
      this.resetFrom()
      this.dialogAddProduct=true
    },
    openDialogEditProduct(data) {
      this.dialogEditProduct = true
      this.name = data.name
      this.price = data.price
      this.product_id = data.id
    },
    handleSearch() {
      let payload = {
          q: this.search
      }
      this.getListProducts(payload)
    },
    handleCreateProduct() {
      if(this.validate()) {
        let data = {
          name: this.name,
          price: this.price,
        }
        api.addProducts(data).then((res) => {
          console.log(res)
          this.dialogAddProduct = false
          this.getListProducts()
          this.resetFrom()
          this.$message({
            message: 'Thành công',
            type: "success"
          })
        }).catch(error => {
          console.log(error)
          this.$message.error({
            type: 'error',
            message: "Có lỗi xảy ra, vui lòng thử lại sau."
          })
        })
      }
    },
    validate() {
      let error = false
      if(this.name.length === 0) {
          this.error = true
          this.errorName = 'Tên sản phẩm không được bỏ trống'
      }
      if (this.price.length === 0) {
        error = true;
        this.errorPrice = 'Số tiền không được để trống';
      }
      return !error
    },
    resetFrom() {
      this.name = '',
      this.price = '',
      this.description = ''
    },
    resetError() {
      this.errorName = '',
          this.errorPrice = ''
    }
  },
  watch: {
    name() {
      this.errorName = ''
    },
    price() {
      this.errorPrice = ''
    },
    dialogAddProduct() {
      this.resetError()
    },
    dialogEditProduct () {
      this.resetError()
    }

  }
}
</script>
<style scope lang="scss">
.content {
  width: 900px;
  margin: auto;
  text-align: initial;
}
.el-input {
  margin-top: 10px;
}
.required {
  color: red;
}
.error {
  color: red;
}
.el-input {
  width: 50% !important;
}
.inputWarp {
  display: grid;
  margin-bottom: 10px;
}
.labe {
  margin: 0 !important;
}
</style>