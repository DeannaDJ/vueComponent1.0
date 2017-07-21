

<template>

<div class="v-suggest" :class="{skin: skin}">
    <input type="input" placeholder="{{inputHolder}}" class="suggest-input"
        v-model="queryValue" @focus="_onFocus" @blur="_onClear($event)" @keydown="_onKeydown($event)">
    <div class="suggest-panel" v-if="suggestList.length">
        <ul>
            <li v-for="item in suggestList" :class="{'selected': $index==currentIndex}"
                v-html="item|filterDisplay" @click="_onSelect(item)"></li>
        </ul>
    </div>
</div>

</template>

<script>

// suggest样式
import './static/style.vue';

// suggest.js
import suggest from './static/suggest.js'
export default suggest

</script>
