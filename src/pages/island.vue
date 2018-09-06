<template>
  <q-page padding>
    <!-- content -->
    island
  </q-page>
</template>

<script>
import {getIslandList} from '.././plugins/service'
export default {
    data(){
      return {

      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      async getData(){
        let data = await getIslandList()
        debugger
      }
    }
}
</script>

<style>
</style>
