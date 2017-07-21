export let props = {
    list: {
        type: Array,
        default: []
    },
    suggestKey: {
        type: String,
        default: ''
    },
    queryValue: {
        type: String,
        default: ''
    },
    limit: {
        type: Number,
        default: 10
    },
    inputHolder: {
        type: String,
        default: ''
    },
    autoMatch: {
        type: Boolean,
        default: false
    },
    eventName: {
        type: String,
        default: ''
    }
};
