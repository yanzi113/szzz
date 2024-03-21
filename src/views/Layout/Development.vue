<script setup>

</script>

<template>
    <div class="main">
        <div class="page page1">
          <div class="content-1">
            <div class="left">
              <div class="left-top">
                <h1>什么是AFH,它是如何工作的</h1>
                <p>AFH是一种EDA工具，可以让您编写如下代码：</p>
              </div>
              <div class="left-bottom">
                <div>
                  <svg-icon></svg-icon>
                </div>
              </div>
            </div>
            <div class="right">

            </div>
        </div></div>
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