<template>
    <div id="select-demo" class="item-demo">
        <h1>select选择器</h1>
        <h2>概述</h2>
        <p>select选择器</p>

        <h2>实例</h2>
        <div class="sel-demo">
            <p>一、单项选择器（可校验空值）：</p>
            <p>当前选中值：{{currentValue}}</p>
            <v-select
                :list="selectList"
                :is-validate="true"
                :select-empty="true"
                :current-key.sync="currentKey"
                :current-value.sync="currentValue"
                :content-style="selectContentStyle"
                empty-value="请选择渠道"
                display-key="code"
                display-name="name"></v-select>
        </div>
        <div class="sel-demo">
            <p>二、多项选择器</p>
            <p> 当前选中值：{{multiCurrentValue}}</p>
            <v-select
                :list="selectList"
                :multi-select='true'
                :current-key.sync="multiCurrentKey"
                :current-value.sync="multiCurrentValue"
                :select-items.sync='multiSelectItems'
                :content-style="selectContentStyle"
                empty-value="全部"
                display-key="code"
                display-name="name"></v-select>
        </div>
        <div class="sel-demo">
            <p>三、不可变title选择器</p>
            <p> 当前选中值：{{multiCurrentValue1}}</p>
            <v-select
                :list="selectList"
                :is-change-value="false"
                :multi-select='true'
                :current-key.sync="multiCurrentKey1"
                :current-value.sync="multiCurrentValue1"
                :select-items.sync='multiSelectItems1'
                :content-style="selectContentStyle"
                empty-value="全部"
                fixed-name="渠道"
                display-key="code"
                display-name="name"></v-select>
        </div>
    </div>
</template>

<script>

import vSelect from 'webComponent/select/v-select.vue'
export default {
    data () {
        return {
            selectContentStyle: {
                background: '#ffffff'
            },
            currentKey: 'gyzhixiao',
            currentValue: '呼呼呼',
            multiCurrentKey1: '',
            multiCurrentValue1: '',
            multiSelectItems1: [],

            multiCurrentKey: 'sanke',
            multiCurrentValue: '线下客人',
            multiSelectItems: ['sanke'],
            selectList: [{
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
                "code": "ddd",
                "name": "算法网"
            }, {
                "code": "meituan",
                "name": "美团"
            }, {
                "code": "ctrip",
                "name": "携程"
            }]
        }
    },

    components: {
        vSelect
    }
}
</script>

<style scoped lang="sass">
    .sel-demo {
        position: relative;
        margin-top: 20px;
    }
</style>
