<template>
    <div class="hy-layout"><slot></slot></div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-class-decorator";

@Component({
    name: "tb-layout"
})
export default class Layout extends Vue {
    @Provide("totalLength")
    private totalLength: number = 0;

    @Provide("AddLength")
    private AddLength(length: number) {
        this.totalLength += length;
    }
}
</script>


<style lang="less" scoped>
.hy-layout {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
</style>
