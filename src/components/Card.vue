<template>
    <div class="hy-card">
        <Row padding="0" class="hy-card-title" v-if="title"><span class="hy-card-title-text">{{title}}</span></Row>
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
.hy-card {
    background: #fff;
    border-radius: 5px;
    margin-top: 2px;
    min-height: 80px;
    padding: 12px;
    box-shadow: 1px 1px 1px 1px #d0d3da;

    &+& {
        margin-top: 20px;
    }

    &-title {
        margin-bottom: 8px;
    }
}
</style>
