<script setup></script>

<template>
    <div class="main">
        <div class="page">内容1</div>
        <div class="page">内容2</div>
        <div class="page">内容3</div>
        <div class="page">内容4</div>
        <div class="page">内容5</div>
    </div>
</template>

<style lang="scss">
.main {
  > .page{
    height: 980px;
    width: 1920px;
    text-align: center;
    background-color: rgb(54, 60, 66);
  }
}
</style>
