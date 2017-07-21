import Vue from 'vue'
import vTimepicker from './timepick/v-timepick'
import {
    props,
    holidayData
} from './config.js'

export default {
    name: 'calendar',
    props: Object.assign(true, {}, props),

    data() {
        return {
            showDays: true,
            showMonths: false,
            showYears: false,

            currDate: null,
            startYears: '',
            endYears: '',
            titleYear: '',
            titleMonth: '',
            activeYearMonth: '',

            year: '',
            month: '',
            date: '',
            hour: '00',
            min: '00',
            years: [],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            days: [],
            weeks: ['一', '二', '三', '四', '五', '六', '日'],
            curMonthDays: 30,

            limitMinYear: '',
            limitMinMonth: '',
            limitMinDate: '',
            limitMinHours: '',
            limitMinMinites: '',

            limitMaxYear: '',
            limitMaxMonth: '',
            limitMaxDate: '',
            limitMaxHours: '',
            limitMaxMinites: '',

            confirmTime: false
        };
    },

    components: {
        vTimepicker
    },

    created() {
        this.initData();
    },
    ready() {
        this._blur = (e) => {
            if (!this.$el.contains(e.target)) this.show = false;
        }

        document.addEventListener('click', this._blur);
    },
    beforeDestroy() {
        document.removeEventListener('click', this._blur)
    },

    watch: {
        show(val) {
            if (!val) {
                return;
            }

            this.showDays = true;
            this.initData();
        },
        showYears(val) {
            if (val) {
                this.showMonths = false;
                this.showDays = false;
                this.initYear();
            }
        },

        showMonths(val) {
            if (val) {
                this.showYears = false;
                this.showDays = false;
            }
        },

        showDays(val) {
            if (val) {
                this.showMonths = false;
                this.showYears = false;
            }
        },

        titleYear(val) {
            this.initYear();
        },

        // 时间确认按钮变化
        confirmTime(val) {
            if (val) {
                this.currDate = new Date(this.year, this.month, this.date, +this.hour, +this.min);
                this.value = this.dateFormat(this.currDate, this.format);
                this.show = false;
            }
            this.confirmTime = false;
        }
    },

    methods: {

        // 初始化数据
        initData() {
            if (this.value) {
                this.currDate = this.parse(this.value);
                this.value = this.dateFormat(this.value, this.format);
            } else {
                this.value = '';
                this.currDate = this.parse(new Date());
            }

            this.year = this.currDate.getFullYear();
            this.month = this.currDate.getMonth();
            this.date = this.currDate.getDate();
            this.hour = this.zero(this.currDate.getHours());
            this.min = this.zero(this.currDate.getMinutes());

            this.titleYear = this.year;
            this.titleMonth = this.month;
            this.activeYearMonth = this.year;
            this.startYears = Math.floor(this.year / 10) * 10;
            this.endYears = this.startYears + 9;

            if (this.minDateTime) {
                var minDate = new Date(this.minDateTime);
                if (!isNaN(minDate.getFullYear)) {
                    this.limitMinYear = minDate.getFullYear();
                    this.limitMinMonth = minDate.getMonth();
                    this.limitMinDate = minDate.getDate();
                    if (this.format > 10) {
                        this.limitMinHours = this.zero(minDate.getHours());
                        this.limitMinDate = this.zero(minDate.getMinutes());
                    }
                }
            }
            if (this.maxDateTime) {
                var maxDate = new Date(this.maxDateTime);
                if (!isNaN(maxDate.getFullYear)) {
                    this.limitMaxYear = maxDate.getFullYear();
                    this.limitMaxMonth = maxDate.getMonth();
                    this.limitMaxDate = maxDate.getDate();
                    if (this.format > 10) {
                        this.limitMaxHours = this.zero(maxDate.getHours());
                        this.limitMaxDate = this.zero(maxDate.getMinutes());
                    }
                }
            }

            this.getDays();
            this.getYears();
        },

        // 控制日期显隐
        onShow() {
            this.show = !this.show;
        },

        // 切换月份
        onSwitchMonth(num) {
            var month = this.titleMonth + num;

            if (month < 0) {
                this.titleMonth = 11;
                this.titleYear--;
            } else if (month > 11) {
                this.titleMonth = 0;
                this.titleYear++;
            } else {
                this.titleMonth = month;
            }

            this.activeYearMonth = this.titleYear;
            this.getDays();
        },

        // 切换年份
        onSwitchYear(num) {
            this.titleYear += num;
        },

        // 切换选择年限
        onSwitchYearLine(num) {
            this.startYears += num;
            this.endYears = this.startYears + 9;
            this.getYears();
        },

        // 改变日历日期
        onChangeDate(date, type) {
            if (type.indexOf('disabled') != -1) {
                return;
            }

            if (this.titleYear == this.year &&
                this.titleMonth == this.month &&
                date == this.date &&
                type.indexOf('old') == -1 &&
                type.indexOf('new') == -1) {
                this.show = false;
                this.currDate = new Date(this.year, this.month, this.date, 0, 0, 0);
                this.value = this.dateFormat(this.currDate, this.format);
                return;
            }

            this.date = date;
            if (type.indexOf('old') != -1 && this.titleMonth - 1 >= 0) {
                this.titleMonth = this.titleMonth - 1;
            } else if (type.indexOf('old') != -1 && this.titleMonth - 1 < 0) {
                this.titleMonth = 11;
                this.titleYear -= 1;
            } else if (type.indexOf('new') != -1 && this.titleMonth + 1 < 12) {
                this.titleMonth = this.titleMonth + 1;
            } else if (type.indexOf('new') != -1 && this.titleMonth + 1 >= 12) {
                this.titleMonth = 0;
                this.titleYear += 1;
            }

            this.show = false;
            this.year = this.titleYear;
            this.month = this.titleMonth;
            this.currDate = new Date(this.year, this.month, this.date);
            this.value = this.dateFormat(this.currDate, this.format);

            this.getDays();
        },

        // 改变月份
        onChangeMonth(month) {
            if (this.titleYear == this.year &&
                month == this.titleMonth) {
                this.showDays = true;
                return;
            }

            this.showDays = true;
            this.titleMonth = month;
            this.activeYearMonth = this.titleYear;

            this.getDays();
        },

        // 改变年份
        onChangeYear(year, type) {

            if (year == this.titleYear) {
                this.showMonths = true;
                return;
            }

            this.titleYear = year;
            this.showMonths = true;

            this.getDays();
        },

        // 重置days列表
        getDays() {
            this.days = [];

            var date = 1,
                tempDate = '',
                className = '',
                isLastYear = this.titleMonth - 1 < 0,
                lastMonth = isLastYear ? 11 : this.titleMonth - 1,
                lastMonthYear = isLastYear ? this.titleYear - 1 : this.titleYear,
                curMonthDate = new Date(this.titleYear, this.titleMonth + 1, 0),
                currMonthLastWeek = curMonthDate.getDay(),
                lastMonthDate = new Date(this.titleYear, this.titleMonth, 0), // 上个月最后一天
                lastMonthDay = lastMonthDate.getDate(),
                week = lastMonthDate.getDay();

            this.curMonthDays = curMonthDate.getDate();

            for (let i = 0; i < 6; i++) {
                this.days.push([]);
                if (week < 6 && i == 0) {
                    for (let j = week; j >= 0; j--) {
                        var date = lastMonthDay - j;
                        tempDate = this.dateFormat(new Date(lastMonthYear, lastMonth, date), 'yyyy-MM-dd');
                        className = this.getClassName(tempDate, date, 'old');
                        this.days[i].push({
                            className: className,
                            date: date,
                            holidayName: this.checkHolidayData(tempDate)
                        });
                    }
                    date = 1;
                    while (week < 6) {
                        tempDate = this.dateFormat(new Date(this.titleYear, this.titleMonth, date), 'yyyy-MM-dd');
                        className = this.getClassName(tempDate, date);
                        this.days[i].push({
                            className: className,
                            date: date,
                            holidayName: this.checkHolidayData(tempDate)
                        });
                        date++;
                        week++;
                    }
                } else {
                    for (let j = 0; j < 7; j++) {
                        tempDate = this.dateFormat(new Date(this.titleYear, this.titleMonth, date), 'yyyy-MM-dd');
                        className = this.getClassName(tempDate, date);
                        this.days[i].push({
                            className: className,
                            date: (date - this.curMonthDays > 0) ? (date - this.curMonthDays) : date,
                            holidayName: this.checkHolidayData(tempDate)
                        });

                        date++;
                    }
                }
            }
        },

        // 重置可选年列表
        getYears() {
            var isLimited = false,
                classNames = [],
                year = this.startYears - 1;

            this.years = [{
                className: 'old',
                year: year
            }];

            for (let i = 0; i < 10; i++) {
                year = this.startYears + i;
                classNames = [];
                if (year == this.titleYear) {
                    classNames.push('active');
                }
                if (year < this.limitMinYear || year > this.limitMaxYear) {
                    classNames.push('disabled');
                }
                this.years.push({
                    className: classNames.join(' '),
                    year: year
                });
            }

            year = this.endYears + 1;
            this.years.push({
                className: 'new',
                year: year
            });
        },

        // 初始化年时段
        initYear() {
            if (this.titleYear < this.startYears || this.titleYear > this.endYears) {
                this.startYears = Math.floor(this.titleYear / 10) * 10;
                this.endYears = this.startYears + 9;
            }

            this.getYears();
        },

        // 获取日期class名
        getClassName(date, day, type) {
            var classNames = [],
                curTime = new Date(date).setHours(0, 0, 0),
                activeTime = new Date(this.year, this.month, this.date).getTime(),
                todayTime = this.dateFormat(new Date(), 'yyyy-MM-dd');

            if (type == 'old') {
                classNames.push('old');
            } else if (day > this.curMonthDays) {
                classNames.push('new');
            }

            if (date == todayTime) {
                classNames.push('today');
            }

            if (this.checkHolidayData(date)) {
                classNames.push('festival');
            }

            if (activeTime == curTime) {
                classNames.push('active');
            }

            if (this.checkDisabledDate(date)) {
                classNames.push('disabled');
            }

            return classNames.join(' ');
        },

        // 检查节日
        checkHolidayData(date) {
            var todayTime = this.dateFormat(new Date(), 'yyyy-MM-dd');
            if (todayTime == date) {
                return '今';
            }

            if (!this.festival) {
                return '';
            }

            var holidayName = '';
            for (let attr in holidayData) {
                if (attr == date) {
                    holidayName = holidayData[attr];
                    continue;
                }
            }

            return holidayName;

        },

        // 检查是否是不可选状态
        checkDisabledDate(date) {

            var minDateTime = '',
                maxDateTime = '',
                curDateTime = new Date(date).setHours(0, 0, 0);

            if (this.minDateTime) {
                minDateTime = new Date(this.minDateTime).setHours(0, 0, 0);
            }

            if (this.maxDateTime) {
                maxDateTime = new Date(this.maxDateTime).setHours(0, 0, 0);
            }

            if ((minDateTime && curDateTime < minDateTime) ||
                (maxDateTime && curDateTime > maxDateTime)) {
                return true;
            }

            return false;
        },

        /**
         * 日期格式化
         * @example dateUtil.format(new Date(), 'yyyy-MM-dd hh:mm')
         * @param  {[type]} date [日期对象]
         * @param  {[type]} fmt  [格式]
         * @return {[type]}      [日期字符串]
         */
        dateFormat: function(date, fmt) {
            date = this.parse(date);
            var o = {
                "M+": date.getMonth() + 1, // 月份
                "d+": date.getDate(), // 日
                "h+": date.getHours(), // 小时
                "m+": date.getMinutes(), // 分
                "s+": date.getSeconds(), // 秒
                "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
                "S": date.getMilliseconds() // 毫秒
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (
                date.getFullYear() +
                "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt =
                    fmt.replace(
                        RegExp.$1, (RegExp.$1.length == 1) ? (o[
                            k]) : ((
                            "00" + o[k]).substr(("" + o[k])
                            .length)));
            return fmt;
        },

        // 日期化
        parse(str = this.value) {
            let date
            if (str.length === 10 && (this.format === 'yyyy-MM-dd' || this.format === 'yyyy/MM/dd')) {
                date = new Date(str.substring(0, 4), +str.substring(5, 7) - 1, str.substring(8, 10));
            } else {
                date = new Date(str);
                (str.length === 10 || this.format.length === 10) && date.setHours(0, 0, 0);
            }
            return isNaN(date.getFullYear()) ? new Date() : date
        },

        // 日期补零
        zero(n) {
            return n < 10 ? '0' + n : '' + n;
        }

    }
}
