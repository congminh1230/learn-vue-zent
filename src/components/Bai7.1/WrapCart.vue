<template>
  <div class="wrap-cart">
            <h4>Giỏ hàng</h4>
            <div class="cart-item">
                <table>
                    <tr v-for="(cart,index) in carts" :key="index">
                        <td>
                            <img :src="cart.image">
                        </td>
                        <td>
                            <div style="font-weight: bold;">{{ cart.name }}</div>
                            <span>
                                {{
                                    new Intl.NumberFormat('de-DE', {
                                        style: 'currency',
                                        currency: 'VND',
                                        minimumFractionDigits: 0
                                    }).format(cart.price)
                                }}
                            </span>
                        </td>
                        <td>
                            <input type="number" @change="updateMoneyy(index)" v-model="cart.quantityCart">
                        </td>
                        <td>
                            <button @click="destroyItem(index)">Xóa</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="totalMoney">
                <b>
                    Tổng tiền : {{
                        new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                        }).format(totalMoney)
                    }}
                </b>
            </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
  name: "WrapCart",
  computed: {
    ...mapState([
      'carts',
      'totalMoney'
    ]),
  },
  methods: {
    ...mapMutations([
      'updateCart',
      'updateTotalMoney',
      'deleteCart'
    ]),
    updateMoneyy(value) {
      if (this.carts[value].quantityCart <= 0) {
        this.spliceCart(value)
      }
      this.updateTotalMoney(0)
      for (let i = 0; i < this.carts.length; i++) {
        this.updateTotalMoney(this.totalMoney + (this.carts[i].quantityCart * this.carts[i].price))
      }
    },
    destroyItem(value) {
      this.updateTotalMoney(0)
      this.deleteCart(value)
      let total = 0
      for (let i = 0; i < this.carts.length; i++) {
        total += this.carts[i].quantityCart * this.carts[i].price
      }
      this.updateTotalMoney(total)
    },
  }
}
</script>

<style scoped lang="scss">
.cart-item {
            height: 467px;

            table {
                padding-left: 5px;
                width: 100%;
                border: none;

                tr {
                    td {
                        border: none;
                        border-bottom: 1px dotted gray;
                        padding: 10px 0px;

                        p {
                            margin: 0px;
                        }

                        img {
                            width: 30px;
                        }

                        button {
                            background-color: red;
                            color: white;
                            border: none;
                            padding: 6px;
                            border-radius: 3px;
                        }

                        button:hover {
                            background-color: #b42e56;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
         .totalMoney {
            text-align: right;
            margin: 15px;

            b {
                color: red;
            }
        }
</style>