<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-logo"></div>
      <div class="footer-right">
        <dl>
          <dt>关于我们</dt>
          <dd>企业文化</dd>
          <dd>合作伙伴</dd>
          <dd>资质荣誉</dd>
          <dd>社会责任</dd>
        </dl>
        <dl>
          <dt>产品与解决方案</dt>
          <dd>产品介绍</dd>
          <dd>解决方案</dd>
        </dl>
        <dl>
          <dt>研发创新</dt>
          <dd>研发能力</dd>
          <dd>核心技术</dd>
          <dd>研发专利</dd>
        </dl>
        <dl>
          <dt>行业新闻</dt>
          <dd>企业新闻</dd>
        </dl>
      </div>
      <hr />
      <div class="footer-bottom">
        <div class="footerbottom-left">
          Copyright © 2023 shenzhen index. All rights reserved.
        </div>
        <div class="ooterbottom-right">
          <a href="">图标1</a>
          <a href="">图标2</a>
          <a href="">图标3</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* 底部整体样式 */
.footer {
  background-color: rgb(14, 30, 50);
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  .footer-main {
    > .footer-right {
      box-sizing: border-box;
      display: flex;
      flex: 3;
      justify-content: space-around;

    }
    > .footer-logo {
      margin-left: 360px;
    }
    > .footer-bottom {
    }
  }
}



</style>
