

<template>

<div class="v-action" @click="_onClose" v-if="display" v-show="show" :class="{'show': show,'fullscreen':fullscreen}">
    <ul class="action-btn" :class="{'ani fade-in-up': show, 'cancel': cancel}">
        <li v-for="item in list" @click="_onAction(item)">{{item.name}}</li>
    </ul>
</div>

</template>

<script>

// action样式
import './lib/fade-in-up';
import './static/style.vue';

// action.js
import action from './static/action.js'
export default action

</script>
