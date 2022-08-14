<template>

        <div class="container">
            <b >{{title}}</b>
            <button @click="Click" >click</button>
            <template>
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
  name: 'ContentPage',
 computed: {
        ...mapState(
            'order',['dataTable','title']
        ),
    },
    methods: {
      ...mapMutations('order', [
        'increase'
      ]),
       Click() {
            this.increase('minhsfsdfsdf')
        }
    }
  
}

</script>

<style>

</style>
