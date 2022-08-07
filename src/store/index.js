import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // Khai báo global state
    count :1,
    todos: [
      { id: 1, text: 'task 1', done: true },
      { id: 2, text: 'task 2', done: false }
    ],
    carts:[],
  //   products: [
  //     {
  //         id: 1,
  //         name: 'iPhone 12 Pro Max Chính Hãng',
  //         image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
  //         price: 32990000,
  //         quantity: 566,
  //     },
  //     {
  //         id: 2,
  //         name: 'iPhone 12 Chính Hãng (VN/A)',
  //         image: '',
  //         price: 21790000,
  //         quantity: 123,
  //     },
  //     {
  //         id: 3,
  //         name: 'iPhone 11 Chính hãng',
  //         image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
  //         price: 16690000,
  //         quantity: 5,
  //     },
  //     {
  //         id: 4,
  //         name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
  //         image: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
  //         price: 12190000,
  //         quantity: 1023,
  //     },
  //     {
  //         id: 5,
  //         name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
  //         image: '',
  //         price: 26500000,
  //         quantity: 6,
  //     }
  // ],
  totalMoney:'',
   name: '',
   price: '',
   quantity: '',
   data: '',
   products: [],
   drag: [],
  },
  getters: {
      test: state => {
        return state.todos.filter(test => test.done)
      },
      getProduct: state => {
          return state.products.filter(test => test)
      },
      addListProduct: state  => {
         return state.data.filter(test => test)
      }
  },
  mutations: {
    // Khai báo mutations
    increase (state,data) {
      state.carts.push(data)
    },
    deleteCart(state,id) {
      state.carts.splice(id, 1);

    },
    updateTotalMoney: (state, value) => {
        state.totalMoney = value
    },
    updateName: (state, value) => {
        state.name = value
    },
    updatePrice: (state, value) => {
        state.price = value
    },
    updateQuantity: (state, value) => {
        state.quantity = value
    },
    updateData: (state, value) => {
        state.data = value
    },
    updateProducts: (state, value) => {
        state.products.push(value)
    },
    updateDrag: (state, value) => {
        state.drag = value
    },
       
  }
})

export default store
