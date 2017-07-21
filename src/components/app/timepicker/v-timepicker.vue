<template>

<div class='v-timepicker' v-if="display" :class='{skin:skin!=""}' v-show='show'>
    <div class='timepicker' :class='{"ani fadeInDownBig": show}'>
        <div class='hd'>{{year}}年 {{month}}月 {{day}}日</div>
        <div class='bd'>
            <dl class='time'>
                <dd class="f24">{{hour}} 时 {{minute}} 分</dd>
            </dl>
            <dl class='hour'>
                <dt class="hour-label">时</dt>
                <dd>
                    <div class="hour-slider slider j-hour j-slider" aria-disabled="false">
                        <a class="state-default" :style="{'left':hourLeft+'px'}"
                            @touchstart="onTouchstart($event, 'hour')" @touchmove="onTouchmove($event, 'hour')"></a>
                    </div>
                </dd>
            </dl>
            <dl class='minute'>
                <dt class="minute-label">分</dt>
                <dd>
                    <div class="minute-slider slider j-min j-slider" aria-disabled="false">
                        <a class="state-default" :style="{'left':minLeft+'px'}"
                            @touchstart="onTouchstart($event, 'min')" @touchmove="onTouchmove($event, 'min')"></a>
                    </div>
                </dd>
            </dl>
        </div>
        <div class='ft'>
            <span class="cancel-btn" @click='onClose'>
                <i class="i-icon"></i>
            </span>
            <span @click='onSure'>
                <i class="i-icon"></i>
            </span>
        </div>
    </div>
</div>

</template>

<script>

// timepicker样式
import './lib/fade-in-down';
import './static/style.vue';

// timepicker.js
import timepicker from './static/timepicker.js';
export default timepicker

</script>
