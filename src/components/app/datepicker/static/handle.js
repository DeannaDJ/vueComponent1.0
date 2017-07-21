export let handle = {
    options: {},

    // 获取年份列表
    years() {
        this.minYear = this.options.currYear;
        this.maxYear = this.minYear;

        var years = [];
        if (this.options.minDate) {
            this.minYear = this.getDate(this.options.minDate).getFullYear();
        }
        if (this.options.maxDate) {
            this.maxYear = this.getDate(this.options.maxDate).getFullYear();
        } else if (this.options.currYear > this.minYear) {
            this.maxYear = this.options.currYear;
        } else {
            this.maxYear = this.minYear;
        }

        var count = 0;
        for (let i = this.minYear; i <= this.maxYear; i++) {
            years.push(i);
            if (this.options.currYear == i) {
                this.options.yeartop = 88 - 44 * count;
            }
            count++;
        }

        this.options.yearmaxTop = -44 * (this.maxYear - this.minYear) + 88;
        this.options.years = years;

    },

    // 获取月份列表
    months() {
        var months = [];

        for (let i = 1; i <= 12; i++) {
            months.push(i);
            if (this.options.currMonth == i - 1) {
                this.options.monthtop = 88 - 44 * (i - 1);
            }
        }

        this.options.monthmaxTop = -44 * 11 + 88;
        this.options.months = months;
    },

    // 获取天列表
    days() {
        var days = [],
            maxDay = new Date(this.options.currYear, this.options.currMonth + 1, 0).getDate();

        for (let i = 1; i <= maxDay; i++) {
            days.push(i);
            if (this.options.currDay == i) {
                this.options.daytop = 88 - 44 * (i - 1);
            }
        }
        this.options.daymaxTop = -44 * (maxDay - 1) + 88;
        this.options.days = days;
    },

    // 获取时分列表
    hoursMinutes() {

        var temp = [];
        if(!this.options.format ||
            this.options.format &&
            this.options.format.length == 10) {
            this.options.hourtop = 88;
            this.options.minutetop = 88;
            this.options.hourmaxTop = 88;
            this.options.minutemaxTop = 88;
            this.options.minutes = temp;
            this.options.hours = temp;
            return;
        }

        for (let i = 0; i < 60; i++) {
            temp.push(i);

            var top = 88 - 44 * i;
            if (this.options.currHour == i) {
                this.options.hourtop = top;
            }
            if (this.options.currMinute == i) {
                this.options.minutetop = top;
            }
        }

        var maxTop = -44 * 59 + 88;

        this.options.hourmaxTop = maxTop;
        this.options.minutemaxTop = maxTop;
        this.options.minutes = temp;
        this.options.hours = temp;
    },

    /**
     * 获取当前日期，并格式化
     * @example this.newDate('yyyy-MM-dd')
     * @param  {[type]} fmt  [格式]
     * @return {[type]}      [日期字符串]
     */
    newDate(fmt) {
        var date = new Date();
        return this.dateFormat(date, fmt || 'yyyy-MM-dd');
    },

    /**
     * 距离date日期的day的日期
     * 返回日期对象 默认返回 2015-01-01
     * @return {[type]} [日期对象]
     */
    getDisDate: function(date, day, fmt) {
        var current = this._getDate(date);
        var disDate = current.getTime() + day * 24 * 60 *
            60 * 1000;
        var resultDate = fmt ? this.dateFormat(new Date(disDate),
            fmt) : this.dateFormat(new Date(disDate),
            "yyyy-MM-dd");
        return resultDate;
    },

    /**
     * 判断是否为当天
     * @param  {[type]} date       [日期]
     * @param  {[type]} serverDate [服务器日期]
     * @return {[type]}            [布尔值]
     */
    isToday: function(date, todayDate) {
        return this.compare(date, todayDate) == '0' ? true :
            false;
    },

    /**
     * [内部方法] 返回日期对象
     * @return {[type]} [日期对象]
     */
    _getDate: function(date) {
        if (typeof date == 'string') {
            return this.getDate(date);
        }
        return date;
    },

    /**
     * 把日期字符串转成日期对象
     * @example this.getDate('2011-09-09 12:12:12')
     * @param {String} dateStr 时期字符串，只支持国内日期格式
     * @example 如2011-6-12 12:15:20【必选】
     * @return {Date} 转化后时间对象
     */
    getDate: function(input) {
        var str,
            date,
            time;
        str = input.split(' ');
        date = str[0].split(/[\-\/]/);
        time = str[1] ? str[1].split(':') : [0, 0, 0];
        return new Date(date[0], date[1] - 1, date[2], time[
            0], time[1], time[2] ? time[2] : 0);
    },

    /**
     * 日期比较
     * @param  {[type]} date1 [日期1]
     * @param  {[type]} date2 [日期2]
     * @return {[type]}       [string]
     */
    compare: function(date1, date2) {
        date1 = this._getDate(date1);
        date2 = this._getDate(date2);
        var time1 = date1.getTime(),
            time2 = date2.getTime();
        if (time1 > time2) {
            return '1';
        } else if (time1 < time2) {
            return '-1';
        } else {
            return '0';
        }
    },

    /**
     * 日期格式化
     * @example this.dateFormat(new Date(), 'yyyy-MM-dd hh:mm')
     * @param  {[type]} date [日期对象]
     * @param  {[type]} fmt  [格式]
     * @return {[type]}      [日期字符串]
     */
    dateFormat: function(date, fmt) {
        date = this._getDate(date);
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

    /**
     * 计算日期差
     * @param  {[type]} start  [开始日期]
     * @param  {[type]} end [结束日期]
     * @return {[type]}              [相差天数]
     */
    daysDiff: function(start, end) {
        var aDate, oDate1, oDate2, iDays;
        aDate = start.split(' ')[0].split("-");
        oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
        aDate = end.split(' ')[0].split("-");
        oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
        iDays = parseInt(Math.abs(oDate2 - oDate1) / 1000 /
            60 / 60 / 24);

        return iDays;
    },

    // 日期补零
    zero(n) {
        return n < 10 ? '0' + n : '' + n;
    },

    // 首字母大写
    firstToUpperCase(str) {
        var str = str.toLowerCase();
        str = str.replace(/\b\w+\b/g, function(word) {
            return word.substring(0, 1).toUpperCase() + word.substring(1);
        });

        return str;
    }

}
