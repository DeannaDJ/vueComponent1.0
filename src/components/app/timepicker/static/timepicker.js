import {
    props
} from './config.js'

import {
    handle
} from './handle.js'

var originhourLeft = '',
    originminLeft = '';

// 日期正则
var reg = /^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2})$/;

export default {
    name: 'timepicker',
    props: Object.assign(true, {}, props),

    data() {
        return {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            hourtouchstarty: '',
            mintouchstarty: '',
            hourtouchendy: '',
            mintouchendy: '',
            originhourLeft: '',
            originminLeft: ''
        }
    },

    created() {
        this.render();
    },

    computed: {
        display() {
            if (this.show) {
                this.render();
            }
            return this.show;
        },

        curDatetime() {
            return this.year + '-' + this.month + '-' + this.day +
                ' ' + this.hour + ':' + this.minute;
        },

        hourLeft() {
            return Number((this.hour / 23 * 190).toFixed(2));
        },

        minLeft() {
            return Number((this.minute / 59 * 190).toFixed(2));
        }
    },

    methods: {
        // 渲染
        render() {
            var vm = this,
                dateObj,
                datetime = vm.datetime;
            if (!reg.test(datetime)) {
                datetime = handle.newDate('yyyy-MM-dd hh:mm');
            }

            dateObj = handle.date(datetime);
            vm.year = dateObj.getYear();
            vm.month = dateObj.getMonth();
            vm.day = dateObj.getDate();
            vm.hour = dateObj.getHour();
            vm.minute = dateObj.getMinute();
        },

        onTouchstart(e, type) {
            this.originhourLeft = Number((this.hour / 23 * 190).toFixed(2));
            this.originminLeft = Number((this.minute / 59 * 190).toFixed(2));
            this[type + 'touchstarty'] = e.touches[0].pageX;
        },

        onTouchmove(e, type) {
            var vm = this,
                diff = 0;

            vm[type + 'touchendy'] = e.touches[0].pageX;
            diff = vm[type + 'touchendy'] - vm[type + 'touchstarty'];
            var oLeft = vm['origin' + type + 'Left'] + diff + 15;
            oLeft = oLeft > 190 ? 190 : oLeft < 0 ? 0 : oLeft;

            // 设置时分位置
            this.setTimePosition(oLeft, type);
        },

        // 计算移动位置
        setTimePosition(oLeft, type) {
            var vm = this;
            setTimeout(function() {
                if (oLeft <= 190 && oLeft >= 0) {
                    if (type == 'hour') {
                        vm.hour = handle.toTwoNumber(parseInt((oLeft / 190) * 23));
                        return;
                    }
                    vm.minute = handle.toTwoNumber(parseInt((oLeft / 190) * 59));
                }
            }, 100);
        },

        onClose() {
            if (this.eventName) {
                this.$dispatch(this.eventName);
            }
        },

        onSure() {
            if (this.eventName) {
                this.$dispatch(this.eventName, this.curDatetime);
            }
        }
    }
}
