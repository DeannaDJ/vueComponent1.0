

<template>

<div class="v-select" v-if="show" @click="_onClose">
    <div class="full-fade" :class='{"ani fade-in": display}'></div>
    <div class="sl-wrap">
        <div class="sl-cont" :class='{"ani show-in": display,"ani show-out": !display}' @click.stop="">
            <div class="sl-hd">
                <label class="sl-c" v-if="canceltext" @click="_onClose">{{canceltext}}</label>
                <label class="sl-t" v-if="title">{{title}}</label>
                <label class="sl-s" v-if="suretext" @click="_onSure">{{suretext}}</label>
            </div>
            <div class="sl-cc">
                <div class="sl-cc-box" id="sl-cc-box" v-if="group == 2" @touchstart.stop="_onGroupTouchstart" @touchmove.stop="_onGroupTouchmove" @touchend.stop="_onGroupTouchend">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+grouptop+'px'">
                        <li v-for="(key,item) in groupList" :class="{'active': $index==groupcurrentIndex}" @click="_onSelectGroup($index, key)">{{key}}</li>
                    </ul>
                </div>
                <div class="sl-cc-box" id="sl-cc-box" @touchstart.stop="_onTouchstart" @touchmove.stop="_onTouchmove">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+top+'px'">
                        <li v-for="item in selectList" track-by="$index" :class="{'active': $index==currentIndex}" @click="_onSelect($index)">{{item | filterDisplay}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

// select样式
import './lib/show-in-out';
import './static/style.vue';

// select.js
import select from './static/select.js'
export default select

</script>
