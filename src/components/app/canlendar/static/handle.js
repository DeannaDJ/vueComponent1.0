/**
 * 获取日历
 */
import {
    holidayData
} from './config.js'

export let handle = {
    // 初始化
    init: function(options) {
        this.todayDate = this.newDate('yyyy-MM-dd');
        this.showBeginDate = options.beginDate || this.todayDate;
        this.showMonthCount = options.monthCount || 13; // 日历中月份显示数，默认显示13个月，从例如从7月显示到7月
        this.startDate = options.minDate;
        this.endDate = this.startDate && options.maxDay ? this.getDisDate(this.startDate, options.maxDay) : '';
        this.clickStartDate = options.startDate || this.todayDate;
        this.clickEndDate = options.endDate || this.getDisDate(this.clickStartDate, 1);
        var calendarData = this.createCalendar();
        return calendarData;
    },

    /**
     * 创建日历
     */
    createCalendar: function() {
        var calendarData = [],
            monthList = this.createMonthList();
        for (var i = 0; i < monthList.length; i++) {
            var tempMonthData = this.createMonthData(monthList[i]);
            tempMonthData.days = this.createWeekDate(tempMonthData.days);
            calendarData.push(tempMonthData);
        }
        return calendarData;
    },

    /**
     * 创建月份日期
     */
    createMonthData: function(date) {
        var dateArr = date.split('-'),
            year = dateArr[0],
            month = dateArr[1],
            // 开始星期
            startWeek = this.getWeek(year + '-' + month + '-01'),
            // 月份天数
            monthDays = this.getMonthDays(date),
            // 月份总格子数
            monthCell = 42,
            // 月份数据
            monthData = {
                year: year,
                month: month,
                days: []
            }

        // 生成月份日期数据
        for (var i = 0; i < monthCell; i++) {
            if (i >= startWeek && i < monthDays + startWeek) {
                var tempDay = i - startWeek + 1,
                    tempDate = date + '-' + this.toTwoNumber(tempDay),
                    tempWeek = this.getWeek(tempDate),
                    holidayValue = holidayData[tempDate],
                    isHoliday = !!holidayValue,
                    holidayName = isHoliday ? holidayValue : '',
                    isToday = this.isToday(tempDate, this.todayDate),
                    isDisable = this.getIsDisable(tempDate),
                    isStart = this.compare(tempDate, this.clickStartDate) == 0,
                    isEnd = this.compare(tempDate, this.clickEndDate) == 0,
                    isClick = this.isClickDate(tempDate),
                    specialName = this.setSpecialName(isStart, isEnd, isToday, holidayName);

                monthData.days.push({
                    date: tempDate,
                    day: tempDay,
                    week: tempWeek,
                    holidayName: holidayName,
                    specialName: specialName,
                    isHoliday: isHoliday,
                    disable: isDisable,
                    isToday: isToday,
                    isDay: true,
                    isStart: isStart,
                    isEnd: isEnd,
                    isClick: isClick
                });
            } else {
                /*最后一行如果一个日期都没有，则不加入到日历中显示*/
                if (i == 35) {
                    break;
                }
                monthData.days.push({
                    isDay: false
                });
            }
        }

        return monthData;
    },

    /**
     * 获取日期是否禁用
     */
    getIsDisable: function(date) {
        var tempDate = new Date(date).getTime(),
            startDate = '',
            endDate = '';

        if (this.startDate) {
            startDate = new Date(this.startDate).getTime();

            if (tempDate < startDate) {
                return true;
            }
        }

        if (this.endDate) {
            endDate = new Date(this.endDate).getTime();

            if (tempDate > endDate) {
                return true;
            }
        }
        return false;
    },

    /**
     * 创建月份列表
     */
    createMonthList: function() {
        var monthList = [],
            dateArr = this.showBeginDate.split('-'),
            year = dateArr[0],
            month = dateArr[1];

        for (var i = 1; i <= this.showMonthCount; i++) {
            if (month > 12) {
                year++;
                month = 1;
            }
            monthList.push(year + '-' + this.toTwoNumber(month));
            month++;
        }

        return monthList;
    },

    /**
     * 获取某月天数
     */
    getMonthDays: function(date) {
        var dateArr = date.split('-'),
            year = dateArr[0],
            month = dateArr[1],
            newDate = new Date(year, month, 0),
            days = newDate.getDate();
        return days;
    },

    /**
     * 获取星期
     */
    getWeek: function(date) {
        var week = new Date(date).getDay();
        return week;
    },

    /**
     * 将数字转化成两位数
     */
    toTwoNumber: function(data) {
        if (parseInt(data) < 10) {
            return '0' + parseInt(data);
        }
        if (parseInt(data) >= 10) {
            return '' + data;
        }
    },

    /**
     * 创建星期对应的日期
     */
    createWeekDate: function(dateList) {
        var daysList = [],
            weekDaysList = [];
        for (var i = 0; i < dateList.length; i++) {

            /*最后一行如果一个日期都没有，则不加入到日历中显示*/
            if (i == 35 && !dateList[i]['isDay']) {
                break;
            }
            weekDaysList.push(dateList[i]);
            if ((i + 1) % 7 == 0) {
                daysList.push(weekDaysList);
                weekDaysList = [];
            }
        }
        return daysList;
    },

    /**
     * 当前日期是否在选取段内
     */
    isClickDate: function(date) {
        var isMin = this.compare(this.clickStartDate, date) != 1,
            isMax = this.compare(this.clickEndDate, date) != -1;
        if (isMin && isMax) {
            return true;
        }
        return false;
    },

    /**
     * 设置日期的选中状态
     */
    setClickState: function(daysList, currentDay, startDete, clickCount) {
        var self = this;

        self.clickStartDate = startDete;

        self.clickEndDate = clickCount == 2 ? currentDay.date : self.clickEndDate;

        daysList.forEach(function(daysItem) {
            (daysItem.days).forEach(function(dayItem) {
                dayItem.forEach(function(dateItem) {
                    if (!dateItem.isDay) {
                        return true;
                    }
                    // 第一次点击的时候清除其它日期的选择状态
                    if (dateItem.isDay && clickCount == 1 &&
                        (dateItem.isStart || dateItem.isClick || dateItem.isEnd)
                    ) {
                        dateItem.isStart = false;
                        dateItem.isClick = false;
                        dateItem.isEnd = false;
                    }

                    // 设置入住日期
                    if (clickCount == 1) {
                        dateItem.isStart = self.compare(dateItem.date,
                            self.clickStartDate) == 0;
                        dateItem.isClick = self.compare(dateItem.date,
                            self.clickStartDate) == 0;
                        dateItem.specialName = self.setSpecialName(
                            dateItem.isStart, dateItem.isEnd, dateItem.isToday,
                            dateItem.holidayName
                        );
                    }

                    // 设置结束日期
                    if (clickCount == 2) {
                        dateItem.isEnd = self.compare(dateItem.date,
                            self.clickEndDate) == 0;
                        dateItem.isClick = self.isClickDate(dateItem.date);
                        dateItem.specialName = self.setSpecialName(
                            dateItem.isStart, dateItem.isEnd, dateItem.isToday,
                            dateItem.holidayName
                        );
                    }
                });
            });
        });
    },

    /**
     * 重置日期状态
     */
    resetState: function(daysList, startDate, endDate) {
        //清除掉其它选中状态
        var self = this;
        self.clickStartDate = startDate;
        self.clickEndDate = endDate;

        daysList.forEach(function(daysItem) {
            (daysItem.days).forEach(function(dayItem) {
                dayItem.forEach(function(dateItem) {
                    if (!dateItem.isDay) {
                        return true;
                    }
                    dateItem.isStart =
                        this.compare(dateItem.date, self.clickStartDate) ==
                        0;
                    dateItem.isEnd =
                        this.compare(dateItem.date, self.clickEndDate) ==
                        0;
                    dateItem.isClick = self.isClickDate(dateItem.date);
                    dateItem.specialName = self.setSpecialName(
                        dateItem.isStart, dateItem.isEnd, dateItem.isToday,
                        dateItem.holidayName
                    );
                });
            });
        });
    },

    /**
     * 设置特殊名称
     */
    setSpecialName: function(isStart, isEnd, isToday, holidayName) {
        if (isStart) {
            return '入住';
        }
        if (isEnd) {
            return '离店';
        }
        if (isToday) {
            return '今天';
        }
        return holidayName;
    },

    /**
     * 定位到当前选择的日期
     */
    // getPosition: function() {
    //     $('.j-canlendar').scrollTop(0);
    //     return $('.j-start').offset().top - 100;
    // },

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
    }

};
