

<template>

<div class="v-select" :class="{'open': isOpen, 'failed': isValidate&&isError}" :style="contentStyle" @click="_onOpenToggle($event)">

    <!-- 当前展示的值 -->
    <div class="select-toggle" :class="{'no-border': border==0}">
        <span v-if="isChangeValue" class="select-value" title="{{currentValue}}">{{currentValue}}</span>
        <span v-else="isChangeValue" class="select-value" title="">{{fixedName}}</span>
    </div>
    <i class="i-icon icon-arrowSelect"></i>
    <div class="filter"></div>

    <div :style="itemsStyle" class="select-panel">
        <!-- 下拉多选 -->
        <div v-if="multiSelect" class="select-items">
            <div v-if="emptyValue" class="select-item" data-index="" title="" @click.stop='_onStop'>
                <label class="label-checkbox" onselectstart="return false;">
                    <input type="checkbox" class="checkbox all" v-model="isAll" @click.stop="onCheckedAll">
                    <i class="i-checkbox mr5"></i>{{emptyValue}}
                </label>
            </div>
            <div v-for="item in list" class="select-item" data-index="{{$index}}" title="{{item|filterDisplay}}">
                <label class="label-checkbox" onselectstart="return false;">
                    <input type="checkbox" class="checkbox" value="{{item[displayKey]||item}}" v-model="selectItems">
                    <i class="i-checkbox mr5"></i>{{item|filterDisplay}}
                </label>
            </div>
        </div>

        <!-- 下拉单选 -->
        <div v-else="multiSelect" class="select-items">
            <div v-if="emptyValue" class="select-item" :class="{'selected':emptyValue==currentValue}" data-index="" title="" @click.stop="onSingleSelect($event)">{{emptyValue}}</div>
            <div v-for="item in list" class="select-item" :class="{'selected':currentIndex !=''&&$index==currentIndex}" data-index="{{$index}}" title="{{item|filterDisplay}}" @click.stop="onSingleSelect($event, item, $index)">{{item|filterDisplay}}</div>
        </div>
    </div>

    <!-- 提示信息 -->
    <div class="tip" v-if="isValidate" @click.stop="onHideErrorMsg">
        <div class="content">{{errorMsg}}
            <br>
        </div>
        <div class="arrow"><i></i></div>
    </div>
</div>

</template>

<script>

// select样式
import './static/style';
import './static/ichecked';

// select.js
import select from './static/select.js'
export default select

</script>
