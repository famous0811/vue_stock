<template>
  <div class="landing">
    <div class="landingContents">
      <Slider :propsdata="mainchart" :autoslide="true" :autoTime="4500" />
    </div>
    <div class="landingContents">
      <div class="landingContentsHeader">
        <h4 class="landingContentsTitle">인기 종목</h4>
        <div class="otherInfo">
          <router-link to="/test">더보기</router-link>
        </div>
      </div>
      <AttentionStock />
    </div>
    <div class="landingContents">
      <div class="landingContentsHeader">
        <h4 class="landingContentsTitle">관심 종목</h4>
        <div class="otherInfo">
          <router-link to="/test">더보기</router-link>
        </div>
      </div>
      <AttentionStock />
    </div>
    <div class="landingContents">
      <h4 class="landingContentsTitle">주요뉴스</h4>
      <div>
        <NewsComponent v-for="n in 5" :key="n" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsComponent from "../components/news.vue";
import AttentionStock from "../components/attentionStock.vue";
import Slider from "../components/assets/slider.vue";
@Options({
  components: {
    NewsComponent,
    AttentionStock,
    Slider,
  },
  data() {
    return {
      mainchart: [
        {
          name: "코스피",
          value: "3,133.52",
          increase: "4.99",
          diff: "0.16%",
        },
        {
          name: "코스닥",
          value: "3,133.52",
          increase: "4.99",
          diff: "0.16%",
        },
        {
          name: "코스피2",
          value: "3,133.52",
          increase: "4.99",
          diff: "0.16%",
        },
        {
          name: "코스닥2",
          value: "3,133.52",
          increase: "4.99",
          diff: "0.16%",
        },
      ],
    };
  },
})
export default class Landing extends Vue {}
</script>

<style lang="scss">
.landing {
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  overflow: auto;
}
.landingContents {
  background-color: white;
  padding: 20px;
  margin: 15px 0;
}
.landingContentsTitle {
  margin: 10px 0;
}
.mainChart {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
}
.landingContentsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chartName {
  margin: 5px 0;
}
.chartVale {
  font-size: 1.8em;
  font-weight: 400;
}
.chartData {
  display: flex;
  justify-content: center;
  width: 100%;
  & > .chartIncrease {
    margin: 0 15px;
  }
}
.chartIncrease {
  position: relative;
  &::before {
    position: absolute;
    left: -18px;
    top: 50%;
    transform: translateY(-50%);
  }
  &.minus {
    &::before {
      content: "▼";
    }
    color: #077df3;
  }
  &.plus {
    &::before {
      content: "▲";
    }
    color: #ec3738;
  }
  &.none {
    &::before {
      content: "−";
      height: fit-content;
      left: -10px;
      transform: translateY(-55%);
    }
    color: #bbbbbb;
  }
}
.otherInfo {
  transition: all 0.5s;
  font-weight: bold;
  &:hover {
    color: #077df3;
  }
}
.chartDiff {
  position: relative;
  font-weight: bold;
  &::before {
    position: absolute;
    left: -10px;
    transform: translateY(-55%);
    top: 50%;
  }
  &.minus {
    color: #077df3;
    &::before {
      content: "−";
    }
  }
  &.none {
    color: #bbbbbb;
    &::before {
      content: "−";
    }
  }
  &.plus {
    color: #ec3738;
    &::before {
      transform: translateY(-50%);
      content: "+";
    }
  }
}
</style>
