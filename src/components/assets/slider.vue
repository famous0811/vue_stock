<template>
  <div class="sliderWrap">
    <div class="slider">
      <div class="sliderMain">
        <div
          v-for="(item, index) in datas"
          :key="index"
          :class="'active' + nowShow"
          class="sliderContents"
        >
          <h4 class="chartName">{{ item.name }}</h4>
          <div class="chartVale">{{ item.value }}</div>
          <div class="chartData">
            <span class="chartIncrease plus">{{ item.increase }}</span>
            <span class="chartDiff plus">{{ item.diff }}</span>
          </div>
        </div>

        <div class="slidercontroler">
          <div v-for="(data, index) in dataControler" :key="index">
            <input
              type="radio"
              name="control"
              :id="'controler' + index"
              :checked="data.show"
              @click="controlMove(index)"
              class="asdf"
              style="display: none"
            />
            <label :for="'controler' + index">
              <div class="movebox" />
            </label>
          </div>
        </div>
        <button class="sliderbtn left" @click="leftMove">
          <i class="iconify" data-icon="mdi:chevron-left" />
        </button>
        <button class="sliderbtn right" @click="rightMove">
          <i class="iconify" data-icon="mdi:chevron-right" />
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  props: {
    //false in true out
    sliderbtnInOut: {
      type: Boolean,
      default: false,
    },
    Infinity: {
      type: Boolean,
      default: true,
    },
    autoslide: {
      type: Boolean,
      default: true,
    },
    autoTime: {
      type: Number,
      default: 3000,
    },
    propsdata: {
      type: Array,
    },
  },
  data() {
    return {
      nowShow: 1,
      dataLength: 0,
      datas: [],
      dataControler: [],
    };
  },
  created() {
    this.datas = this.propsdata;
    this.dataLength = this.datas.length / 2;

    for (var i = 0; i < this.dataLength; i++) {
      this.dataControler.push({ show: false });
    }
    this.dataControler[0].show = true;

    if (this.autoslide) {
      setInterval(() => {
        this.rightMove();
      }, this.autoTime);
    }
  },
  methods: {
    leftMove() {
      this.dataControler[this.nowShow - 1].show = false;
      if (this.nowShow - 1 > 0) {
        this.nowShow--;
      } else {
        this.nowShow = this.dataLength;
      }
      this.dataControler[this.nowShow - 1].show = true;
    },
    rightMove() {
      this.dataControler[this.nowShow - 1].show = false;
      if (this.nowShow < this.dataLength) {
        this.nowShow++;
      } else {
        this.nowShow = 1;
      }
      this.dataControler[this.nowShow - 1].show = true;
    },
    controlMove(now: number) {
      this.nowShow = now + 1;
    },
  },
})
export default class Slider extends Vue {}
</script>

<style lang="scss">
.sliderWrap {
  background: $white;
  /* height: 100vh; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}
.sliderbtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  &.left {
    left: 80px;
  }
  &.right {
    right: 80px;
  }
  border: none;
  background: none;
  & > * {
    width: 36px;
    height: 36px;
    transition: color 0.5s;
    &:hover {
      color: $white;
    }
  }
}
.sliderMain {
  position: relative;
  overflow: hidden;
  max-width: 3200px; //변경
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-flow: column wrap;
}

.sliderContents {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  transition: transform 0.8s;
  &.active1 {
    transform: translateX(0);
  }
  &.active2 {
    transform: translateX(-200%);
  }
  &.active3 {
    transform: translateX(-300%);
  }
  &.active4 {
    transform: translateX(-400%);
  }
  &.active5 {
    transform: translateX(-500%);
  }
  &.active6 {
    transform: translateX(-600%);
  }
}
.slidercontroler {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  display: flex;
}
.movebox {
  width: 10px;
  height: 10px;
  background: $white;
  border-radius: 20px;
  margin: 3px 5px 0;
  position: relative;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    background: $black;
    transform: scale(1.5);
  }
}
.asdf:checked + label > .movebox {
  background: $black;
  transform: scale(1.5);
}
</style>
