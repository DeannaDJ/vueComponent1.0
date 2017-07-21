import {
    props
} from './config.js'

export default {
    name: 'sidebar',
    props: Object.assign(true, {}, props),

    data() {
        return {
            currentParentKey: ''
        }
    },

    created() {
        for (let item of this.configs) {
            if (!item.subItem) return;
            for (let el of item.subItem) {
                if (this.currentKey == el.subKey) {
                    this.currentParentKey = el.parentKey;
                    return;
                }
            }
        }
    },

    methods: {
        _onClickPrent(item) {
            this.currentParentKey = item.key;

            var subItem = item.subItem ? item.subItem[0] : null;
            this.currentKey = subItem ? subItem.subKey : '';

            if (item.url) {
                window.location.href = item.url;
                return;
            }

            // 公共选择方法
            if (this.eventName) {
                this.$dispatch(this.eventName, subItem || item);
            }
        },

        _onClickChild(el) {
            this.currentKey = el.subKey;
            this.currentParentKey = el.parentKey;

            if (el.url) {
                window.location.href = el.url;
                return;
            }

            // 公共选择方法
            if (this.eventName) {
                this.$dispatch(this.eventName, el);
            }
        }

    },

    filters: {
        exceedMax(val) {
            return val > 99 ? '99+' : val;
        }
    }
}
