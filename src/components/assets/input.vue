<template lang="">
  <input
    v-model="input"
    :style="{
      color: color,
      border: border,
      background: backGround,
      fontSize: fontSize,
      padding: padding,
      borderBottom: borderBottom,
      borderRadius: borderRad,
      margin: margin,
      fontFamily: fontFamily,
    }"
    :class="{ typesign: typesign }"
    ref="input"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "inputasset",
  props: {
    color: {
      type: String,
      default: "#191919",
    },
    border: {
      type: String,
      default: "none",
    },
    borderBottom: {
      type: String,
      default: "none",
    },
    backGround: {
      type: String,
      default: "none",
    },
    fontFamily: {
      type: String,
      default: "Noto Sans KR",
    },
    fontSize: {
      type: String,
      default: "17px",
    },
    padding: {
      type: String,
      default: "10px 20px",
    },
    borderRad: {
      type: String,
      default: "none",
    },
    margin: {
      type: String,
      default: "none",
    },
  },
  data() {
    return {
      input: "",
    };
  },
  watch: {
    input: {
      handler() {
        this.$emit("bind", this.input);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
})
export default class Button extends Vue {}
</script>

<style lang="scss"></style>
