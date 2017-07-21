<template>

<div class='v-canlendarpicker' v-if="display" :class='{skin:skin!=""}' v-show='show'>
    <div class='canlendarpicker' :class='{"ani fadeInDownBig": show}'>
        <div class='hd'>
            <div class="year">
                <span class="year-first">{{year}}年</span>
                <span class="year-sec">{{year+1}}年</span>
            </div>
            <div class="week">

            </div>
        </div>
        <div class='bd'>

        </div>
    </div>
</div>

</template>

<script>

// canlendarpicker样式
import './lib/fade-in-down';
import './static/style.vue';

// canlendarpicker.js
import canlendarpicker from './static/canlendarpicker.js';
export default canlendarpicker

</script>
