<template>
  <div class="main-view">
    <LayoutHeader></LayoutHeader>
    <div class="router-view">
      <RouterView></RouterView>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import LayoutHeader from "@/components/LayoutHeader.vue";
import LayoutFooter from "@/components/LayoutFooter.vue";
</script>

<style lang="scss" scoped>
.main-view {
  // min-width:1920px;
  //height: 100vh;
  color: white;
  border: 1px solid brown;
  background-color: transparent;
  // position: relative;
  // top: 50px;
  //width: 100vw;
}
</style>
