<template>
  <div class="news">
    <div class="newsWrap">
      <div class="newsImg">
        <img :src="mainImage" alt="" v-if="mainImage != 'none'" />
        <NewsImg v-else style="width: 100%; height: 100%" />
      </div>
      <div class="newsContent">
        <h3 class="newsTitle">{{ title }}</h3>
        <p class="newsText">{{ text }}</p>
        <div class="newsInfo">
          <div>{{ source }}</div>
          <div>{{ time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NewsImg from "@/assets/images/newspaper.vue";
@Options({
  components: {
    NewsImg,
  },
  props: {
    title: {
      type: String,
      default: "삼전 떡락",
    },
    text: {
      type: String,
      default: "삼전 떡락 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
    },
    mainImage: {
      type: String,
      default: "none",
    },
    time: {
      type: String,
      default: new Date(),
    },
    source: {
      type: String,
      default: "내 생각ㅎ",
    },
  },
})
export default class News extends Vue {}
</script>

<style lang="scss">
.news {
  width: 100%;
  height: 100%;
  max-height: 250px;
  padding: 20px 30px;
}
.newsWrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
  padding: 10px 0;
}
.newsImg {
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
  border-radius: 10px;
}
.newsContent {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  line-height: 1.8rem;
}
.newsTitle {
  margin: 7px 0;
}
.newsText {
  line-height: 1.2rem;
  font-size: 15px;
  margin: 0;
}
.newsInfo {
  display: flex;
  color: gray;
  font-size: 11px;
  & > :first-child {
    margin-right: 5px;
  }
}
</style>
