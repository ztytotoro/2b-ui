<template>
    <div class="hy-table">
        <div hidden>
            <slot></slot>
        </div>
        <div :class="['hy-table-container', border ? 'hy-table-container--bordered' : 'hy-table-container--shadowed']">
            <div class="hy-table-title" v-if="title">{{title}}</div>
            <hy-table-head :heads="heads" :style="{width: width ? width : '100%'}"></hy-table-head>
            <hy-table-body :style="{width: width ? width : '100%', height: height ? height : ''}" :class="[height && !body.hasScrollBar ? 'hy-table-body--fixed-height' : '']">
            </hy-table-body>
        </div>
        <hy-row align="flex-start" padding="0">
            <slot name="pagination"></slot>
        </hy-row>
    </div>
</template>
