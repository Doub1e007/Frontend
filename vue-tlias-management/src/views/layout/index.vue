<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
    <div class="common-layout">
        <el-container>
            <!-- 顶栏 -->
            <el-header class="header">
                <span class="title"><b>Tlias智能学习辅助系统</b></span>
                <span class="right_tool">
                    <a href=""><el-icon>
                            <EditPen />
                        </el-icon>修改密码&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                    <a href=""><el-icon>
                            <SwitchButton />
                        </el-icon>退出登录</a>
                </span>
            </el-header>
            <el-container>
                <!-- 左侧菜单 -->
                <el-aside width="200px" class="aside">
                    <el-scrollbar>
                        <el-menu router>
                            <!-- 首页菜单 -->
                            <el-menu-item index="/index">
                                <el-icon>
                                    <Promotion />
                                </el-icon> <RouterLink to="/index">首页</RouterLink>
                            </el-menu-item>

                            <!-- 班级管理菜单 -->
                            <el-sub-menu index="/manage">
                                <template #title>
                                    <el-icon>
                                        <Menu />
                                    </el-icon> <RouterLink to="/index">班级学员管理</RouterLink>
                                </template>
                                <el-menu-item index="/clazz">
                                    <el-icon>
                                        <HomeFilled />
                                    </el-icon> <RouterLink to="/index">班级管理</RouterLink>
                                </el-menu-item>
                                <el-menu-item index="/stu">
                                    <el-icon>
                                        <UserFilled />
                                    </el-icon><RouterLink to="/index">学员管理</RouterLink>
                                </el-menu-item>
                            </el-sub-menu>

                            <!-- 系统信息管理 -->
                            <el-sub-menu index="/system">
                                <template #title>
                                    <el-icon>
                                        <Tools />
                                    </el-icon><RouterLink to="/index">系统信息管理</RouterLink>
                                </template>
                                <el-menu-item index="/dept">
                                    <el-icon>
                                        <HelpFilled />
                                    </el-icon><RouterLink to="/index">部门管理</RouterLink>
                                </el-menu-item>
                                <el-menu-item index="/emp">
                                    <el-icon>
                                        <Avatar />
                                    </el-icon><RouterLink to="/index">员工管理</RouterLink>
                                </el-menu-item>
                            </el-sub-menu>

                            <!-- 数据统计管理 -->
                            <el-sub-menu index="/report">
                                <template #title>
                                    <el-icon>
                                        <Histogram />
                                    </el-icon><RouterLink to="/index">数据统计管理</RouterLink>
                                </template>
                                <el-menu-item index="/empReport">
                                    <el-icon>
                                        <InfoFilled />
                                    </el-icon><RouterLink to="/index">员工信息统计</RouterLink>
                                </el-menu-item>
                                <el-menu-item index="/stuReport">
                                    <el-icon>
                                        <Share />
                                    </el-icon><RouterLink to="/index">学员信息统计</RouterLink>
                                </el-menu-item>
                                <el-menu-item index="/log">
                                    <el-icon>
                                        <Document />
                                    </el-icon><RouterLink to="/index">日志信息统计</RouterLink>
                                </el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </el-aside>

                <!-- 主区域 -->
                <el-main>
                    <RouterView></RouterView>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.header {
    /* background-color: #409eff; */
    background-image: linear-gradient(to right, #6947bf, #8753c9, #a260d2, #bc6edc, #d57de5);
}

.title {
    font-size: 40px;
    color: #fff;
    font-family: 楷体;
    line-height: 60px;
}

.right_tool {
    float: right;
    /* 右侧悬浮 */
    line-height: 60px;
}

a {
    color: #0a0202;
    text-decoration: none;
}
</style>