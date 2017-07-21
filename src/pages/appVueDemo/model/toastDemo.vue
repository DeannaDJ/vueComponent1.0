<template>
    <div id="toast-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">toast</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowToast" value="toast 默认位置" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowToast1" value="toast 居上" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onShowToast2" value="toast 居中" />
        </section>

        <v-toast duration="2000" :show.sync="showToast">toast 默认位置，2后消失~</v-toast>
        <v-toast duration="2000" :show.sync="showToast1" position="top">toast 居上，2后消失~</v-toast>
        <v-toast duration="2000" :show.sync="showToast2" position="center">toast 居中，2后消失~</v-toast>
    </div>
</template>

<script>

import vToast from 'appComponent/toast/v-toast.vue'
export default {
    data () {
        return {
            showToast: false,
            showToast1: false,
            showToast2: false
        }
    },

    components: {
        vToast
    },

    methods: {
        onShowToast() {
            this.showToast = true;
        },

        onShowToast1() {
            this.showToast1 = true;
        },

        onShowToast2() {
            this.showToast2 = true;
        }
    }
}
</script>
