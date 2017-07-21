

<template>

<div class="v-sidebar">
    <div class="subnav">
        <div class="item" v-for="item in configs" v-show="item.show" :class="{'not-sub':item.url}">
            <a href="javascript:void(0);" class="title" @click="_onClickPrent(item)" :class="{'active':currentParentKey==item.key||currentKey==item.key, 'not-sub':!item.subItem}">
                <i class="i-icon" v-html="item.iconUnicode"></i>
                <span class="text" v-text="item.name"></span>
                <span class="color-danger" v-if="item.count && item.count > 0">(&nbsp;{{item.count|exceedMax}}&nbsp;)</span>
            </a>
            <div v-if="item.subItem" class="j-subnav-item subnav-item" v-show="item.open">
                <ul>
                    <li v-for="el in item.subItem" v-show="el.show" :class="{'active':currentKey==el.subKey}">
                        <a href="javascript:void(0);" @click="_onClickChild(el)" v-text="el.subName"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>

<script>

// sidebar样式
import './static/style.vue';

// sidebar.js
import sidebar from './static/sidebar.js'
export default sidebar

</script>
