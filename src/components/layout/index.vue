<template>
  <div>
    <header class="layoutHeader">
      <h2 class="headerTitle">
        <router-link to="/"> K증권 </router-link>
      </h2>
      <ul class="mainBox">
        <li
          v-for="(menu, index) in mainMenu"
          :key="index"
          class="mainContents"
          :class="menu.selected ? 'select' : ''"
        >
          <router-link :to="menu.url">
            {{ menu.text }}
          </router-link>
        </li>
      </ul>

      <ul class="rightBox">
        <li class="searchingBox">
          <transition name="searchanimation">
            <InputComponent
              type="text"
              borderBottom="1px solid #191919"
              padding="4px 5px"
              fontSize="14px"
              placeholder="찾으시는 종목을 입력하세요"
              v-on:keyup.enter="select"
              v-if="searchMode"
              @bind="selectBind"
              ref="test"
            />
          </transition>
          <div @click="teast">
            <i class="iconify sginup" data-icon="mdi:search" />
          </div>
          <!-- <SearchIcon @click="teast" /> -->
        </li>
        <li v-if="!login">
          <router-link to="/login">
            <i class="iconify sginup" data-icon="mdi:login"></i>
          </router-link>
        </li>
        <li v-else>
          <LoaderIcon @click="poplist = true" class="popupIcon" />
          <div class="popupground" @click="poplist = false" v-if="poplist" />
          <transition name="popupanimation">
            <div class="poplist" v-if="poplist">
              <h2 style="margin: 15px 0">MY</h2>
              <ul class="poplisthead">
                <li class="poplistheadList">#알림</li>
                <li class="poplistheadList">#최근조회</li>
                <li class="poplistheadList">#계좌잔고</li>
              </ul>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </header>
    <v-content>
      <!-- <v-container style="" class="fill-height" fluid> -->
      <router-view class="router-view"></router-view>
      <!-- </v-container> -->
    </v-content>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ButtonComponent from "../assets/button.vue";
import InputComponent from "../assets/input.vue";
@Options({
  components: {
    ButtonComponent,
    InputComponent,
  },
  methods: {
    select() {
      console.log(this.searchText);
    },
    selectBind(data: string) {
      this.searchText = data;
    },
    teast() {
      this.searchMode = !this.searchMode;
      if (this.searchMode) {
        setTimeout(() => {
          this.$refs.test.focus();
        }, 0.1);
      }
    },
  },
})
export default class Landing extends Vue {
  data() {
    return {
      searchMode: false,
      login: false,
      searchText: "",
      poplist: false,

      mainMenu: [
        {
          text: "국내증시",
          selected: false,
          url: "/kospi",
        },
        {
          text: "해외증시",
          selected: false,
          url: "/nyse",
        },
        {
          text: "뉴스",
          selected: false,
          url: "/news",
        },
      ],
    };
  }
}
</script>

<style lang="scss">
.layoutHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  height: 60px;
  background: white;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.headerTitle {
  width: 60%;
  min-width: fit-content;
  color: #487bff;
  cursor: pointer;
}

.router-view {
  width: 100%;
  height: 100vh;
  background-color: #f4f6f8;
  padding: 60px 0 0;
}
.sginup {
  font-size: 21px;
}
.mainBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 17px;
  height: 100%;
}
.mainContents {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #487bff;
    border-radius: 10px 10px 0 0;
    animation: hoverOut 0.5s;
  }
  &:hover {
    &::before {
      animation: hoverIn 0.3s ease forwards;
    }
  }
  @keyframes hoverIn {
    0% {
      height: 0;
    }
    100% {
      height: 5px;
    }
  }
  @keyframes hoverOut {
    0% {
      height: 5px;
    }
    100% {
      height: 0;
    }
  }
}
.select {
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: #487bff;
    border-radius: 10px 10px 0 0;
  }
}
.rightBox {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  & > li {
    margin: 0 5px;
    min-width: fit-content;
  }
}
.searchanimation-enter-active {
  animation: searchanimation-in 0.9s forwards;
}
.searchanimation-leave-active {
  animation: searchanimation-in 0.8s reverse;
}
@keyframes searchanimation-in {
  0% {
    width: 0px;
    opacity: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
.searchingBox {
  height: 24px;
  width: 100%;
  & > input {
    width: 100%;
    max-width: 400px;
  }
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
}

.popupIcon {
  cursor: pointer;
}
.popupground {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: none;
}
.poplist {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f0f7fc;
  /* border-left: 1px solid rgba(0, 0, 0, 0.2); */
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.24);
  width: 400px;
  height: 100%;
}

.popupanimation-enter-active {
  animation: popupanimation-in 0.9s;
}
.popupanimation-leave-active {
  animation: popupanimation-in 0.8s reverse;
}
@keyframes popupanimation-in {
  0% {
    width: 0px;
    opacity: 0;
  }
  100% {
    width: 400px;
    opacity: 1;
  }
}
.poplisthead {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 10px 0;
  white-space: nowrap;
}
.poplistheadList {
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.8s;
  &:hover {
    background: #191919;
  }
}
</style>
