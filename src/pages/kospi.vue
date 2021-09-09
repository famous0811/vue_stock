<template>
  <div class="kospi">
    <div>test</div>
    <div class="kospiCharts">
      <div class="kospiChartsHeader">
        <div v-for="(option, idx) in options" :key="idx" class="headerOption">
          #{{ option }}
        </div>
      </div>
      <AttentionStock />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AttentionStock from "../components/attentionStock.vue";

@Options({
  components: {
    AttentionStock,
  },
})
export default class Kospi extends Vue {
  options = ["test1", "test1", "test1", "test1"];
}
</script>

<style scoped>
.kospi {
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.kospiCharts {
  width: 100%;
  margin: 10px 0;
  background: white;
  display: flex;
  flex-direction: column;
}
.kospiChartsHeader {
  display: flex;
  width: 100%;
  margin: 20px 0;
}
.headerOption {
  padding: 5px 10px;
  background: gray;
  border-radius: 20px;
  margin: 0 5px;
}
</style>
