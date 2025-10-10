<script setup>
// 组合式API
import { ref,onMounted } from 'vue'
// 大括号必须要写
// 声明变量
let message = ref("Hello 组合式API")
let count = ref(0)

// 声明函数
function increment(){
    count.value++
    // 不能再使用this 必须用value属性
    message.value = "count的值是：" + count.value
}

// 声明钩子函数
onMounted(()=>{
    console.log('页面加载完成!!!'); 
})

</script>

<template>
    <h1>{{ message }}</h1>

     <input type="button" value="点击+1" @click="increment"> {{ count }}
</template>

<style scoped>

</style>