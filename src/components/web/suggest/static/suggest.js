import {
    props
} from './config.js'

export default {
    name: 'suggest',
    props: Object.assign(true, {}, props),

    data() {
        return {
            currentIndex: 0,
            suggestList: []
        }
    },

    watch: {
        queryValue(val) {
            this.$emit('vSuggestValidate', val);
        }
    },

    methods: {
        _onFocus() {
            this.$emit('vSuggestValidate');
        },

        _onClear(e) {
            var vm = this;

            setTimeout(() => {
                vm.currentIndex = 0;
                vm.suggestList = [];
            }, 100);
        },

        _onKeydown(e) {
            var event = e || window.event,
                index = +this.currentIndex,
                maxLen = this.suggestList.length - 1;

            if (event.keyCode == 38) { // 上键
                this.currentIndex = index > 0 ? --index : maxLen;
            } else if (event.keyCode == 40) { // 下键
                this.currentIndex = index < maxLen ? ++index : 0;
            } else if (event.keyCode == 13) { // 回车键
                this._onSelect(this.suggestList[this.currentIndex]);
            }
        },

        _onSelect(item) {
            var value = item;
            if (this.suggestKey && item[this.suggestKey]) {
                value = item[this.suggestKey];
            }

            var vm = this;
            setTimeout(() => {
                vm.queryValue = value;
            }, 0);
            setTimeout(() => {
                vm.currentIndex = 0;
                vm.suggestList = [];
            }, 10);

            this.eventName &&
                this.$dispatch(this.eventName, item);
        }

    },

    events: {
        vSuggestValidate(val) {
            let temp = [],
                value = '';

            this.currentIndex = 0;
            val = val || this.queryValue;

            if (!val) {
                this.suggestList = [];
                return;
            }

            for (let item of this.list) {
                value = item;
                if (this.suggestKey && item[this.suggestKey]) {
                    value = item[this.suggestKey];
                }
                if (value.indexOf(val) != -1) {
                    temp.length < this.limit && temp.push(item);
                }
            }
            this.suggestList = temp;
        }
    },

    filters: {
        filterDisplay(item) {
            var value = item;
            if (this.suggestKey && item[this.suggestKey]) {
                value = item[this.suggestKey];
            }

            if (this.queryValue) {
                var diff = value.split(this.queryValue);
                value = diff.join('<span class="color-danger">' + this.queryValue + '</span>');
            }

            return value;
        }
    }
}
