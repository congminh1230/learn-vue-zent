<template>
 <div>
    giá trị count : 
 </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
 name:'testVue2',
 computed: {
      ...mapState([
        'count'
      ])
    }
}
</script>