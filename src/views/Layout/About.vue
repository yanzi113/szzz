<script setup></script>

<template>
  <div class="main">
    <div class="page page1">
      <div class="content-one">
        <div class="content-left">
          <h1>关于我们</h1>
        </div>
        <div class="content-right">
          <div class="content-right-item">
            <div class="logo-and-head">
              <svg-icon name="公司成立" />
              <h3>公司成立</h3>
            </div>
            <p>
              2023年12月12号在深圳注册成立，立志用人工智能技术生成硬件产品，探寻产品想法到实现的最短路径。通过融合AI技
              术和硬件工程，能够创造出更加智能、高效、灵活的硬件产品，从而在各个领域带来深刻的变革。
            </p>
          </div>
          <div class="content-right-item">
            <div class="logo-and-head">
              <svg-icon name="公司创新" />
              <h3>公司创新</h3>
            </div>
            <p>
              从根本上解放工程师，使其不再受制于繁琐重复的研发工作，使工程师能够更集中精力于核心创新工作，充分发挥想象
              力和创意潜能，在产品开发过程中贡献独特的思维和创新性的解决方案。
            </p>
          </div>
          <div class="content-right-item">
            <div class="logo-and-head">
              <svg-icon name="科技智能" />
              <h3>科技智能</h3>
            </div>
            <p>
              快速实现人工智能技术生成硬件产品的创新路径，通过科技创新和高效生产方式，推动产业的升级，实现更智能、可持
              续的生产生态，为未来产业发展创造全新的生产动能。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page page2">
      <!-- 上下区域 其中下面包含两个区域，对半分 -->
      <div class="page2-content">
        <div class="page2-top">
          <h1>企业文化</h1>
          <p>
            快速实现人工智能技术生成硬件产品的创新路径，通过科技创新和高效生产方式，推动产业的升级，实现更智能、可<br />持续的生产生态，为未来产业发展创造全新的生产动能。
          </p>
        </div>
        <div class="page2-bottom">
          <div class="bottom-left"></div>
          <div class="bottom-right">
            <div class="bottom-right-item">
              <svg-icon name="我们的愿景" />
              <div>
                <h3>我们的愿景</h3>
                <p>AI生成硬件领导者AI生成硬件领导者AI生成</p>
              </div>
            </div>
            <div class="bottom-right-item">
              <svg-icon name="我们的使命" />
              <div>
                <h3>我们的使命</h3>
                <p>重新定义电子方案设计</p>
              </div>
            </div>
            <div class="bottom-right-item">
              <svg-icon name="我们的价值观" />
              <div>
                <h3>我们的价值观</h3>
                <p>客户优先、成就员工、诚信守诺、守正出奇</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="page page3">
  <div class="page3-content">
    <div class="top-left">

    </div>
    <div class="top-right">

    </div>
    <div class="bottom-left">

    </div>
    <div class="bottom-right">

    </div>
  </div></div>
  <div class="page page4">内容4</div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  > .page {
    height: 980px;
    width: 1920px;
    text-align: center;
    margin-top: -90px;
    margin-bottom: 90px;
    &.page1 {
      background-image: url("@/assets/img/about/第一屏.png");
      background-size: 100%;

      > .content-one {
        width: 1200px;
        height: 491px;
        border: 2px solid rgb(7, 7, 7);
        position: absolute;
        top: 200px;
        /* bottom: 0; */
        left: 360px;

        > .content-left {
          width: 500px;
          height: 250px;
          position: relative;

          > h1 {
            position: absolute;
            text-align: left;
            top: 0px;
            margin-top: 0px !important;
          }
        }

        > .content-right {
          width: 700px;
          height: 491px;
          border: 2px solid white;
          position: absolute;
          top: 0px;
          left: 500px;

          > .content-right-item {
            text-align: left;
            size: 14px;
            line-height: 28px;
            margin-bottom: 50px;

            > .logo-and-head {
              display: flex;
              flex-direction: row;
              position: relative;
              left: -56px;

              > h3 {
                margin-top: 10px;
                margin-bottom: 10px;
                font-size: 24px;
                margin-left: 8px;
              }

              > p {
                text-align: left;
                width: 100%;
                // margin-bottom: 80px;
              }
            }
          }
        }
      }
    }

    &.page2 {
      background-color: rgb(4, 10, 26);
      background-size: 100%;
      //position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      > .page2-content {
        padding: 30px;
        height: 800px;
        // background-color: bisque;
        // border: 2px solid rgb(7, 7, 7);
        left: 360px;
        > .page2-top {
          height: 110px;
          width: 100%;
          // background-color: aqua;
          margin-top: -21px;
          margin-bottom: 100px;
        }

        > .page2-bottom {
          // background-color: aliceblue;
          height: 368px;
          width: 1200px;
          position: relative;

          > .bottom-left {
            width: 640px;
            height: 368px;
            background-image: url("@/assets/img/about/第二屏.png");
            background-size: 100%;
          }

          > .bottom-right {
            width: 384px;
            height: 368px;
            position: absolute;
            top: 0px;
            left: 740px;
            // background-color: aquamarine;
            > .bottom-right-item {
              text-align: left;
              margin-bottom: 50px;
              // border: 1px solid red;
              margin-top: -8px;
              > div {
                display: inline-block;
                margin-left: 20px;
                > h3 {
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
    &.page3 {
      background-image: url("@/assets/img/about/第三屏.png");
      background-size: 100% 100%;
      height: 900px;
      display: grid;
      place-items: center;
      >.page3-content{
        height: 500px;
        width: 500px;
        background-color: aliceblue;
      }
    }

    &.page4 {
      background-image: url("@/assets/img/about/第四屏.png");
      background-size: 100% 100%;
      height: 900px;
    }
  }
}
.svg-icon[data-v-2c027f07] {
  width: 48px !important;
  height: 48px !important;
  fill: currentColor;
}
</style>
