import Vue from 'vue'
import {
    props
} from './config.js'

export default {
    name: 'select',
    props: Object.assign(true, {}, props),

    data() {
        return {
            currentIndex: '',
            itemsStyle: {
                top: '29px',
                left: '0px',
                width: '150px'
            }
        };
    },

    created() {

        if (this.isChangeValue) {
            this.$emit('vSelectGetValue');
        }

        // 多选状态下拉数据设置
        if (this.multiSelect) {
            this.isAll && this.$emit('vSelectAddAll');
        }
    },

    ready() {
        var vm = this;

        var getOffset = function(el) {
            var offest = {
                top: el.offsetTop,
                left: el.offsetLeft
            };
            if (el.offsetParent) {
                var ot = getOffset(el.offsetParent);
                offest.top += ot.top;
                offest.left += ot.left;
            }
            return offest;
        }

        var offest = getOffset(vm.$el);
        vm.itemsStyle = {
            top: (offest.top + vm.$el.offsetHeight - 1) + 'px',
            left: offest.left + 'px',
            width: vm.$el.offsetWidth + 'px'
        }

        var contains = function(root, el) {
            if (root.compareDocumentPosition)
                return root === el || !!(root.compareDocumentPosition(el) & 16);
            if (root.contains && el.nodeType === 1) {
                return root.contains(el) && root !== el;
            }
            while ((el = el.parentNode))
                if (el === root) return true;
            return false;
        }

        window.vSelect = window.vSelect || [];
        var contains = false;
        for (let select of vSelect) {
            if (select.$el == vm.$el) {
                contains = true;
            }
        }

        // 不包含则加入
        !contains && (window.vSelect.push(vm));

        document.body.onclick = function(e) {
            for (let select of vSelect) {
                if (!select.$el.contains(e.target)) {
                    select.isOpen = false;
                    select.$emit('vSelectValidate');
                }
            }

        };


    },

    watch: {
        'selectItems': {
            handler: function(val, oldVal) {
                if (this.selectItems.length === this.list.length) {
                    this.isAll = true;
                } else {
                    this.isAll = false;
                    this.$emit('vSelectSetShowText');
                }

                this.$dispatch(this.eventName, this.selectItems);
            },
            deep: true
        }
    },

    methods: {
        _onStop(e) {

        },
        _onOpenToggle(e) {
            if (this.disabled) return;

            this.isOpen = !this.isOpen;

            // 校验
            if (!this.isOpen && this.binded && this.isValidate) {
                this.$emit('vSelectValidate');
            }

            return false;
        },

        // 单选选择
        onSingleSelect(e, item, index) {
            this.isOpen = false;

            if (!item) {
                item = {};
                item[this.displayKey] = '';
                item[this.displayName] = '';
                this.currentIndex = '';
                this.currentKey = '';
                this.currentValue = this.emptyValue;
                this.$dispatch(this.eventName, item);
                return;
            }

            if (this.displayKey && item[this.displayKey]) {
                this.currentKey = item[this.displayKey];
                this.currentValue = item[this.displayName];
            } else {
                this.currentKey = index;
                this.currentValue = item;
            }

            this.$dispatch(this.eventName, item);

        },

        onCheckedAll() {
            var vm = this;
            setTimeout(function() {
                if (vm.isAll) {
                    vm.$emit('vSelectAddAll');
                    return;
                }

                vm.$emit('vSelectRemoveAll');
            }, 0);
        },

        onHideErrorMsg() {
            this.isError = false;
        }
    },

    events: {
        vSelectSetShowText() {
            var tempList = [];
            if (this.selectItems.length == 0) return;

            var index = 0;
            for (let item of this.list) {
                var key = index,
                    name = item;
                if (this.displayKey && item[this.displayKey]) {
                    key = item[this.displayKey];
                    name = item[this.displayName];
                }
                for (let el of this.selectItems) {
                    if (el == key) {
                        tempList.push(name);
                    }
                }
                index++;
            }

            this.currentKey = this.selectItems.join(',');
            this.currentValue = tempList.join(',');
        },

        vSelectGetValue() {
            var vm = this;
            if (vm.currentValue) return;

            for (item of vm.list) {
                //遍历list数据，找到key键对应的value等于currentKey的item
                if (item[vm.displayKey] === vm.currentKey) {
                    vm.currentValue =
                        typeof item === 'object' ? item[vm.displayName] : item;
                }
            }

            vm.currentValue = vm.currentValue || vm.emptyValue;
        },

        vSelectAddAll() {
            var index = 0,
                tempList = [];
            for (let item of this.list) {
                var key = index;
                if (this.displayKey && item[this.displayKey]) {
                    key = item[this.displayKey];
                }
                tempList.push(key);
                index++;
            }

            this.selectItems = tempList;

            this.currentKey = tempList.join(',');
            this.currentValue = '全部';
        },

        vSelectRemoveAll() {
            this.selectItems = [];
            this.currentKey = '';
            this.currentValue = '-请选择-';
        },

        vSelectValidate() {
            this.isError = !!(this.emptyValue == this.currentValue);
        }
    },

    filters: {
        filterDisplay(item) {
            var value = '';
            if (this.displayName && item[this.displayName]) {
                value = item[this.displayName];
            } else {
                value = item;
            }

            if (value == this.currentValue) {
                this.currentIndex = this.$index;
            }

            var HTML_DECODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
            return (typeof value != "string") ? value : value.replace(HTML_DECODE, function($0) {
                var c = $0.charCodeAt(0),
                    r = ["&#"];
                c = (c == 0x20) ? 0xA0 : c;
                r.push(c);
                r.push(";");
                return r.join("");
            });
        }
    },

    filterDisplayKey(item) {
        var key = '';
        if (this.displayKey && item[this.displayKey]) {
            key = item[this.displayKey];
        } else {
            key = this.$index;
        }

        var HTML_DECODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
        return (typeof key != "string") ? key : value.replace(HTML_DECODE, function($0) {
            var c = $0.charCodeAt(0),
                r = ["&#"];
            c = (c == 0x20) ? 0xA0 : c;
            r.push(c);
            r.push(";");
            return r.join("");
        });
    }
}
