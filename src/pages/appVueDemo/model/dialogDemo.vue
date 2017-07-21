<template>
    <div id="dialog-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">dialog</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowDialog" value="默认弹窗" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowTips" value="无标题弹窗" />
        </section>

        <v-dialog
            :show.sync="showDialog"
            :buttons="btns"
            title="提示">这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示。。。</v-dialog>
        <v-dialog
            :show.sync="showDialog2"
            :buttons="btn">这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示这是一段文案提示,
            这是一段文案提示,这是一段文案提示这是一段文案提示,这是一段文案提示,这是一段文案提示。。。</v-dialog>
    </div>
</template>

<script>

import vDialog from 'appComponent/dialog/v-dialog.vue'
export default {
    data () {
        return {
            btns: [{
                type: 'cancel',
                // name: '关闭',
                eventName: 'onclose'
            }, {
                type: 'sure',
                // name: '确认',
                eventName: 'onsure'
            }],
            btn: [{
                type: 'cancel',
                // name: '关闭',
                eventName: ''
            }],

            showDialog: false,
            showDialog2: false
        }
    },

    components: {
        vDialog
    },

    methods: {
        onShowDialog() {
            this.showDialog = true;
        },

        onShowTips() {
            this.showDialog2 = true;
        }
    },

    events: {
        onclose() {
            console.log('关闭');
        },

        onsure() {
            console.log('确认');
        }
    }
}
</script>
