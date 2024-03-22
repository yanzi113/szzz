<script setup>

</script>

<template>
    <div class="main">
        <div class="page page1">内容1</div>
        <div class="page page2">内容2</div>
    </div>
</template>

<style lang="scss" scoped>
.main {
  > .page{
    height: 51vw;
    //width: 100vw;
    text-align: center;
    margin-top: -90px;
    &.page1{
      background-image: url("@/assets/img/news/第一屏.png");
      background-size: 100%;
      height: 600px;
    }
    &.page2{
        background-color: rgb(4, 10, 26,);
      height: 1993px;
    }
  }
}
</style>