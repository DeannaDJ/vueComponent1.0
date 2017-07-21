export let props = {
    show: {
        type: Boolean,
        default: false
    },
    start: {
        type: String,
        default: ''
    },
    end: {
        type: String,
        default: ''
    },
    beginDate: {
        type: String,
        default: ''
    },
    minDate: {
        type: String,
        default: ''
    },
    monthCount: {
        type: Number,
        default: 13
    },
    minDay: {
        type: Number,
        default: 1
    },
    maxDay: {
        type: Number,
        default: 365
    },
    format: {
        type: String,
        default: 'yyyy-MM-dd'
    },
    toastText: {
        type: String,
        default: '请选择正确的日期时段'
    },
    festival: {
        type: Boolean,
        default: true
    }
};

export let holidayData = {
    "2016-01-01": "元旦",
    "2016-02-08": "春节",
    "2016-02-14": "情人",
    "2016-04-04": "清明",
    "2016-05-01": "劳动",
    "2016-06-09": "端午",
    "2016-08-09": "七夕",
    "2016-09-15": "中秋",
    "2016-10-01": "国庆",
    "2016-12-25": "圣诞",
    "2017-01-01": "元旦",
    "2017-01-28": "春节",
    "2017-02-14": "情人",
    "2017-04-04": "清明",
    "2017-05-01": "劳动",
    "2017-05-30": "端午",
    "2017-08-28": "七夕",
    "2017-10-01": "国庆",
    "2017-10-04": "中秋",
    "2017-12-25": "圣诞",
    "2018-01-01": "元旦",
    "2018-02-14": "情人",
    "2018-02-16": "春节",
    "2018-04-05": "清明",
    "2018-05-01": "劳动",
    "2018-06-18": "端午",
    "2018-08-17": "七夕",
    "2018-09-24": "中秋",
    "2018-10-01": "国庆",
    "2018-12-25": "圣诞",
    "2019-01-01": "元旦",
    "2019-02-05": "春节",
    "2019-02-14": "情人",
    "2019-04-05": "清明",
    "2019-05-01": "劳动",
    "2019-06-07": "端午",
    "2019-08-07": "七夕",
    "2019-09-13": "中秋",
    "2019-10-01": "国庆",
    "2019-12-25": "圣诞",
    "2020-01-01": "元旦",
    "2020-01-25": "春节",
    "2020-02-14": "情人",
    "2020-04-05": "清明",
    "2020-05-01": "劳动",
    "2020-06-25": "端午",
    "2020-08-25": "七夕",
    "2020-10-01": "国庆",
    "2020-12-25": "圣诞"
};
