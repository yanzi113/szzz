<script setup></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="logo-section">
        <svg-icon name="logo底部" />
      </div>
      <div class="social-media"></div>
      <div class="footer-columns">
        <div class="footer-column">
          <h4>关于我们</h4>
          <ul>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">企业文化</a></li>
            <li><a href="#">合作伙伴</a></li>
            <li><a href="#">资质荣誉</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>产品与解决方案</h4>
          <ul>
            <li><a href="#">产品介绍</a></li>
            <li><a href="#">解决方案</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>研发创新</h4>
          <ul>
            <li><a href="#">研发能力</a></li>
            <li><a href="#">核心技术</a></li>
            <li><a href="#">研发专利</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>新闻中心</h4>
          <ul>
            <li><a href="#">行业新闻</a></li>
            <li><a href="#">企业新闻</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright © 2023 shenzhen index. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: -90px;
  background-color: rgb(14, 30, 50);
  color: #fff;
  padding: 40px 0;
  width: 1920px;
  height: 440px;

  > .container {
    position: relative;
    width: auto;
    height: 300px;
    > .logo-section {
      width: 182px;
      height: 38px;
      border: 2px solid #fff;
    }
    > .footer-columns {
      position: absolute;
      left: 834px;
      top: 0px;
      display: flex;
      justify-content: space-between;
      gap: 100px; /* 设置相邻元素之间的间距为10px */
      width: auto;
      height: auto;
      align-items: center;
      > .footer-column {
        // margin-right: 40px;
        > h4 {
          font-size: 24px;
          line-height: 36px;
        }
        > ul li {
          font-size: 16px;
          line-height: 24px;
        }
      }

      .footer-column h4 {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .footer-column ul {
        list-style: none;
        padding: 0;
      }

      .footer-column ul li a {
        color: #aaa;
        text-decoration: none;
        font-size: 16px;
        line-height: 2.5;
      }

      .footer-column ul li a:hover {
        text-decoration: underline;
      }
    }
    > .footer-bottom {
      position: absolute;
      text-align: center;
      font-size: 14px;
      top: 400px;
      width: 1200px;
      height: auto;
      left: 0;
      right: 0;
      // bottom:0;
      margin: auto;
      border-top: 0.5px solid rgba(255, 255, 255, 0.2);
      > P {
        margin-top: 40px;
        text-align: left;
      }
    }
  }
}

.social-media {
  display: flex;
  align-items: center;
}

.social-media a {
  color: #fff;
  margin-right: 10px;
  font-size: 24px; /* Adjust size as needed */
}
</style>
