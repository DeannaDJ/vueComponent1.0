export let props = {
    configs: {
        type: Array,
        default: []
    },
    currentKey: {
        type: String,
        default: ''
    },
    eventName: {
        type: String,
        default: ''
    }
};

/**
* configs 实例
[{
    key: '', // 节点唯一标识
    name: '', // 展示文案
    count: 0, // 如有数字，则文案右侧展示数据，0不展示
    iconUnicode: '', // 左侧字体图标展示
    open: true, // 默认是否展开
    show: true, // 是否显示
    url: "", // url，若有则点击跳转，没有则不跳转
    subItem: [{ // 二级展示，若没有则不展示
        subKey: "", // 节点唯一key值
        parentKey: '', // 父节点
        subName: "", // 展示文案
        count: 0, // 如有数字，则文案右侧展示数据，0不展示
        url: "", // url
        show: true // 是否显示
    }];
}]
*
**/
