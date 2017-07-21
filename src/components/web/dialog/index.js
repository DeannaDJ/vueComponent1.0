import Vue from 'vue'

import drag from './static/drag'
import {
    data,
    tpl
} from './static/config'

import './static/style';

const ZINDEX = 9999;

export default function(param) {
    var id = param.id;

    // 创建节点
    createElement(id);

    var dialog = new Vue({
        el: '#' + id,

        data: Object.assign({
            dragClass: ''
        }, data),

        created() {
            cloneData(this);
        },

        ready() {
            if (param.onshow &&
                (typeof param.onshow === 'function')) {
                param.onshow();
            }
        },

        methods: {

            _onClose() {
                this.$emit('vwDialogHide');
            },

            _onClick(item) {
                var isStop;
                if (item.eventCallback &&
                    (typeof item.eventCallback === 'function')) {
                    isStop = item.eventCallback();
                }

                // 未阻止关闭上弹窗
                if (isStop === undefined)
                    this._onClose();
            }
        },

        events: {

            // 显示弹窗
            vwDialogShow() {
                this.show = true;
            },

            // 隐藏弹窗
            vwDialogHide() {
                this.$remove().$destroy();
                dialog = null;
            }
        }

    });

    // 创建节点
    function createElement(id) {
        var curDialog = document.getElementById(id),
            newNode = document.createElement('div'),
            webDialog = document.getElementsByClassName('web-dialog'),
            index = (webDialog ? webDialog.length : 0);

        newNode.id = id;
        newNode.className = 'web-dialog ' + id + '-' + index;

        if (!webDialog || !index) {
            newNode.style.zIndex = ZINDEX;
            newNode.innerHTML = tpl;
            document.body.appendChild(newNode);
        } else if (!curDialog) {
            newNode.style.zIndex = ZINDEX + index * 2;
            newNode.innerHTML = tpl;
            document.body.appendChild(newNode);
        } else {
            curDialog.style.zIndex = index > 1 ?
                (ZINDEX + (index - 1) * 2) : ZINDEX;
            curDialog.innerHTML = tpl;
        }
    }

    // clone data
    function cloneData(vm) {
        var data = param.data || {};
        vm.$data.title = data.title || '';
        vm.$data.content = data.content || '';
        vm.$data.skin = data.skin || '';
        vm.$data.show = !!data.show;
        vm.$data.drag = !!data.drag;
        vm.$data.dragClass = data.drag ? 'drag' : '';
        vm.$data.contentStyle = data.contentStyle || {};

        vm.$data.buttons = data.buttons ?
            data.buttons : [{
                name: '关闭',
                eventName: ''
            }, {
                name: '确认',
                eventName: ''
            }];

        if (!!data.drag) {
            drag(id);
        }
    }

    return dialog;
};
