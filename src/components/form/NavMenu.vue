
<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      class="el-menu-vertical-demo"
      router
      unique-opened
      mode="hash"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      v-for="item in menu" :index="item.id" :key="item.id">
      <div v-if="item.id==='form'">
          <el-menu-item v-for="sub in item.sub" :key="sub.componentName" :index="sub.componentName" v-text="sub.name">
          </el-menu-item>
      </div>
    </el-menu>
  </el-col>
</el-row>
</template>

<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>

<script>
  import menu from '@/config/menu-config'

  export default {
    data () {
      return {
        menu: menu
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        window.console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        window.console.log(key, keyPath)
      }
    }
  }
</script>