<template>
  <el-row>
    <el-col :span="4">
      保振联携系统
    </el-col>
    <el-col :span="20">
    <el-menu
      :default-active="$route.path.path"
      class="el-menu-vertical-demo"
      router
      mode="horizontal"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
        <el-menu-item v-for="item in menu" :key="item.id" :index="item.id" v-text="item.name">
        </el-menu-item>
    </el-menu>
  </el-col>
  </el-row>
</template>

<script>
  import menu from '@/config/menu-config'

  export default {
    data () {
      return {
        menu: menu
      }
    }
  }
</script>

<style scoped>
</style>