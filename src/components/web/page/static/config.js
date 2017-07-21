export let props = {
    total: {
        type: Number,
        default: 0
    },
    currPage: {
        type: Number,
        default: 1
    },
    pageSize: {
        type: Number,
        default: 10
    },
    groups: {
        type: Number,
        default: 5
    },
    first: {
        type: String,
        default: ''
    },
    last: {
        type: String,
        default: ''
    },
    prev: {
        type: String,
        default: '上一页'
    },
    next: {
        type: String,
        default: '下一页'
    },
    eventName: {
        type: String,
        default: 'jumpPage'
    },
    showTotal: {
        type: Boolean,
        default: false
    },
    showSize: {
        type: Boolean,
        default: false
    },
    url: {
        type: String,
        default: ''
    }
};
