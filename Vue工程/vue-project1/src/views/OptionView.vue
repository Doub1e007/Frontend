<script>
// 选项式API
export default {
    // 声明数据模型
    data(){
        return {
            message: 'Hello 声明式API...',
            count: 0
        }
    },

    // 声明函数
    methods:{
        increment(){
            this.count++;
        }
    },

    // 声明钩子函数
    mounted(){
        console.log('页面组件挂载完成...');
    },
}
</script>

<template>
    <h1>{{ message }}</h1>

    <input type="button" value="点击+1" @click="increment"> {{ count }}
</template>

<style scoped>

</style>