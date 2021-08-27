<template>
  <div class="news">
    <div class="newsWrap">
      <div class="newsImg">
        <img src="" alt="" v-if="mainImage != 'none'" />
      </div>
      <div class="newsContent">
        <h3 class="newsTitle">{{ title }}</h3>
        <div class="newsText">{{ content }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
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
  },
})
export default class News extends Vue {}
</script>

<style lang="scss"></style>
