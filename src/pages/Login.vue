<template>
  <div class="loginWrap">
    <transition name="logintest">
      <div class="login">
        <div @click="backHome" class="loginBackbtn">
          <i class="iconify" data-icon="mdi:close" />
        </div>
        <form
          action="javascript:void(0);"
          @submit.prevent="signIn"
          class="loginForm"
        >
          <FinanceImage class="loginImg" />
          <h2 style="margin: 10px 0">
            <strong style="color: #487bff">K증권</strong>
            시작하기!
          </h2>
          <InputComponent
            type="text"
            borderBottom="1px solid black"
            margin="10px 0"
            padding="7px 5px"
            placeholder="아이디를 입력해주세요!"
            fontFamily="Roboto"
            @bind="userIdBind"
            ref="userid"
          />
          <InputComponent
            type="password"
            v-model="password"
            borderBottom="1px solid black"
            margin="10px 0"
            padding="7px 5px"
            placeholder="비밀번호를 입력해주세요!"
            @bind="passwordBind"
            ref="userpassword"
          />
          <router-link to="/signup" class="loginToSignup">
            회원가입</router-link
          >
          <ButtonComponent
            text="로그인"
            backGround="#f0f7fc"
            borderRad="10px"
            margin="5px 0"
            type="submit"
            class="loginbtn"
          />
        </form>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
//TODO: implement
/*구글,네이버등 으로 로그인 할수 있는 버튼 만들기 로그인 회원가입 둘다 */

import { Options, Vue } from "vue-class-component";
import InputComponent from "../components/assets/input.vue";
import ButtonComponent from "../components/assets/button.vue";

@Options({
  components: {
    InputComponent,
    ButtonComponent,
  },

  methods: {
    signIn() {
      if (this.id === "") {
        alert("id를 입력해주세요!");
        this.idfocus();
        return;
      }
      if (this.password === "") {
        alert("비밀번호를 입력해주세요!");
        this.passwordfocus();
        return;
      }

      // this.$store.dispatch("SIGN_IN", {
      //   userid: this.id,
      //   password: this.password,`
      // });

      this.$router.push("/");
    },

    idfocus() {
      this.$refs.userid.focus();
    },
    passwordfocus() {
      this.$refs.userpassword.focus();
    },

    userIdBind(data: string) {
      this.id = data;
    },
    passwordBind(data: string) {
      this.password = data;
    },
    backHome() {
      this.$router.push("/");
    },
  },

  mounted() {
    this.idfocus();
  },
})
export default class Landing extends Vue {
  id = "";
  password = "";
}
</script>
<style lang="scss">
.loginWrap {
  width: 100vw;
  height: 100vh;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login {
  padding: 30px;
  max-width: 500px;
  width: 100%;
  border-radius: 10px;
  background: white;

  position: relative;

  animation: onload 2.5s forwards;

  @keyframes onload {
    0% {
    }
    100% {
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }
  }
}
.loginBackbtn {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.5);
  }
}
.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.loginImg {
  max-width: 400px;
  max-height: 300px;
}
.loginbtn {
  transition: all 0.5s;
  &:hover {
    background-color: #487bff !important;
    color: white !important;
  }
}
.loginToSignup {
  width: 100%;
  text-align: end;
  transition: font-weight 0.5s, font-weight 0.5s;
  &:hover {
    font-weight: 600;
    color: #487bff;
  }
}
</style>
