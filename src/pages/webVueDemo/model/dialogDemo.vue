<template>
    <div id="dialog-demo" class="item-demo">
        <h1>dialog弹窗</h1>
        <h2>概述</h2>
        <p>弹窗概述</p>
        <h2>实例</h2>
        <div class="select-btn mt20">
            <label style="margin:10px">弹窗按钮：</label>
            <input type="button" class="form-control input-sm btn-success w100" @click="showDialog" value="可拖拽弹窗">
            <input type="button" class="form-control input-sm btn-success w100" @click="showSecDialog" value="不可拖拽弹窗">
        </div>
    </div>
</template>

<script>

import vDialogVue from 'webComponent/dialog/index'

var dialog1 = null,
    dialog2 = null;

export default {
    data () {
        return {

        }
    },

    methods: {
        showDialog(e, content) {
            var vm = this;

            var dialog = vDialogVue({
                id: 'thridDialog',
                data: {
                    title: "可拖拽弹窗",
                    content: content || '弹窗没有内容',
                    show: true,
                    drag: true,
                    contentStyle: {
                        padding: "0 20px",
                        width: "300px",
                        height: "100px"
                    },
                    buttons: [{
                        name: "取消",
                        eventCallback() {}
                    }]
                },
                onshow() {
                    console.log('渲染完成');
                }
            });
        },
        // 显示弹窗
        showSecDialog(e, content) {
            vDialogVue({
                id: 'secDialog',
                data: {
                    title: "弹窗sec title",
                    content: content || '没有内容',
                    show: true,
                    contentStyle: {
                        padding: "0 20px",
                        width: "300px",
                        height: "100px"
                    },
                    buttons: [{
                        name: "关闭",
                        eventCallback() {}
                    }, {
                        name: "保存",
                        eventCallback() {}
                    }]
                }
            });
        }
    }
}
</script>
