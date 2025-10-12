<script setup>
import { reactive } from 'vue'

const formEmp = reactive({
    id: '',
    name: '',
    image: '',
    gender: '',
    job: '',
    entrydate: '',
    updatetime: '',
})

const search = () => {
    console.log('查詢中！！!')
}
const clean = () => {
    console.log('清空!')
}

</script>

<template>
    <el-form :inline="true" :model="formEmp" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="formEmp.name" placeholder="請輸入姓名" clearable />
        </el-form-item>
        <el-form-item label="性別">
            <el-select v-model="formEmp.gender" placeholder="請選擇" clearable>
                <el-option label="男" value="1" />
                <el-option label="女" value="2" />
            </el-select>
        </el-form-item>

        <el-form-item label="職位">
            <el-select v-model="formEmp.job" placeholder="請選擇" clearable>
                <el-option label="班主任" value="1" />
                <el-option label="講師" value="2" />
                <el-option label="其他" value="2" />
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="search">查詢</el-button>
            <el-button type="primary" @click="clean">清空</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>