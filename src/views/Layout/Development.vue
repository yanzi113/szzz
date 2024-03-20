<script setup>

</script>

<template>
    <div class="main">
        <div class="page page1">内容1</div>
        <div class="page page2">内容2</div>
        <div class="page page3">内容3</div>
    </div>
</template>

<style lang="scss" scoped>
.main {
  > .page{
    height: 980px;
    width: 1920px;
    text-align: center;
    margin-top: -90px;
    &.page1{
      background-image: url("@/assets/img/development/第一屏.png");
      background-size: 100%;
    }
    &.page2{
      background-image: url("@/assets/img/development/第二屏.png");
      background-size: 100%;
    }
    &.page3{
      background-image: url("@/assets/img/development/第三屏.png");
      background-size: 100%;
    }
  }
}
</style>