export let props = {
    show: {
        type: Boolean,
        default: false
    },
    value: {
        type: String,
        defalut: ''
    },
    format: {
        type: String,
        defalut: 'yyyy-MM-dd'
    },
    minDate: {
        type: String,
        defalut: ''
    },
    maxDate: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    canceltext: {
        type: String,
        default: '取消'
    },
    suretext: {
        type: String,
        default: '确定'
    },
    eventsName: {
        type: String,
        default: 'selectEvent'
    }
};
