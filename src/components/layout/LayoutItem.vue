<template>
    <div class="tb-layout-item" :style="style"><slot></slot></div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Prop } from "vue-class-decorator";

@Component({
    name: "tb-layout-item"
})
export default class LayoutItem extends Vue {
    @Prop({type: Number})
    private span!: number;
    @Inject("layout")
    private parent!: any;

    private mounted() {
        this.parent.totalLength += this.span;
    }

    private get style() {
        return {
            height: "100%",
            width: this.span / this.parent.totalLength * 100 + "%"
        }
    }
}
</script>


<style lang="less" scoped>
.tb-layout-item {
    padding: 0px;
    &+& {
        margin-left: 20px;
    }
}
</style>