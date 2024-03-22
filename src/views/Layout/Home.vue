<script setup></script>

<template>
  <div class="main">
    <div class="page page1"></div>
    <div class="page page2">
      <div class="content-two">
        <div class="content-left">
          <h1>关于我们</h1>
          <div class="left-button">
            <button>查看更多</button>
          </div>
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
    <div class="page page3">
      <div class="content-tree">
        <div class="content3-top">
          <h1>产品解决方案</h1>
          <p>
            副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标
          </p>
        </div>
        <div class="content3-middle">
          <div class="content3-middle-item">
            <h3>自研智能灯控技术</h3>
            <p>
              满足各项护眼台灯指标，
              让孩子可以高效学习的同时，又可保护视力，帮家长分忧。
            </p>
          </div>
          <div class="content3-middle-item">
            <h3>AI交互学习系统</h3>
            <p>AI交互学习系统——解决读什么以及怎么读的问题。</p>
          </div>
        </div>
        <div class="content3-bottom"></div>
      </div>
    </div>
    <div class="page page4">
      <div class="content-four">
        <div class="content-four-item">
          <h1>研发创新</h1>
          <p>
            有效的解决电子产品设计过程中的研发周期长、人工成本高、质量风险大和需求管理难的固有难题。大幅提升了电子行业研发和生产效率。��基于关键技术的突破，首个进入的两个行业为LED照明行业和智能家居行业，并深耕两个行业的“需求到设计”的快速验证和量产，取得了一系列技术突破和规模化应用成效。
          </p>
          <br />
          <p>
            基于关键技术的突破，首个进入的两个行业为LED照明行业和智能家居行业，并深耕两个行业的“需求到设计”的快速验证和量产，取得了一系列技术突破和规模化应用成效
          </p>
        </div>
        <div class="content-four-item"></div>
      </div>
    </div>
    <div class="page page5">
      <div class="content-five">
        <div class="content-top">
          <h1>公司新闻</h1>
          <p>
            如需更深入的了解猎客产品及服务，请填写以下信息。我们会安排专业人员与您沟通
          </p>
        </div>
        <div class="content-middle">
          <div class="content-middle-item">
            <div class="box-item">
              盒子1
              <img src="" alt="" />
            </div>
            <div>
              <span>
                首次提出了人工智能的方式自动生成电子方案和配套的嵌入式代
              </span>
            </div>
            <br />
            <span> 2024-02-05 </span>
          </div>
          <div class="content-middle-item">
            <div class="box-item">
              盒子2
              <img src="" alt="" />
            </div>
            <div>
              <span>
                首次提出了人工智能的方式自动生成电子方案和配套的嵌入式代
              </span>
            </div>
            <br />
            <span> 2024-02-05 </span>
          </div>
          <div class="content-middle-item">
            <div class="box-item">
              盒子3
              <img src="" alt="" />
            </div>
            <div>
              <span>
                首次提出了人工智能的方式自动生成电子方案和配套的嵌入式代
              </span>
            </div>
            <br />
            <span> 2024-02-05 </span>
          </div>
        </div>
        <div class="content-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  > .page {
    height: 51vw;
    //width: 100vw;
    text-align: center;
    margin-top: -90px;
    margin-bottom: 90px;
    &.page1 {
      background-image: url("@/assets/img/home/第一屏.png");
      background-size: 100%;
    }
    &.page2 {
      background-image: url("@/assets/img/home/第二屏.png");
      background-size: 100%;
      position: relative;
      > .content-two {
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
          > .left-button {
            position: absolute;
            top: 440px;
            > button {
              background-image: linear-gradient(
                to right,
                rgba(0, 99, 171, 1),
                rgba(10, 145, 105, 1)
              ); /* 设置按钮的背景为从红色到绿色的水平线性渐变 */
              color: white; /* 设置按钮的文本颜色为白色 */
              padding: 10px 20px; /* 设置按钮的内边距 */
              border: none; /* 移除按钮的边框 */
              cursor: pointer; /* 设置鼠标悬停时的光标样式为手型 */
              width: 176px;
              height: 48px;
              font-size: 16px;
            }
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
    &.page3 {
      background-image: url("@/assets/img/home/第三屏.png");
      background-size: 100%;
      position: relative;
      > .content-tree {
        position: absolute;
        top: 160px;
        left: 360px;
        > .content3-top {
          margin-bottom: 92px;
          >h1{
            margin-bottom: 40px;
          }

        }
        > .content3-middle {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          justify-content: space-around;
          > .content3-middle-item {
            width: 576px;
            height: 353px;
            margin-right: 35px;
            background-color: rgb(4, 40, 59, 0.6);
            > h3,p{
              text-align: left;
              margin-left: 48px;
              margin-top: 48px;
            }
          }
        }
      }
    }
    &.page4 {
      background-image: url("@/assets/img/home/第四屏.png");
      background-size: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > .content-four {
        width: 1200px;
        // 这一句高度不生效
        height: 554px;
        > .content-four-item {
          text-align: left;
        }
      }
    }
    &.page5 {
      background-image: url("@/assets/img/home/第五屏.png");
      background-size: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > .content-five {
        > .content-top {
          // border: 1px solid red;
        }
        > .content-middle {
          margin-top: 100px;
          // border: 1px solid rgb(102, 100, 100);
          display: flex;
          flex-direction: row;
          height: 200px;
          height: 368px;
          padding: 20px;
          > .content-middle-item {
            width: 368px;
            height: 368px;
            // border: 1px solid green;
            background-color: rgb(3, 30, 48, 0.8);
            text-align: left;
            margin-left: 15px;
            margin-right: 15px;
            > .box-item {
              width: 320px;
              height: 180px;
            }
            > span {
              margin-bottom: -50px;
            }
          }
        }
      }
    }
  }
}
.svg-icon[data-v-2c027f07] {
  width: 48px !important;
  height: 48px !important;
  fill: currentColor;
  /* vertical-align: middle; */
}
</style>
