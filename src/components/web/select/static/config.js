export let props = {
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
    disabled: {
        type: Boolean,
        default: false
    },
    isOpen: {
        type: Boolean,
        default: false
    },
    emptyValue: {
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
    border: {
        type: Number,
        default: 1
    },
    eventName: {
        type: String,
        default: ''
    },

    // 多选相关
    multiSelect: {
        type: Boolean,
        default: false
    },
    selectItems: {
        type: Array,
        default: null
    },
    isAll: {
        description: '默认全选',
        type: Boolean,
        default: false
    },
    isChangeValue: {
        type: Boolean,
        default: true
    },
    fixedName: {
        type: String,
        default: ''
    },

    // 验证相关
    isValidate: {
        type: Boolean,
        default: false
    },
    isError: {
        type: Boolean,
        default: false
    },
    errorMsg: {
        type: String,
        default: '校验失败'
    },
    binded: {
        type: Boolean,
        default: true
    },
    contentStyle: {
        type: Object,
        default: null
    }
};
