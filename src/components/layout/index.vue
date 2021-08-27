<template lang="">
  <div>
    <header>
      <h1 class="title">K증권</h1>
      <ul class="rightBox">
        <li class="searchingBox">
          <transition name="searchanimation">
            <input
              type="text"
              class="searchInput"
              placeholder="찾으시는 종목을 입력하세요"
              v-on:keyup.enter="select"
              v-model="input"
              v-if="searchMode"
            />
          </transition>
          <SearchIcon @click="searchMode = !searchMode" />
        </li>
        <li v-if="login">
          <ButtonComponent
            color="black"
            text="로그인"
            :typesign="true"
            borderRad="20px"
            padding="7px 20px"
          />
        </li>
        <li v-if="login">
          <ButtonComponent
            color="black"
            text="회원가입"
            borderRad="20px"
            padding="7px 20px"
            :typesign="true"
          />
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
    <v-content style="background-color: #f4f6f8">
      <v-container class="fill-height" fluid>
        <router-view class="router-view"></router-view>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ButtonComponent from "../assets/button.vue";
//TODO: implement
@Options({
  components: {
    ButtonComponent,
  },
  methods: {
    select() {
      console.log(this.searchText);
    },
  },
})
export default class Landing extends Vue {
  data() {
    return {
      // searching: false,
      searchMode: false,
      login: false,
      searchText: "",
      poplist: false,
      news: [
        {
          title: "코스피 떡락?",
          content: "ㅋㅋㅋㅋㅋㅋ",
        },
      ],
    };
  }
}
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  height: 60px;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.2);
}

.searchInput {
  border: none;
  width: 100%;
  padding: 4px 5px;
  border-bottom: 1px solid #191919;
  font-family: "";
}

.router-view {
  width: 100%;
  height: 100%;
  padding: 60px 0 0;
}
.title {
  width: 100%;
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
