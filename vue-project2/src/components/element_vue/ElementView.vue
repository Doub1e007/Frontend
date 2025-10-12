<script lang="ts" setup>
import { ref } from 'vue'
import type { ComponentSize } from 'element-plus'
import { reactive } from 'vue'

// do not use same name with ref
// 定義表單對象
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
// 提交函數
const onSubmit = () => {
    console.log('submit!')
    console.log(`${form.name} + ${form.region}`);

}

const dialogTableVisible = ref(false)   // 控制對話框顯示/隱藏 false:隱藏 true:顯示
// 嵌套的表格數據
const gridData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
]

const currentPage4 = ref(1)  // 當前頁碼
const pageSize4 = ref(10)   // 每頁記錄數
const size = ref<ComponentSize>('default')
const background = ref(false)   //設置背景顏色是否打開
const disabled = ref(false)     // 是否禁用

const handleSizeChange = (val: number) => {     // 每頁記錄數變化了就會觸發該函數
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {  // 當前頁碼變化了就會觸發該函數
    console.log(`current page: ${val}`)
}
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        age: 18,
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        age: 25,
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        age: 30,
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        age: 28,
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<template>
    <!-- 按钮 -->
    <div class="button-row">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="age" label="Age" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>

    <!-- 分頁 -->
    <div class="demo-pagination-block">
        <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[10, 20, 30, 40]"
            :size="size" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
            :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <br />

    <!-- 對話框 -- 內嵌表格 -->
    <el-button class="!ml-0" plain @click="dialogTableVisible = true">
        Open a Table nested Dialog
    </el-button>

    <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
        <el-table :data="gridData">
            <el-table-column property="date" label="Date" width="150" />
            <el-table-column property="name" label="Name" width="200" />
            <el-table-column property="address" label="Address" />
        </el-table>
    </el-dialog>

    <!-- 表單 -->
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="城市">
            <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="上海" value="shanghai" />
                <el-option label="北京" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="日期">
            <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-col>
            <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
                <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
        </el-form-item>
        <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
                <el-checkbox value="Online activities" name="type">
                    Online activities
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                    Promotion activities
                </el-checkbox>
                <el-checkbox value="Offline activities" name="type">
                    Offline activities
                </el-checkbox>
                <el-checkbox value="Simple brand exposure" name="type">
                    Simple brand exposure
                </el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
</template>

<style scoped>
.demo-pagination-block+.demo-pagination-block {
    margin-top: 10px;
}

.demo-pagination-block .demonstration {
    margin-bottom: 16px;
}
</style>