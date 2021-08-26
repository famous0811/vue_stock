<template lang="">
  <div>
    <header>
      <h1 class="title">K증권</h1>

      <ul class="rightBox">
        <li class="searchingBox">
          <transition name="bounce">
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
          <LoaderIcon />
        </li>
      </ul>
    </header>

    <router-view class="router-view"></router-view>
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
      searching: false,
      login: false,
      searchMode: false,
      searchText: "",
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
  box-shadow: 5px 6px 5px rgba(0, 0, 0, 0.2);
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
.bounce-enter-active {
  animation: bounce-in 0.9s forwards;
}
.bounce-leave-active {
  animation: bounce-in 0.8s reverse;
}
@keyframes bounce-in {
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
</style>
