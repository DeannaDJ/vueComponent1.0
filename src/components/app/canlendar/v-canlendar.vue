

<template>

<div class="v-canlendar" v-show="show">
    <div class="header">
        <div class="title">{{startDate | filterFormat 'MM-dd'}}入住&nbsp;共{{totalNights}}晚</div>
        <span class="regret" @click="onCancel">取消</span>
        <span class="affirm" @click="onSure">确定</span>
    </div>
    <div class="flex">
        <section class="canlendar">
            <div class="weeks" v-for="months in calendarList">
                <h3 class="month-bar">{{months.year}}年{{months.month}}月</h3>
                <ul class="week-bar">
                    <li class="weekend">日</li>
                    <li>一</li>
                    <li>二</li>
                    <li>三</li>
                    <li>四</li>
                    <li>五</li>
                    <li class="weekend">六</li>
                </ul>
                <ul class="week" v-for="dayList in months.days">
                    <li v-for="day in dayList" :class="{'start j-start':day.isStart,'end':day.isEnd,'range':day.isClick}">
                        <label v-if="day.isDay" class="day-label" :class="{'disabled':day.disable,'today':(day.isToday||day.isStart||day.isEnd),'holiday':day.isHoliday}" @click="onClickDate(day)">
                            <span class="day">{{day.day}}</span>
                            <ins v-if="day.isToday||day.isStart||day.isEnd" class="special" :class="{'now-today':day.isToday,'click-color':day.isStart||day.isEnd}">{{day.specialName}}</ins>
                            <ins v-if="day.isHoliday&&!day.isToday&&!day.isStart&&!day.isEnd" class="special f13" :class="{'click-color':day.isClick}">{{day.holidayName}}</ins>
                        </label>
                        <label v-else></label>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <div class="v-toast" :class="{'show': showToast}">
        <span v-text="toastText"></span>
    </div>
</div>

</template>

<script>

// canlendar样式
import './static/style.vue';

// canlendar.js
import canlendar from './static/canlendar.js'
export default canlendar

</script>
