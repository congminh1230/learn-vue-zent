<template>
   <AdminLayout>
        <template v-slot:headerTitle>
            <b>Quản lí sản phẩm</b>
        </template>
        <template v-slot:contentHome>
            <el-table
            :data="dataTable"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="Date"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="Address">
            </el-table-column>
            </el-table>
        </template>
   </AdminLayout>
</template>
<script>
import AdminLayout from './AdminLayout.vue';

export default {
  name: 'ContentPage',
  components: {
    AdminLayout
},
  data() {
   return {
    title:'Quản lí sản phẩm',
    dataTable: [
       {
           date: '2016-05-03',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
       }, 
       {
           date: '2016-05-02',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
       }, 
       {
           date: '2016-05-04',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
       }, 
       {
           date: '2016-05-01',
           name: 'Tom',
           address: 'No. 189, Grove St, Los Angeles'
       }
            ],
   }
  }
}

</script>

<style>

</style>
