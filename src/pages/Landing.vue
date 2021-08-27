<template>
  <div class="landing">
    <div class="landingContents">
      <div>코스피</div>
      <div>코스닥</div>
    </div>
    <div class="landingContents">
      <h4 class="landingContentsTitle">인기 종목</h4>
      <AttentionStock />
    </div>
    <div class="landingContents">
      <h4 class="landingContentsTitle">관심 종목</h4>
      <AttentionStock />
    </div>
    <div class="infoNews landingContents">
      <h4 class="landingContentsTitle">주요뉴스</h4>
      <div>
        <NewsComponent />
        <NewsComponent />
        <NewsComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsComponent from "../components/news.vue";
import AttentionStock from "../components/attentionStock.vue";
@Options({
  components: {
    NewsComponent,
    AttentionStock,
  },
  data() {
    return {
      news: [
        {
          title: "",
          text: "",
          mainImage: "",
          time: new Date(),
          source: "나",
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
.infoNews {
}
.landingContentsTitle {
  margin: 10px 0;
}
</style>
