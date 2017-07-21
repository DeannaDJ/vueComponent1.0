<template>
    <div class="v-datepicker" v-show="show"  @click="onClose">
        <div class="full-fade" :class='{"ani fade-in": display}'></div>
        <div class="sl-wrap" :class='{"ani show-in": display,"ani show-out": !display}' @click.stop="">
            <div class="sl-hd">
                <label class="sl-c" v-if="canceltext" @click="onClose">{{canceltext}}</label>
                <label class="sl-t" v-if="title">{{title}}</label>
                <label class="sl-s" v-if="suretext" @click="onSure">{{suretext}}</label>
            </div>
            <div class="sl-cc">
                <div class="sl-cc-box" @touchstart.stop="onTouchstart($event, 'year')"
                    @touchmove.stop="onTouchmove($event, 'year')" @touchend.stop="onTouchend($event, 'year')">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+yeartop+'px'">
                        <li v-for="year in years" :class="{'active': +year==+currYear}" @click="onSelectYear(year)">{{year}}</li>
                    </ul>
                </div>
                <div class="sl-cc-box" @touchstart.stop="onTouchstart($event, 'month')"
                    @touchmove.stop="onTouchmove($event, 'month')" @touchend.stop="onTouchend($event, 'month')">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+monthtop+'px'">
                        <li v-for="month in months" :class="{'active': +month==1+currMonth}" @click="onSelectMonth(month-1)">{{month|toZero}}</li>
                    </ul>
                </div>
                <div class="sl-cc-box" @touchstart.stop="onTouchstart($event, 'day')"
                    @touchmove.stop="onTouchmove($event, 'day')" @touchend.stop="onTouchend($event, 'day')">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+daytop+'px'">
                        <li v-for="day in days" :class="{'active': +day==+currDay}" @click="onSelectDay(day)">{{day|toZero}}</li>
                    </ul>
                </div>
                <div v-if="hours.length" class="sl-cc-box" @touchstart.stop="onTouchstart($event, 'hour')"
                    @touchmove.stop="onTouchmove($event, 'hour')" @touchend.stop="onTouchend($event, 'hour')">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+hourtop+'px'">
                        <li v-for="hour in hours" :class="{'active': +hour==+currHour}" @click="onSelectHour(hour)">{{hour|toZero}}</li>
                    </ul>
                </div>
                <div v-if="minutes.length"  class="sl-cc-box" @touchstart.stop="onTouchstart($event, 'minute')"
                    @touchmove.stop="onTouchmove($event, 'minute')" @touchend.stop="onTouchend($event, 'minute')">
                    <div class="sl-active-bg"></div>
                    <ul :style="'top:'+minutetop+'px'">
                        <li v-for="minute in minutes" :class="{'active': +minute==+currMinute}" @click="onSelectMinute(minute)">{{minute|toZero}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// datepicker样式
import './lib/show-in-out';
import './static/style.vue';

// datepicker.js
import datepicker from './static/datepicker.js'
export default datepicker

</script>
