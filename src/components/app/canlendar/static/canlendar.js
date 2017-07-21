import Vue from 'vue'

import {
    props
} from './config.js'

import {
    handle
} from './handle.js'

export default {
    name: 'calendar',
    props: Object.assign(true, {}, props),

    data() {
        return {
            startDate: '',
            endDate: '',
            totalNights: 0,
            clickCount: 0, // 点击日期次数，当点击第二次时关闭日历并返回日期
            calendarList: [],

            showToast: false
        }
    },

    created() {
        this.render();
    },

    watch: {
        start(val) {
            this.startDate = this.start || handle.newDate();
            this.totalNights = 0;
            this.endDate = '';
        },

        end(val) {
            if (this.startDate && val) {
                this.endDate = val;
                this.totalNights = handle.daysDiff(this.startDate, val);
                return;
            }

            this.endDate = '';
            this.totalNights = 0;
        },

        show(val) {
            if(val) {
                this.render();
            }
        }
    },

    methods: {
        // 渲染
        render() {
            var vm = this;

            vm.startDate = vm.start || handle.newDate();

            if (vm.start && vm.end) {
                vm.endDate = vm.end;
                vm.totalNights = handle.daysDiff(vm.startDate, vm.endDate);
            } else {
                vm.totalNights = 0;
                vm.endDate = '';
            }

            vm.calendarList = handle.init({
                beginDate: vm.beginDate,
                monthCount: vm.monthCount,
                minDate: vm.minDate,
                minDay: vm.minDay,
                maxDay: vm.maxDay,
                startDate: vm.startDate,
                endDate: vm.endDate
            });
        },

        // 取消返回
        onCancel() {
            this.show = false;
        },

        // 确认日期返回
        onSure() {
            if (!this.endDate) {
                this.toast('请选择离店日期');
                return;
            }

            this.show = false;
            this.start = this.startDate;
            this.end = this.endDate;
        },

        // 点击日期
        onClickDate(day) {
            if (day.disable) {
                return;
            }

            if (handle.compare(day.date, this.startDate) == 0 && this.clickCount == 1) {
                this.toast('请选择离店日期');
                this.endDate = '';
                this.totalNights = 0;
                return;
            }
            if (handle.compare(day.date, this.startDate) == -1 && this.clickCount == 1) {
                this.clickCount = 0;
            }
            ++this.clickCount;

            /*开始日期*/
            if (this.clickCount == 1) {
                this.startDate = day.date;
                this.endDate = '';
                this.totalNights = 0;
                this.toast('请选择离店日期');
            }

            /*结束日期*/
            if (this.clickCount == 2) {
                this.endDate = day.date;
            }

            /*设置选中日期*/
            handle.setClickState(this.calendarList, day,  this.startDate, this.clickCount);
            if (this.clickCount == 2) {
                this.totalNights = handle.daysDiff(this.startDate, this.endDate);
                this.clickCount = 0
            }
        },

        toast(text) {
            var vm = this;
            vm.toastText = text;
            vm.showToast = true;
            setTimeout(function() {
                vm.showToast = false;
            }, 2000);
        }
    },

    filters: {
        filterFormat(value, fmt) {
            var date = new Date(value);
            return handle.dateFormat(date, fmt);
        }
    }
}
