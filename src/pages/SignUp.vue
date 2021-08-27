<template lang="">
  <div>
    <h2 style="text-align: start; margin: 10px 0">K증권 이용하기!</h2>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    signUp() {
      if (this.id === "" || this.password === "") return;
      this.$store.dispatch("SIGN_UP", {
        userid: this.id,
        password: this.password,
      });
    },
  },
})
export default class Sigin extends Vue {
  data() {
    return {
      id: "",
      password: "",
    };
  }
}
</script>

<style lang=""></style>
