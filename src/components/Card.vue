<template>
    <div class="tb-card">
        <div class="tb-card-title" v-if="title"><span class="tb-card-title-text">{{title}}</span></div>
        <div class="tb-card-container"></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-class-decorator";
import Row from "./Row.vue";

@Component({
    name: "tb-card",
    components: {
        Row
    }
})
export default class Card extends Vue {
    @Prop(String) private title!: string;
}
</script>

<style lang="less" scoped>
.tb-card {
    background: #fff;
    border-radius: 5px;
    margin-top: 2px;
    min-height: 80px;
    box-shadow: 1px 1px 1px 1px #d0d3da;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #d0d3da;

    &+& {
        margin-top: 20px;
    }

    &-title {
        height: 40px;
        justify-content: flex-start;
        display: flex;
        align-items: center;
        padding: 0 12px;
        background-color: #f3f3f3;
        border-bottom: 1px solid #e4e6e7;
    }
    &-container {
        flex: 1;
        display: block;
        padding: 12px;
    }
}
</style>
