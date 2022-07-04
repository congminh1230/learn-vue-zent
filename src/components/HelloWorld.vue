<template>
  <div class="hello">
      <div class="product" >
          <div class="search" >
            <input type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="search"
                       @keyup.enter="searchProduct()">
            <span  @click="exit()" class="">X</span>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Sản phẩm </th>
                <th scope="col">giá</th>
                <th scope="col">Số lương</th>
                <th scope="col">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(product, index) in productSearch" :key="index">
                <td>{{index}}</td>
                <td><img :src="product.image"/><a href="">{{ product.name }}</a></td>
                <td>{{
                        new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                        }).format(product.price)
                    }}</td>
                <td>{{ product.quantity }}</td>
                <td v-if="product.isAvailable == true" style="color:blue">Còn hàng</td>
                <td  v-else-if=" product.isAvailable == false" style="color:red" >Hết hàng</td>
              </tr>
            </tbody>
          </table>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
      return {
        search:'',
        name:'minh',
        data: '',
        products : [
          {
            name: 'iPhone 12 Pro Max Chính Hãng',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 32990000,
            quantity: 566,
            isAvailable: true
          },
          {
            name: 'iPhone 12 Chính Hãng (VN/A)',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 21790000,
            quantity: 123,
            isAvailable: true
          },
          {
            name: 'iPhone 11 Chính hãng',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 16690000,
            quantity: 0,
            isAvailable: false
          },
          {
            name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 12190000,
            quantity: 1023,
            isAvailable: true
          },
          {
            name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 26500000,
            quantity: 45,
            isAvailable: true
          }
        ],
        productSearch: [
          {
            name: 'iPhone 12 Pro Max Chính Hãng',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 32990000,
            quantity: 566,
            isAvailable: true
          },
          {
            name: 'iPhone 12 Chính Hãng (VN/A)',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 21790000,
            quantity: 123,
            isAvailable: true
          },
          {
            name: 'iPhone 11 Chính hãng',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 16690000,
            quantity: 0,
            isAvailable: false
          },
          {
            name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 12190000,
            quantity: 1023,
            isAvailable: true
          },
          {
            name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg',
            price: 26500000,
            quantity: 45,
            isAvailable: true
          }
        ],
        isClose: false
      }
  },
  watch: {
      search(value) {
            if (value !== '') {
                this.isClose = true
            } else {
                this.isClose = false
                this.productSearch = this.products
            }
        }
      
  },
  methods : {
      exit() {
              this.search = ''
      },
      searchProduct() {
            let str = this.search.trim().toLowerCase()
            this.productSearch = []
            if (this.search === '') {
                this.productSearch = this.products
            } else {
                this.productSearch = this.products.filter(data => data.name.toLowerCase().indexOf(str) !== -1);
                console.log(this.productSearch )
            }
        }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
td {
  width: 5%;
}
img {
  width: 30%;
}
.search {
  display: inline-block;
    border: 1px solid #333;
}
.search >span {
  cursor: pointer;
  
}
input {
  border: 0;
}
</style>
