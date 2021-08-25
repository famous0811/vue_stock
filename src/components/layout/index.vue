<template lang="">
    <div>
        <header>
            <h1>K증권</h1>
            <div class="search">
                <input type="text" class="searchInput" placeholder="찾으시는 종목을 입력하세요" v-on:keyup.enter="select" v-model="input" />
                <v-icon>search</v-icon>
            </div>
            <ul v-if="!login" class="sign">
                <li>
                    <ButtonComponent color="black" text="로그인" :typesign="true"/>
                </li>
                <li>
                    <ButtonComponent color="black" text="회원가입" typesign/>
                </li>
            </ul>
            <ul v-else>
                <li>=</li>
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
    components:{
        ButtonComponent
    },
    methods: {
        select() {
            console.log(this.input);
            // if(this.text==="") return;
            // alert(this.text);
        }
    }
})
export default class Landing extends Vue {
    data() {
        return {
            searching: false,
            login: false,
            input: ""
        }
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
}

.search {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    transition: all 0.6s;
    margin-left: 30px;
    display: flex;
}

.searchInput {
    border: none;
    width: 100%;
    padding: 4px 0;
    border-bottom: 1px solid #191919;
}

.router-view {
    width: 100%;
    height: 100%;
    padding: 60px 0 0;
}

.sign {
    display: flex;
    &>li {
        margin: 0 5px;
    }
}
</style>