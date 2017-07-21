<style scoped lang="sass">

.v-timepick {
    position: fixed;
    z-index: 1000;
    display: block;
    width: 230px;
    height: 246px;
    padding: 45px 20px 20px;
    background-color: #f6f6f6;
    border-radius: 0 4px 4px 0;
    direction: ltr;
    font-size: 12px;
    margin: 2px 0 0 223px;
    border: 1px solid #dddddd;
    border-left: 1px solid #e2e2e2;
    box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.125);
    background-clip: padding-box;
    dl {
        font-family: "microsoft yahei", Helvetica, Verdana;
        height: 30px;
        dt,
        dd {
            display: inline-block;
            font-weight: normal;
        }
    }
    .ui-time-text {
        height: 24px;
        line-height: 24px;
        cursor: default;
    }
    .ui-slider {
        position: relative;
        width: 170px;
        height: 6px;
        border-radius: 3px;
        background-color: #ffffff;
        border: 1px solid #e2e2e2;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.125);
        .ui-state-default {
            position: absolute;
            cursor: move;
            left: 0;
            top: -5px;
            width: 15px;
            height: 15px;
            background-color: #57c462;
            border-radius: 50%;
        }
        &:before {
            position: absolute;
            top: 10px;
            left: 0;
            font-size: 10px;
        }
        &:after {
            position: absolute;
            top: 10px;
            left: 155px;
            font-size: 10px;
        }
    }
    .ui-hour-slider {
        &:before {
            content: '0';
        }
        &:after {
            content: '23';
        }
    }
    .ui-minute-slider {
        &:before {
            content: '0';
        }
        &:after {
            content: '59';
        }
    }
    .nowtime-btn {
        border: 1px solid #dddddd;
        background-color: #ffffff;
    }
}

</style>

<template>

<div class="v-timepick" @click.stop="">
    <dl class='ui-time'>
        <dt class="mb5 f14 fn-fwb">时间</dt>
        <dd class="ui-time-text ml10 w110 text-center f18">{{hour}}:{{min}}</dd>
    </dl>
    <dl class='ui-hour'>
        <dt class="fn-clear fn-left mb5 ui-hour-label">时</dt>
        <dd class="ml5">
            <div class="ui-hour-slider ui-slider j-hour j-slider" aria-disabled="false">
                <a class="j-hour-slider j-slider-handle ui-state-default"
                 v-bind:style="{left: hourLeft+'px'}" @mousedown.stop="onMousedown('hour')"></a>
            </div>
        </dd>
    </dl>
    <dl class='ui-minute'>
        <dt class="fn-clear fn-left mb5 ui-minute-label">分</dt>
        <dd class="ml5">
            <div class="ui-minute-slider ui-slider j-slider j-minute" aria-disabled="false">
                <a class="j-minute-slider j-slider-handle ui-state-default"
                v-bind:style="{left: minLeft+'px'}" @mousedown.stop="onMousedown('min')"></a>
            </div>
        </dd>
    </dl>
    <div class="text-center">
        <button type="button" class="suretime-btn text-center w70 btn btn-xs btn-success"
            @mousedown.stop=""  @click.stop="onConfirm">确认</button>
    </div>
</div>

</template>

<script>

import Vue from 'vue'

export default {
    name: 'timepicker',
    props: {
        date: {
            type: String,
            default: ''
        },
        originHour: {
            type: String,
            default: '00'
        },
        originMin: {
            type: String,
            default: '00'
        },
        confirm: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            hourLeft: 0,
            minLeft: 0,

            hour: '00',
            min: '00',

            handleType: '',
            dragging: false
        }
    },

    created() {
        this.hour = this.originHour;
        this.min = this.originMin;
        this.hourLeft = (this.hour / 23) * 160;
        this.minLeft = (this.min / 59) * 160;
    },

    ready() {
        this.bind();
    },

    watch: {
        originHour(val) {
            this.hour = val;
            this.hourLeft = (this.hour / 23) * 160;
        },

        originMin(val) {
            this.min = val;
            this.minLeft = (this.min / 59) * 160;
        }
    },

    methods: {
        // 事件绑定
        bind() {
            var _this = this;
            (function(self) {
                // 鼠标移动mousemove
                document.addEventListener('mousemove', (e)=> {
                    if (self.dragging) {
                        // 拖动中，才能执行以下code
                        var wLeft =  self.$el.offsetLeft + 40 + 5;
                        var oLeft = e.clientX - wLeft; // 滑动距离
                        oLeft = oLeft > 160 ? 160 : oLeft < 0 ? 0 : oLeft;

                        // 设置时分位置
                        self.setTimePosition(oLeft);
                    }
                });

                // 鼠标mouseup事件
                document.addEventListener('mouseup', (e) => {
                    self.dragging = false; // 关闭拖动中的状态
                });

            })(_this);

        },

        // 设置时分位置
        setTimePosition(oLeft) {
            if (oLeft <= 160 && oLeft >= 0) {
                if (this.handleType == 'hour') {
                    this.hourLeft = oLeft;
                    this.hour = this.zero(parseInt((this.hourLeft / 160) * 23));
                } else {
                    this.minLeft = oLeft;
                    this.min = this.zero(parseInt((this.minLeft / 160) * 59));
                }
            }
        },

        // 日期补零
        zero(n) {
            return n < 10 ? '0' + n : '' + n;
        },

        onMousedown(type) {
            this.dragging = true;
            this.handleType = type;
        },

        onConfirm() {
            this.originHour = this.hour + '';
            this.originMin = this.min + '';
            this.confirm = true;
        },

        reset() {
            this.hourLeft = 0;
            this.minLeft = 0;

            this.hour = '00';
            this.min = '00';

            this.handleType = '';
            this.dragging = false;
        }
    }
}

</script>
