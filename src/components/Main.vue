<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'vheader': Header
  }
}
</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
</style>