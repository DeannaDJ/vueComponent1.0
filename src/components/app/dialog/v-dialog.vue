

<template>

<div class='v-dialog' v-if="display" :class='{skin:skin!=""}' v-show='show'>
    <div class='dialog' :class='{"ani fadeInDownBig": show}'>
        <div class='hd' v-if='title' v-text='title'></div>
        <div class='bd'><slot></slot></div>
        <div class='ft'>
            <span v-for='item in buttons'
                :class="{'cancel-btn':item.type=='cancel'}"
                @click='_onClick(item)'>
                <i class="i-icon"></i>
            </span>
        </div>
    </div>
</div>

</template>

<script>

// dialog样式
import './lib/fade-in-down';
import './static/style.vue';

// dialog.js
import dialog from './static/dialog.js';
export default dialog

</script>
