<script setup></script>

<template>
  <div class="main">
    <div class="page page1"></div>
    <div class="page page2">
      <div class="content-two">
        <div class="content-left">
          <h1>关于我们</h1>
        </div>
        <div class="content-right">
          <div class="content-right-item">
            <h3>公司成立</h3>
            <p>
              2023年12月12号在深圳注册成立，立志用人工智能技术生成硬件产品，探寻产品想法到实现的最短路径。通过融合AI技
              术和硬件工程，能够创造出更加智能、高效、灵活的硬件产品，从而在各个领域带来深刻的变革。
            </p>
          </div>
          <div class="content-right-item">
            <h3>公司创新</h3>
            <p>
              从根本上解放工程师，使其不再受制于繁琐重复的研发工作，使工程师能够更集中精力于核心创新工作，充分发挥想象
              力和创意潜能，在产品开发过程中贡献独特的思维和创新性的解决方案。
            </p>
          </div>
          <div class="content-right-item">
            <h3>科技智能</h3>
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
          <h6>
            副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标
          </h6>
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
    height: 980px;
    width: 1920px;
    text-align: center;
    margin-top: -90px;

    &.page1 {
      background-image: url("@/assets/img/home/第一屏.png");
      background-size: 100%;
    }
    &.page2 {
      background-image: url("@/assets/img/home/第二屏.png");
      background-size: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > .content-two {
        width: 1200px;
        height: 491px;
        border: 2px solid rgb(7, 7, 7);
        display: flex;
        position: absolute;

        > .content-left {
          width: 500px;
          > h1 {
            text-align: left;
          }
        }
        > .content-right {
          border: 2px solid white;
          display: flex;
          flex-wrap: wrap;
          flex: 0 1 auto;
          justify-content: flex-start;
          align-items: flex-start;
          > .content-right-item {
            text-align: left;
            > p {
              text-align: left;
              width: 100%;
            }
          }
        }
      }
    }
    &.page3 {
      background-image: url("@/assets/img/home/第三屏.png");
      background-size: 100%;
      >.content-tree{
        margin-top: 30px;
      > .content3-middle{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        justify-content: space-evenly;
        gap: 0px;
        >.content3-middle-item{
          width: 576px;
          height: 353px;
          background-color: rgb(4, 40, 59);
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
      >.content-four{
        width: 1200px;
        // 这一句高度不生效
        height: 554px ;
        >.content-four-item{
text-align: left;
        }
      }
    }
    &.page5 {
      background-image: url("@/assets/img/home/第五屏.png");
      background-size: 100%;
      display: flex;
      justify-content: center;
      align-items:center ;
      >.content-five{


      >.content-top{
        border: 1px solid red;
      }
      >.content-middle{
        margin-top: 100px;
          border: 1px solid rgb(102, 100, 100);
          display: flex;
          flex-direction: row;
          height: 200px;
          height: 368px;
          padding: 20px;
          >.content-middle-item{
            width: 368px;
            height: 368px;
            border: 1px solid green;
            background-color: rgb(3, 30, 48,0.8);
            text-align: left;
            >.box-item{
              width: 320px;
              height: 180px;
            }
            >span{
              margin-bottom: -50px;
            }
          }
      }
    }
    }
  }
}
</style>
