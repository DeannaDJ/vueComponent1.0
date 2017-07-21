<template>
    <div id="action-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">action</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowAction" value="默认样式" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowAction2" value="带取消按钮样式" />
        </section>

        <v-action :show.sync="actionShow" :action-list="actionList"></v-action>
        <v-action :show.sync="actionShow2" :cancel="true" :action-list="actionList"></v-action>
    </div>
</template>

<script>

import vAction from 'appComponent/action/v-action.vue'
export default {
    data () {
        return {
            actionShow: false,
            actionShow2: false,
            actionList: [{
                name: '实例菜单一',
                eventName: 'actionEvent'
            }, {
                name: '实例菜单二',
                eventName: 'actionEvent'
            }, {
                name: '实例菜单三',
                eventName: 'actionEvent'
            }]
        }
    },

    components: {
        vAction
    },

    methods: {
        onShowAction() {
            this.actionShow = true;
        },

        onShowAction2() {
            this.actionShow2 = true;
        }
    }
}
</script>
