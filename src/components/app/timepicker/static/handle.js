/**
 * 获取日历
 */
import {
    holidayData
} from './config.js'

export let handle = {

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
     * 获取日期时间格式信息
     * 参数格式yy-mm-dd HH:ii:ss
     * yy-mm-dd必传, HH:ii:ss可选
     */
    date: function(t) {
        var dArr = t.split(' '),
            dateArr = dArr[0].split('-'),
            timeArr = dArr[1] ? dArr[1].split(':') : [];

        return {

            //获取年 yy
            getYear: function() {
                return dateArr[0];
            },

            //获取月 mm
            getMonth: function() {
                return dateArr[1];
            },

            //获取天 dd
            getDate: function() {
                return dateArr[2];
            },

            //获取小时 HH
            getHour: function() {
                return timeArr.length > 0 ? timeArr[0] : '';
            },

            //获取分钟 ii
            getMinute: function() {
                return timeArr.length > 1 ? timeArr[1] : '';
            },

            //获取当天为星期几
            getDay: function() {
                var milliseconds = $.getMilliseconds(t);

                return new Date(milliseconds).getDay();
            },

            //获取yyyy-MM-dd
            getFormatDate: function() {
                return dArr[0];
            }
        }
    },

    // 时间数字格式化
    toTwoNumber: function(num) {
        num = parseInt(num, 10);
        if (num < 10) {
            return '0' + num;
        }

        return num + '';
    }

};
