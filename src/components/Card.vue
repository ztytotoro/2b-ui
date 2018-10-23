<template functional>
    <div class="tb-card">
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
    box-shadow: 1px 1px 4px 1px #d0d3daba;
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
