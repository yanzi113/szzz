<script setup>
const developmentList = [
  { imageUrl: "img/development/第一屏.png",
   description: "首次提出了人工智能的方式自动生成电子方案和配套的嵌入式代" 
  },
  {
    imageUrl: "img/development/第二屏.png",
    description: "首次提出了人工智能的方式自动生成电子方案和配套的嵌入式代",
  },
  {
    imageUrl: "img/development/第三屏.png",
    description: "首次提出了人工智能的方式自动生成电子方案和配套的嵌入式代",
  },
];
const getImgUrl = (path) => {
  return new URL(`../../assets/${path}`, import.meta.url).href;
};
</script>

<template>
  <div class="main">
    <div class="page page1">
      <div class="page1-content">
        <div class="top">
          <h1>什么是AFH，它是如何工作的？</h1>
          <p>AFH是一种EDA工具，可以让您编写如下代码：</p>
        </div>
        <div class="bottom">
          <div>
            <svg-icon name="yf效率高" />
          </div>
          <div>
            <svg-icon name="yf运行快" />
          </div>
          <div>
            <svg-icon name="yf智能化" />
          </div>
        </div>
      </div>
    </div>
    <div class="page page2">
      <div class="page2-content">
        <div class="page2-top">
          <h1>研发创新</h1>
          <p>副标题副标题副标题副标题副标题副标题副标题副标题</p>
        </div>
        <div class="page2-bottom">
          <div class="bottom-item">
            <div class="icon"></div>
            <h2>研发创新1</h2>
            <p>
              有效的解决电子产品设计过程中的研发周期长、人工成本高、质量风险大和需求管理难的固有难题。大幅提升了电子行业研发和生产效率。
            </p>
          </div>
          <div class="bottom-item">
            <div class="icon"></div>
            <h2>需求到设计</h2>
            <p>
              基于关键技术的突破，首个进入的两个行业为LED照明行业和智能家居行业，并深耕两个行业的“需求到设计”的快速验证和量产，取得了一系列技术突破和规模化应用成效。
            </p>
          </div>
          <div class="bottom-item">
            <div class="icon"></div>
            <h2>高效率</h2>
            <p>
              AFH平台大大提升了的消费电子产品的研发环节的效率，将以往人工研发工程师需要迭代2-5次，单次周期15-60天的电子方案设计压缩至迭代1-2次，单次周期3-5天，并由于AI的可控性极大的消除了人工研发的不确定性以及对个人经验的依赖性。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page page3">
      <div class="page3-content">
        <div class="content-top">
          <h1>研发专利</h1>
          <p>副标题副标题副标题副标题副标题副标题副标题副标题</p>
        </div>
        <div class="content-bottom">
          <div class="icon"></div>
          <div class="bottom-middle">
          <div
            v-for="(item, index) in developmentList"
            :key="index"
            class="bottom-middle-item"
          >
            <!-- <img :src="getImgUrl(item.imageUrl)" :alt="item.description" /> -->
            <p>{{ item.description }}</p>
          </div>
          <div class="icon"></div>
        </div>
      </div>
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
      background-image: url("@/assets/img/development/第一屏.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > .page1-content {
        margin-top: 75px;
        // border: 2px solid white;
        height: 50%;
        width: 62%;

        //display: flex;
        // align-items: center;
        // justify-content: flex-start;
        > .top {
          // margin-top: -300px;
          text-align: left;
          width: 100%;

          > h1 {
            font-size: 44px;
          }
        }

        > .bottom {
          // border: 2px solid blueviolet;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: end;
          height: 58%;

          > div {
            margin-right: 25px;
          }
        }
      }
    }

    &.page2 {
      background-image: url("@/assets/img/development/第二屏.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > .page2-content {
        border: 3px solid white;

        > .page2-top {
          border: 2px solid red;
        }

        > .page2-bottom {
          border: 3px solid gold;
          display: flex;

          > .bottom-item {
            border: 3px solid green;
            width: 368px;
            height: 433px;
            text-align: left;
            background-color: rgb(9, 30, 52, 0.6);

            > .icon {
              width: 100%;
              height: 200px;
            }
          }
        }
      }
    }

    &.page3 {
      background-image: url("@/assets/img/development/第三屏.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      >.page3-content{
        width: 70%;
        height: 70%;
        border: 2px solid white;
        text-align: left;
        > .content-top{
          margin-bottom: 100px;
          border: 2px solid gold;
        }
        > .content-bottom{
          width: 90%;
          height: 70%;
          border: 2px solid red;
          margin-top: -60px;
          margin-left: 50px;
        }
      }
    }
  }
}

.svg-icon[data-v-2c027f07] {
  width: 160px;
  height: 130px;
  fill: currentColor;
}
</style>
