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

<style lang="scss">
.main-view {
  min-width:1920px;
  color: white;
  background-color: rgb(7, 53, 122);
}

</style>
