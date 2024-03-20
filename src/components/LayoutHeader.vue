<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')

</script>

<template>
  <header class="topnav">
    <div class="content">
      <div class="logo">Logo</div>
      <div class="menu">
        <el-menu 
        :default-active="activeIndex" 
        class="el-menu" 
        mode="horizontal"
        background-color="transparent" 
        text-color="#fff" 
        active-text-color="#fff" 
        style="border: none;"
        :ellipsis="false"
        @select="handleSelect">
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/about">关于我们</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/solution">产品解决方案</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/development">研发创新</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="/news">新闻中心</router-link></el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.topnav {
  height: 80px;
  color: white;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  >.content {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    justify-content: center;
    align-items: center;

    >.logo {
      float: left;
      margin-top: 24px;
      border: 1px solid black;

    }
    
    >.menu{
    }
  }

  ul li a {
    color: white;
    text-decoration: none;
  }
}
--el-menu-border-color{
  display: none;
}
.el-menu--horizontal.el-menu {
  border: none;
}
</style>
