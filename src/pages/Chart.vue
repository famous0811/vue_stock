<template lang="">
  <div>
    <div v-text="this.props.title" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: String,
  },
})
export default class Landing extends Vue {
  data() {
    return {
      test: "test",
    };
  }
}
</script>

<style lang="scss"></style>
