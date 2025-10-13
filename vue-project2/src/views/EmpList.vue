<script setup>
import { reactive, onMounted, ref } from 'vue'
import axios from 'axios';

const formEmp = reactive({
    id: '',
    name: '',
    image: '',
    gender: '',
    job: '',
    entrydate: '',
    updatetime: '',
})

const empList = ref([])      // 用于接收员工列表数据
const search = () => {
    console.log('查詢中！！!')
    // 通过axios发送异步请求 获取数据
    axios.get(`https://web-server.itheima.net/emps/list?name=${formEmp.name}&gender=${formEmp.gender}&job=${formEmp.job}`).then((result) => {
        console.log(result);
        empList.value = result.data.data;
    })
}
const clean = () => {
    console.log('清空!')
}



// 钩子函数
onMounted(() => {
    search();
})
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

    <!-- 表格 -- 用于展示数据 -->
    <el-table :data="empList" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="100" align="center" />
        <el-table-column prop="name" label="姓名" width="180" align="center"/>

        <el-table-column prop="image" label="头像" width="180" align="center">
            <!-- 插槽scope: 通过插槽可以获得整行对象数据 -->
            <template #default="scope">
                <img :src="scope.row.image" width="50px">
            </template>
        </el-table-column>

        <!-- 插槽scope: 通过插槽可以获得整行对象数据 -->
        <el-table-column prop="gender" label="性别" width="100" align="center">
            <template #default="scope">
                {{ scope.row.gender === 1 ? '男' : '女' }}
            </template>
        </el-table-column>

        <!-- 插槽scope: 通过插槽可以获得整行对象数据 -->
        <el-table-column prop="job" label="职位" width="180" align="center">
            <template #default="scope">
                <span v-if="scope.row.job == 1">班主任</span>
                <span v-else-if="scope.row.job == 2">讲师</span>
                <span v-else>其他</span>
            </template>
        </el-table-column>
        <el-table-column prop="entrydate" label="入职日期" width="180" align="center"/>
        <el-table-column prop="updatetime" label="更新时间" width="180" align="center"/>
    </el-table>
</template>

<style scoped>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>