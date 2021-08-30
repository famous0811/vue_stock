<template>
  <!-- <div class="attentionStock"> -->
  <table class="attentionStockTable">
    <tr class="attentionStockHeader">
      <td
        v-for="(header, index) in headers"
        :key="index"
        class="attentionStockHeaderContents"
      >
        {{ header.text }}
      </td>
    </tr>
    <tr
      v-for="(dessert, index) in desserts"
      :key="index"
      class="attentionStockDessert"
    >
      <td class="attentionStockDessertContents">
        <div>{{ dessert.title.name }}</div>
        <span class="titleCode">{{ dessert.title.code }}</span>
      </td>
      <td class="attentionStockDessertContents">
        <div>{{ dessert.value.now }}</div>
        <span class="valueIncrease plus">{{ dessert.value.increase }}</span>
      </td>
      <td class="attentionStockDessertContents">
        <div class="contentsDiff plus">
          {{ dessert.diff }}
        </div>
      </td>
      <td class="attentionStockDessertContents">{{ dessert.marketvalue }}</td>
      <td class="attentionStockDessertContents">{{ dessert.trading }}</td>
    </tr>
  </table>
</template>
<script>
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      loadingState: true,
      headers: [
        {
          text: "종목",
          value: "title",
          sortable: false,
        },
        {
          text: "시세",
          value: "value",
          sortable: false,
        },
        {
          text: "전일비",
          value: "diff",
          sortable: false,
        },
        {
          text: "시가총액",
          value: "marketvalue",
          sortable: false,
        },
        {
          text: "거래량",
          value: "trading",
          sortable: false,
        },
      ],
      desserts: [
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
      ],
    };
  },
})
export default class AttentionStock extends Vue {}
</script>
<style lang="scss">
.attentionStockTable {
  width: 100%;
  /* text-align: center; */
}
.attentionStockHeader {
  /* background-color: rgba(72, 123, 255, 0.5); */

  font-size: 13px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  flex-shrink: 1;
  width: 100%;
  padding: 10px 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.5);
}
.attentionStockDessert {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: all 0.5s;
  padding: 7px 0 8px;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
}
.attentionStockHeaderContents {
  width: 100%;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    color: rgba(0, 0, 0, 0.75);
  }
}
.attentionStockDessertContents {
  /* flex-shrink: 1; */
  font-weight: bold;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contentsDiff {
  color: white;

  &.minus {
    background-color: #077df3;
    &::before {
      content: "−";
    }
  }
  &.none {
    background-color: #bbbbbb;
    &::before {
      content: "−";
    }
  }
  &.plus {
    background-color: #ec3738;
    &::before {
      transform: translateY(-50%);
      content: "+";
    }
  }
  border-radius: 5px;
  width: fit-content;
  padding: 8px 13px;
  font-size: 12px;
  letter-spacing: 0.8px;
}

.titleCode {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.valueIncrease {
  position: relative;
  font-size: 12px;
  &::before {
    position: absolute;
    left: -13px;
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
</style>
