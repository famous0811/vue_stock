<template lang="">
  <button
    :style="{
      color: color,
      border: border,
      background: backGround,
      fontSize: fontSize,
      padding: padding,
      borderRadius: borderRad,
      fontWeight: fontWeight,
      margin: margin,
      cursor: 'pointer',
    }"
    v-text="text"
    :class="{ typesign: typesign }"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "buttonasset",
  props: {
    color: {
      type: String,
      default: "#191919",
    },
    text: {
      type: String,
      required: true,
      default: "button",
    },
    border: {
      type: String,
      default: "none",
    },
    backGround: {
      type: String,
      default: "none",
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
    fontWeight: {
      type: String,
      default: "regular",
    },
    margin: {
      type: String,
      default: "none",
    },
    typesign: {
      type: Boolean,
      default: false,
    },
  },
})
export default class Button extends Vue {}
</script>

<style lang="scss">
.typesign {
  transition: color 0.5s;
  background: #487bff !important;
  &:hover {
    color: white !important;
  }
}
</style>
