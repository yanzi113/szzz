<script setup>
const solutionList = [
  { imageUrl: "img/solution/1.png", description: "MI-AI伴读解决方案" },
  {
    imageUrl: "img/solution/2.png",
    description: "MI-AI伴读护眼灯解决方案",
  },
  {
    imageUrl: "img/solution/3.png",
    description: "MI-AI伴读APP解决方案",
  },
  {
    imageUrl: "img/solution/4.png",
    description: "MI-AI伴读SAAS解决方案",
  },
  {
    imageUrl: "img/solution/5.png",
    description: "MI-MI-AI灯控解决方案",
  },
  {
    imageUrl: "img/solution/6.png",
    description: "MI-MI-A1智能防近视解决方案",
  },
];
const getImgUrl = (path)=> { return new URL(`../../assets/${path}`, import.meta.url).href; };

</script>

<template>
  <div class="main">
    <div class="page page1">
      <div class="page1-content">
        <h1>系统架构</h1>
        <p>
          基于自研机器视觉技术和智能照明技术，结合创新的智能语音应<br />用，打造护眼和伴读双重属性的儿童产品。
          <br />集硬件、软件、机器视觉、智能语音、云计算等技术于一身。
        </p>
      </div>
    </div>
    <div class="page page2">
      <div class="page2-content">
        <div class="left-top">
          <h1>自研智能灯控技术</h1>
          <p>
            满足各项护眼台灯指标， 让孩子可以高效学习的同时，又可保护视力，帮<br />家长分忧。
          </p>
        </div>
        <div class="right-top">
        </div>
        <div class="left-bottom"></div>
        <div class="right-bottom">
          <h1>AI交互学习系统</h1>
          <p>AI交互学习系统——解决读什么以及怎么读的问题。</p>
        </div>
      </div>
    </div>
    <div class="page page3">
      <div class="page3-content">
        <div class="top">
          <h1>解决方案</h1>
          <p>副标题副标题副标题副标题副标题副标题副标题副标题</p>
        </div>
        <div class="bottom">
          <div
            v-for="(item, index) in solutionList"
            :key="index"
            class="bottom-item"
          >
            <img :src="getImgUrl(item.imageUrl)" :alt="item.description" />
            <p>{{ item.description }}</p>
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
      background-image: url("@/assets/img/solution/banner.png");
      background-color: rgb(6, 26, 51);
      background-size: 100% 100%;
      height: 36vw;
      //width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;

      > .page1-content {
        // border: 2px solid white;
        text-align: left;
        margin-left: -700px;
      }
    }

    &.page2 {
      // background-image: url("@/assets/img/about/第二屏.png");
      background-color: rgb(14, 30, 50);
      background-size: 100% 100%;
      height: 52vw;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 3px solid greenyellow;

      > .page2-content {
        height: 70%;
        width: 66%;
        // border: 3px solid white;
        display: flex;
        flex-wrap: wrap;

        /* 当子项目超出容器宽度时换行 */
        > div {
          flex: 1 0 50%;
          /* 每个子项目占据父容器的一半宽度 */
          height: 50%;
          /* 设置子项目的高度 */
          // border: 1px solid #ccc;
          box-sizing: border-box;
          /* 让边框和内边距计入宽度和高度 */
          text-align: left;

          > h1 {
            margin-top: 120px;
          }
        }
        > .right-top{
          background-image: url("@/assets/img/solution/自研智能.png");
          background-size:100% 100%;
        }
        >.left-bottom {
          background-image: url("@/assets/img/solution/ai交互学习.png");
          background-size: 100% 100%;
        }
      }
    }

    &.page3 {
      // background-image: url("@/assets/img/about/第三屏.png");
      background-color: rgb(4, 10, 26);
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      > .page3-content {
        width: 80%;
        height: 80%;
        border: 2px solid white;
        > .bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between; /* 如果您想要每个项目之间有相同的空间 */
          gap: 5px; /* 根据您的需要调整间隙 */
          > .bottom-item {
            flex: 0 0 calc(33.333% - 20px); /* 减去的20px是为了考虑间隙的宽度 */
            height: 200px; /* 根据您的需要调整高度 */
            flex-direction:flex-end;
            margin-bottom: 60px;
            margin-top: 50px;
            > img{
              height: 100%;
              width: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
