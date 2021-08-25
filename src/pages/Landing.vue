<template>
    <div class="landing">
        <div>
            <div>코스피</div>
            <div>코스닥</div>
        </div>
        <div>
        인기 종목
            // table
        </div>
        <div>
        거래량
            // table
        </div>
        <div>
            <div>코스피</div>
            <div>코스닥</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Landing extends Vue {
    data() {
        return {
            test: "test",
        }
    }
}
</script>

<style lang="scss">
 .landing {
  width:100%;
  height:100%;
  padding:0 20px;
}
</style>
