<script setup></script>

<template>
  <header class="topnav">
    <div class="content">
      <div class="logo">Logo</div>
      <div class="menu">
        <el-menu 
        :default-active="activeIndex2" 
        class="el-menu" 
        mode="horizontal"
        background-color="rgb(14, 55, 120)" 
        text-color="#fff" 
        active-text-color="#fff" 
        @select="handleSelect">
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/about">关于我们</router-link></el-menu-item>
          <el-menu-item index="3">产品解决方案</el-menu-item>
          <el-menu-item index="4"><router-link to="/Development">研发创新</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="/news">新闻中心</router-link></el-menu-item>
        </el-menu>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.topnav {
  height: 80px;
  width: 1920px;
  color: white;
  display: flex;

  border: 1px solid black;
  justify-content: center;
  align-items: center;

  >.content {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    justify-content: center;
    margin-left: 360px;

    >.logo {
      float: left;
      margin-top: 24px;
      border: 1px solid black;
    }
  }

  ul li a {
    color: white;
    text-decoration: none;
  }
}

.el-menu--horizontal.el-menu {
  // /* border-bottom: solid 1px var(--el-menu-border-color); */
  border: none;
}
--el-menu-border-color{
  display: none;
}
</style>
