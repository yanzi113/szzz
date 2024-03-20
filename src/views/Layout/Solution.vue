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
      // background-image: url("@/assets/img/about/第一屏.png");
      background-color: rgb(6, 26, 51);
      background-size: 100%;
      height: 700px;
    }
    &.page2{
      // background-image: url("@/assets/img/about/第二屏.png");
      background-color: rgb(14, 30, 50);
      background-size: 100%;
      height: 700px;
    }
    &.page3{
      // background-image: url("@/assets/img/about/第三屏.png");
      background-color: rgb(4, 10, 26);
      background-size: 100%;
      height: 1708px;
    }
  }
}
</style>