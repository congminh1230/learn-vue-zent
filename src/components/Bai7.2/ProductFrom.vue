<template>
    <div class="form-wrap">
        <h4>Sản phẩm</h4>
        <form action="">
            <div class="info">Tên sản phẩm <span class="error">(*)</span></div>
            <el-input type="text"  placeholder="Please input" v-model="name"></el-input>
            
            <div class="info">Đơn giá <span class="error">(*)</span></div>
            <el-input  type="number" placeholder="Please input" v-model="price"></el-input>
            <div class="info">Số lượng <span class="error">(*)</span></div>
            <el-input  type="number" placeholder="Please input" v-model="quantity"></el-input>
            <div class="btn-form">
                 <el-button>Hủy</el-button>
                <el-button type="primary"  @click="createProduct()" >{{ buttonName }}</el-button>
            </div>
        </form>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    name: "ProductForm",
    data() {
        return {
            name:'',
            price:'',
            quantity:'',
            errorName: false,
            errorPrice: false,
            errorQuantity: false,
            buttonName: 'Tạo mới'
        }
    },
    computed: {
    ...mapState([
      'name',
      'price',
      'quantity',
      'data',
      'products',
    ]),
  },
    methods: {
        ...mapMutations([
      'updateName',
      'updatePrice',
      'updateQuantity',
      'updateButtonName',
      'updateData',
      'updateProducts',
      'updateCodeProduct'
    ]),
        createProduct() {
           let codeItem = 'SP' + new Date().getTime();
           let data = {
                code: codeItem,
                name: this.name,
                price: this.price,
                quantity: this.quantity,
           }
        //    this.$emit('ExerciseOne',this.data)
        console.log(data  )
        this.updateProducts(data)
            this.buttonName = 'Tạo mới'
                this.name = this.price = this.quantity = ''
        },
        resetValue() {
            this.name = this.price = this.quantity = ''
            this.buttonName = 'Tạo mới'
        },
        validate() {
            
        }
    },
    watch: {
        name(value) {
            (value !== '') ? this.errorName = false : ''
        },
        price(value) {
            (value !== '') ? this.errorPrice = false : ''
        },
        quantity(value) {
            (value !== '') ? this.errorQuantity = false : ''
        },
        product(value) {
            this.name = value.name
            this.price = value.price
            this.quantity = value.quantity
            this.buttonName = 'Cập nhật'
        }
    }
}
</script>

<style  lang="scss">
.info {
            margin: 10px 0;
            font-size: 14px;
            text-align: initial !important;
        }

form-wrap {
    padding: 15px;
    text-align: left;
    border: 1px solid #DCDFE6;

    h4 {
        color: #0080dd;
    }
        .info {
            margin: 10px 0;
            font-size: 14px;
            text-align: left !important;
        }

    form {
        .info {
            margin: 10px 0;
            font-size: 14px;
            text-align: initial !important;
        }

        .btn-form {
            margin: 40px 0 80px 0;

            .el-button {
                float: right;
                margin-left: 10px;
            }

            .btn-reset {
                float: right;
                margin-left: 10px;
                display: inline-block;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                background: #FFF;
                border: 1px solid #DCDFE6;
                color: #606266;
                -webkit-appearance: none;
                text-align: center;
                box-sizing: border-box;
                outline: 0;
                transition: .1s;
                font-weight: 500;
                padding: 12px 20px;
                font-size: 14px;
                border-radius: 4px;
            }
        }

        input {
            -webkit-appearance: none;
            background-color: #FFF;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #DCDFE6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            outline: 0;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 100%;
            font-size: 14px;
            margin-bottom: 5px;
        }

        input::placeholder {
            font-size: 14px;
            color: #ccc4cc;
        }

        .errorBorder {
            border-color: red;
        }
    }
}

.error {
    color: red;
}

.error-text {
    font-size: 14px;
}
.btn-form {
    margin-top: 20px;
    text-align: end;
}
</style>