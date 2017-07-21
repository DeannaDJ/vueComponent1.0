

<template>

<div class="v-toast" :class="[showName, position]">
    <span><slot></slot></span>
</div>

</template>

<script>

// toast样式
import './static/style.vue';

// toast.js
import toast from './static/toast.js'
export default toast

</script>
