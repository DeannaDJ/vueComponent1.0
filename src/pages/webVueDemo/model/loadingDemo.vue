<template>
    <div id="loading-demo" class="item-demo">
        <h1>loading加载器</h1>
        <h2>概述</h2>
        <p>loading加载器</p>

        <h2>实例</h2>
        <div class="select-btn loading-demo">
            <label>加载按钮：</label>
            <input type="button" class="form-control input-sm btn-success w120" @click="onShowLoading" value="局部加载loading">
            <input type="button" class="form-control input-sm btn-success w120" @click="onShowLoadingTwo" value="全局加载loading">
            <v-loading :show.sync="showLoading"></v-loading>
        </div>
        <v-loading :show.sync="showLoadingTwo"></v-loading>
    </div>
</template>

<script>

import vLoading from 'webComponent/loading/v-loading.vue'
export default {
    data () {
        return {
            showLoading: false,
            showLoadingTwo: false
        }
    },

    methods: {
        onShowLoading() {
            var vm = this;
            vm.showLoading = true;

            setTimeout(function() {
                vm.showLoading = false;
            }, 2000);
        },

        onShowLoadingTwo() {
            var vm = this;
            vm.showLoadingTwo = true;

            setTimeout(function() {
                vm.showLoadingTwo = false;
            }, 2000);
        }
    },

    components: {
        vLoading
    }
}
</script>

<style scoped lang="sass">
    .loading-demo {
        &.select-btn {
            padding: 20px;
            position:relative;
            width:500px;
            height:500px;
        }
    }
</style>
