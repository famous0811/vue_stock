<template>
  <div class="login">
    <div class="loginWrap">
      <form
        action="javascript:void(0);"
        @submit.prevent="signIn"
        class="loginForm"
      >
        <FinanceImage class="loginImg" />
        <h2 style="margin: 10px 0">K증권 시작하기!</h2>
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
          회원가입 하러가기</router-link
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
  </div>
</template>
<script lang="ts">
import { onBeforeMount, onMounted } from "vue";
import { Options, Vue } from "vue-class-component";
import InputComponent from "../components/assets/input.vue";
import ButtonComponent from "../components/assets/button.vue";

@Options({
  components: {
    InputComponent,
    ButtonComponent,
  },
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      if (this.id === "") {
        alert("id를 입력해주세요!");
        console.log(this.$refs.test.functionYouWantToCall());
        this.idfocus();
        return;
      }
      if (this.password === "") {
        alert("비밀번호를 입력해주세요!");
        this.$refs.userpassword.focus();
        return;
      }

      // this.$store.dispatch("SIGN_IN", {
      //   userid: this.id,
      //   password: this.password,
      // });
      this.$router.push("/");
    },

    idfocus() {
      this.$refs.userid.focus();
    },

    userIdBind(data: string) {
      this.id = data;
    },
    passwordBind(data: string) {
      this.password = data;
    },
  },
  mounted() {
    this.idfocus();
  },
})
export default class Landing extends Vue {}
</script>
<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loginWrap {
  padding: 30px;
  max-width: 500px;
  width: 100%;
  border-radius: 10px;
  background: white;
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
