<template>
    <div class="tb-layout"><slot></slot></div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-class-decorator";

@Component({
    name: "tb-layout"
})
export default class Layout extends Vue {
    private totalLength: number = 0;

    @Provide("layout")
    private THIS: any = this;
}
</script>


<style lang="less" scoped>
.tb-layout {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
</style>
