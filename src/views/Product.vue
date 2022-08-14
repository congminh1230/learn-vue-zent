<template>
        <div class="">
            <template >
            <b >{{title}}</b>
            <button @click="Click" >click</button>
        </template>
        <template >
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
        </div>
</template>
<script>
  import {mapState ,mapMutations} from 'vuex'

export default {
  name: 'ProductOne',
    
  computed: {
        ...mapState(
            'product',['dataTable','title'],
            
        ),

    },
     methods: {
      ...mapMutations('product', [
        'increase'
      ]),
       Click() {
            this.increase('dsdsddadasdasd')
        }
    }
    
   
}

</script>

<style>

</style>
