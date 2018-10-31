<template functional>
    <div class="tb-card" :style="[data.style, data.staticStyle]" :class="[data.class, data.staticClass]">
        <div class="tb-card-title" v-if="props.title"><span class="tb-card-title-text">{{props.title}}</span></div>
        <div class="tb-card-container">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-class-decorator";

@Component({
    name: "tb-card"
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
    box-shadow: 0px 0px 8px 0px rgba(208, 211, 218, 0.21), 0px 1px 8px 0px rgba(208, 211, 218, 0.67);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #dcdfe6;

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
