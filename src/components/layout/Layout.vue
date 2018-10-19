<template>
    <div class="hy-layout"><slot></slot></div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-class-decorator";

@Component({
    name: "2b-layout"
})
export default class Layout extends Vue {
    @Provide("children")
    private children: number[] = [];

    @Provide("totalLength")
    public get totalLength() {
        let length = 0;
        for (const item of this.children) {
            length += item;
        }
        return length;
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
