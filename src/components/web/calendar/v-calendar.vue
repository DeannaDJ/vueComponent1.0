

<template>

<div class="v-calendar">
    <span @click="onShow">
        <slot name="input"></slot>
    </span>

    <div class="calendar-popup dropdown orient-top orient-left" v-show="show">
        <div class="calendar days" v-show="showDays">
            <div class="head">
                <div class="prev" style="visibility: visible;" @click.stop="onSwitchMonth(-1)">
                    <i class="i-icon">&#xf1c3;</i>
                </div>
                <div class="switch" @click.stop="showMonths=true;">{{titleYear}}年{{titleMonth+1 < 10 ? '0' + (titleMonth+1) : titleMonth+1}}月</div>
                <div class="next" style="visibility: visible;" @click.stop="onSwitchMonth(1)">
                    <i class="i-icon">&#xf1c1;</i>
                </div>
            </div>
            <div class="table">
                <table class="table-condensed">
                    <thead>
                        <tr>
                            <th class="dow week{{index+1}}" v-for="(index, item) in weeks">{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="day in days">
                            <td v-for="item in day" class="day {{item.className}}"
                            @click.stop="onChangeDate(item.date, item.className)">{{item.holidayName||item.date}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="calendar months" v-show="showMonths">
            <div class="head">
                <div class="prev" style="visibility: visible;" @click.stop="onSwitchYear(-1)">
                    <i class="i-icon">&#xf1c3;</i>
                </div>
                <div class="switch" @click.stop="showYears=true;">{{titleYear}}年</div>
                <div class="next" style="visibility: visible;" @click="onSwitchYear(1)">
                    <i class="i-icon">&#xf1c1;</i>
                </div>
            </div>
            <div class="table">
                <table class="table-condensed">
                    <tbody>
                        <tr>
                            <td colspan="7">
                                <span v-for="mon in months" class="month" :class="{'active': activeYearMonth==titleYear&&mon-1==titleMonth}"
                                    @click.stop="onChangeMonth(mon-1)">{{mon}}月</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="calendar years" v-show="showYears">
            <div class="head">
                <div class="prev" style="visibility: visible;" @click.stop="onSwitchYearLine(-10)">
                    <i class="i-icon">&#xf1c3;</i>
                </div>
                <div class="switch" @click.stop="showYears=true;">{{startYears}}-{{endYears}}年</div>
                <div class="next" style="visibility: visible;" @click="onSwitchYearLine(10)">
                    <i class="i-icon">&#xf1c1;</i>
                </div>
            </div>
            <div class="table">
                <table class="table-condensed">
                    <tbody>
                        <tr>
                            <td colspan="7">
                                <span v-for="el in years" class="year {{el.className}}"
                                @click.stop="onChangeYear(el.year, el.className)">{{el.year}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <v-timepicker v-if="type=='datetime'&&show" :confirm.sync="confirmTime" :origin-hour.sync="hour" :origin-min.sync="min"></v-timepicker>
</div>

</template>

<script>

// calendar样式
import './static/style.vue';

// calendar.js
import calendar from './static/calendar.js'
export default calendar

</script>
