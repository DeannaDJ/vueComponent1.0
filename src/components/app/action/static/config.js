export let props = {
    show: {
        type: Boolean,
        default: false
    },
    cancel: {
        type: Boolean,
        default: false
    },
    fullscreen: {
        type: Boolean,
        default: true
    },
    actionList: {
        type: Array,
        default: [{
            name: '取消',
            eventName: ''
        }]
    }
};
