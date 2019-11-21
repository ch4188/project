<template>
    <div>
     <button @click="remove">退出登录</button>
    </div>
</template>

<script>
    export default {
        methods: {
            remove() {
                localStorage.removeItem("id");
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>

</style>