

<template>

<div class="v-loading" v-show="show">
    <div class="loading-fade"></div>
    <div class="inner-loading">
        <span class="inner"><i class="i-icon"></i></span>
    </div>
</div>

</template>

<script>

// loading样式
import './static/style.vue';

// loading.js
import loading from './static/loading.js'
export default loading

</script>
