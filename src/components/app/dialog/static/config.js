export let props = {
    title: {
        type: String,
        default: ''
    },
    skin: {
        type: String,
        default: ''
    },
    show: {
        type: Boolean,
        default: false
    },
    buttons: {
        type: Array,
        default: [{
            type: 'cancel',
            eventName: ''
        }, {
            type: 'sure',
            eventName: ''
        }]
    }
};
