export let props = {
    show: {
        type: Boolean,
        default: false
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
    list: {
        type: Array,
        default: []
    },
    displayKey: {
        type: String,
        default: ''
    },
    displayName: {
        type: String,
        default: ''
    },
    currentKey: {
        type: String,
        default: ''
    },
    currentValue: {
        type: String,
        default: ''
    },
    group: {
        type: Number,
        default: 1
    },
    groupName: {
        type: String,
        default: ''
    },
    eventsName: {
        type: String,
        default: 'selectEvent'
    }
};
