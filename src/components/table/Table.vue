<template>
    <div class="tb-table">
        <div hidden>
            <slot></slot>
        </div>
        <div :class="['tb-table-container', border ? 'tb-table-container--bordered' : 'tb-table-container--shadowed']">
            <div class="tb-table-title" v-if="title">{{title}}</div>
            <tb-table-head :heads="heads" :style="{width: width ? width : '100%'}"></tb-table-head>
            <tb-table-body :style="{width: width ? width : '100%', height: height ? height : ''}" :class="[height && !body.hasScrollBar ? 'tb-table-body--fixed-height' : '']">
            </tb-table-body>
        </div>
        <tb-row align="flex-start" padding="0">
            <slot name="pagination"></slot>
        </tb-row>
    </div>
</template>
