<template>
    <div id="suggest-demo" class="item-demo">
        <h1>suggest筛选器</h1>
        <h2>概述</h2>
        <p>suggest筛选器</p>
        <h2>实例</h2>
        <div class="sug-demo">
            <p>第一个suggest筛选器：</p>
            <p>当前选中值：{{suggestValue}}</p>
            <v-suggest
                :list="list"
                :suggest-key="suggestKey"
                :query-value.sync="suggestValue"
                input-holder="请输入suggest值"
                event-name="vSuggestCallback"></v-suggest>
        </div>
        <div class="sug-demo">
            <p>第二个suggest筛选器：</p>
            <p>当前选中值：{{suggestTwoValue}}</p>
            <v-suggest
                :list="list"
                :suggest-key="suggestKey"
                :query-value.sync="suggestTwoValue"
                input-holder="请输入suggest值"
                event-name="vSuggestCallback"></v-suggest>
        </div>
    </div>
</template>

<script>

import vSuggest from 'webComponent/suggest/v-suggest.vue'
export default {
    data () {
        return {
            suggestKey: 'name',
            suggestValue: '',
            suggestTwoValue: '',
            list: [{
                "code": "sanke",
                "name": "线下客人"
            }, {
                "code": "dianpuzhixiao",
                "name": "呼呼呼"
            }, {
                "code": "gyzhixiao",
                "name": "呼呼呼分销"
            }, {
                "code": "free",
                "name": "呼呼呼置换房"
            }, {
                "code": "smartsell",
                "name": "智能售"
            }, {
                "code": "pms",
                "name": "供应商对接"
            }, {
                "code": "sddd",
                "name": "去去去网"
            }, {
                "code": "meituan",
                "name": "美团"
            }, {
                "code": "ctrip",
                "name": "携程"
            }]
        }
    },

    watch: {
        suggestValue(val) {
            console.log(val);
        }
    },

    components: {
        vSuggest
    }
}
</script>

<style scoped lang="sass">
    .sug-demo {
        position: relative;
        margin-top: 20px;
    }
</style>
