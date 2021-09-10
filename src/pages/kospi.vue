<template>
  <div class="kospi">
    <div>
      <Slider :propsdata="mainchart" :autoslide="true" :autoTime="4500" />
    </div>
    <div class="kospiCharts">
      <div class="kospiChartsHeader">
        <div
          v-for="(option, idx) in options"
          :key="idx"
          class="headerOption"
          :class="show === option && 'nowShow'"
          @click="changeShow(option)"
        >
          #{{ option }}
        </div>
      </div>
      <AttentionStock :propsdesserts="desserts" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AttentionStock from "@/components/attentionStock.vue";
import Slider from "@/components/assets/slider.vue";
@Options({
  components: {
    AttentionStock,
    Slider,
  },
})
export default class Kospi extends Vue {
  options = ["시총", "상승", "하락", "상장"];
  show = "시총";
  mainchart = [
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
  ];
  desserts = [
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
    {
      title: {
        name: "삼성전자",
        code: "005930",
      },
      value: {
        now: "74,300",
        increase: "300",
      },
      diff: "10.3%",
      marketvalue: "4,429,579(억)",
      trading: "12,158,306",
    },
  ];
  changeShow(option: string): void {
    this.show = option;
  }
}
</script>

<style scoped lang="scss">
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
@mixin effect {
  font-weight: bold;
  color: #487bff;
  background: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
}
.headerOption {
  padding: 5px 10px;
  background: #487bff;
  border-radius: 20px;
  margin: 0 5px;
  transition: all 0.5s;
  cursor: pointer;
  color: white;
  &:hover {
    @include effect;
  }
  &.nowShow {
    @include effect;
  }
}
</style>
