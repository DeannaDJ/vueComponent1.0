<style scoped lang="sass">

.calendar-demo {
    .pos-relative {
        position: relative;
    }
    &.form-inline {
        .v-calendar {
            display: inline-block;
        }
        .label {
            font-size: 14px;
            display:inline-block;
            width: 50px;
            height: 30px;
            line-height: 30px;
            color: #333333;
        }
    }
    .item {
        width:230px;
        display:inline-block;
        margin-right: 20px;
    }
    .input-text {
        position: absolute;
        top: 1px;
        left: 7px;
        background: #fff;
        width: 40px;
    }
    .input-sm {
        width: 160px;
        color: #555555;
        background-color: #ffffff;
        background-image: none;
        border: 1px solid #dddddd;
        height: 30px;
        padding: 5px 10px;
        line-height: 1.5;
        border-radius: 2px;
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
    }
}

</style>

<template>

<div id="calendar-demo" class="item-demo">
    <h1>首页</h1>
    <h2>介绍</h2>
    <p>详情概述</p>
    <h2>实例</h2>
    <div class="calendar-demo form-inline">
        <div class="item">
            <label class="label">入住：</label>
            <v-calendar :value.sync="ciDate" format="yyyy-MM-dd">
                <span slot="input" class="pos-relative calendar-input">
                        <!-- <label class="input-text">入住</label> -->
                        <input type="text" readonly class="input-sm" v-model="ciDate">
                    </span>
            </v-calendar>
        </div>
        <div class="item">
            <label class="label">离店：</label>
            <v-calendar :value.sync="coDate" :min-date-time="minCoDate" :max-date-time="maxCoDate" format="yyyy-MM-dd">
                <span slot="input" class="pos-relative calendar-input">
                        <!-- <label class="input-text">入住</label> -->
                        <input type="text" readonly class="input-sm" v-model="coDate">
                    </span>
            </v-calendar>
        </div>
    </div>
</div>

</template>

<script>

import vCalendar from 'webComponent/calendar/v-calendar.vue'
export default {
    data() {
            return {
                ciDate: '2016-11-21',
                coDate: '2016-11-22',
                minCoDate: '',
                maxCoDate: ''
            }
        },

        created() {
            // 时间间隔1年
            this.minCoDate = this.getDisDate(this.ciDate, 1);
            this.maxCoDate = this.getDisDate(this.ciDate, 364);
        },

        watch: {
            ciDate(val) {
                this.minCoDate = this.getDisDate(val, 1);
                this.maxCoDate = this.getDisDate(val, 364);

                if(new Date(this.minCoDate).getTime() > new Date(this.coDate).getTime()) {
                    this.coDate = this.minCoDate;
                }

                if(new Date(this.maxCoDate).getTime() < new Date(this.coDate).getTime()){
                    this.coDate = this.maxCoDate;
                }
            }
        },

        components: {
            vCalendar
        },

        methods: {
            getDisDate(date, day) {
                    var nextDate = new Date(new Date(date).getTime() + day * 24 * 60 * 60 * 1000);
                    return nextDate.getFullYear() + '-' +
                        this.toTwoNumber(nextDate.getMonth() + 1) + '-' +
                        this.toTwoNumber(nextDate.getDate());
                },

                /**
                 * 转换成双数
                 */
                toTwoNumber(num) {
                    num = parseInt(num, 10);
                    if (num < 10) {
                        return '0' + num;
                    } else {
                        return num;
                    }
                }
        }
}

</script>
