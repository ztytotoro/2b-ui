<template functional>
    <button :class="['tb-btn','tb-btn-' + props.type]" v-on="listeners" :disabled="props.disabled">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-class-decorator";

@Component
export default class Button extends Vue {
    @Prop({type: String, default: "default"}) private type!: string;
    @Prop(Boolean) private disabled!: boolean;
}
</script>

<style lang="less" scoped>
.tb-btn {
    width: 92px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    font-weight: normal;
    outline: none;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    touch-action: manipulation;
    white-space: nowrap;
    border-radius: 4px;
}

.tb-btn+.tb-btn {
    margin-left: 10px;
}

.tb-btn-default {
    border: 1px solid #bfbfbf;
    background-color: #fff;
}

.tb-btn-default:hover {
    border-color: #4d99e0;
    color: #4d99e0;
}

.tb-btn-default:active {
    background-color: #1c699f;
    color: #fff;
}

.tb-btn-primary {
    background-color: #4d99e0;
    border: 1px solid #4d99e0;
    color: #fff
}

.tb-btn-primary:hover {
    background-color: #217ebd;
    color: #fff;
}

.tb-btn-primary:active {
    background-color: #1c699f;
    color: #fff;
}

.tb-btn-text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    width: unset;
}

.tb-btn-text:focus {
    color: #66b1ff;
    border-color: transparent;
    background-color: transparent;
}

.tb-btn:disabled {
    color: #737477;
    border: 1px solid #bfbfbf;
    background-color: #e6e6e6;
    cursor: default;
}

.tb-btn-text:disabled{
    background: transparent;
    border: none;
}
</style>
