<template>
    <div>
     <div class="header">
         <van-search placeholder="请输入搜索关键词" v-model="value" />
     </div>
     <list></list>
    </div>
</template>

<script>
import list from "../components/category.vue/list"
    export default {
        data() {
            return {
                value: ''
            }
        },
        components:{
            list
        }
    }
</script>

<style scoped>

</style>