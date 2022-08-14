<template>
  <div class="infoWrap">
     dsadasdasd
  </div>
</template>

<script>
import  _ from 'lodash'
export default {

  mounted() {
    // this.join()
    // this.last()
    // this.chunk()
    // this.fill()
    // this.drop()
    // this.sortBy()
    this.has()
    // this.pick()

  },
  methods: {
    // chuyển mảng thành chuỗi ngăn cách bới giá trị thêm vào
   // join() {
   //   let array = ['a','b','c']
   //   let data = _.join(array, '-minhcute-');
   //   console.log(data)
   // }

    // lấy ra phàn tử cuối của mảng
    // last() {
    //   let array = ['hihi','hôhho','hahaha']
    //   let data = _.last(array);
    //   console.log(data)
    // }

    // lấy phần t trong mảng ra 1 mảng mới tham số truyền vào là số lượng phần tử tring mảng mới
      // chunk() {
    //   let array = ['hihi','hôhho','hahaha']
    //   let data = _.chunk(array,2);
    //   console.log(data)
    // }
    // thay thế phần tưt trong mảng
    // fill() {
    //   let array = ['hihi','hôhho','hahaha','minh','dat']
    //   let data = _.fill(array,'*',1,4);
    //   console.log(data)
    // }

    // xóa bắt đầu từ phần tử đầu tiên tham số truyền vào là số lượng phần tử cần xóa
    // drop() {
    //   let array = ['hihi','hôhho','hahaha','minh','dat']
    //   let data = _.drop(array,2);
    //   console.log(data)
    // }
    // sắp xết phần tử trong array object
    // sortBy() {
    //   let users = [
    //     { 'name': 'minh','age': 20 },
    //     { 'name': 'đạt', 'age': 36 },
    //     { 'name': 'hoàng','age': 40 },
    //     { 'name': 'đào', 'age': 34 }
    //   ];
    //   let data = _.sortBy(users,['name'] );
    //   console.log(data)
    // }

    // tìm kiếm phần tử trong 1 object và trả về t vs f
    has() {
      let object = { 'a': { 'b': 2 } };
      let data = _.has(object,'a.b');
      console.log(data)
    }

    // tìm kiếm phần tử trong mảng và trả về 1 object
    // pick() {
    //   let object = { 'a': { 'b': 2 } };
    //   // let object = { 'a': 1, 'b': '2', 'c': 3 };
    //   let data = _.pick(object,['a.b']);
    //   console.log(data)
    // }
  }

}

</script>

<style scoped lang="scss" >

</style>
