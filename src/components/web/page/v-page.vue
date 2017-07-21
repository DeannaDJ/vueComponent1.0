

<template>

<div class="v-page" v-show="total">

    <ul>
        <li v-if="showTotal">
            <span class="total-count">共{{total}}条</span>
        </li>
        <li v-if="prev" :class="{'active':currPage==1}">
            <span v-if="currPage==1" v-text="prev" class="current prev"></span>
            <a v-else="currPage==1" v-text="prev" href="javascript:;" class="page-link prev" @click="onPrev"></a>
        </li>
        <li v-if="first" :class="{'active':currPage==1}">
            <span v-if="currPage==1" v-text="first" class="current first"></span>
            <a v-else="currPage==1" v-text="first" href="javascript:;" class="page-link first" @click="onJumpPage(1)"></a>
        </li>
        <li v-for="page in pages" :class="{'active':currPage==page,'disabled':page==ellipse}">
            <span v-if="page==ellipse" v-text="ellipse" class="ellipse"></span>
            <span v-if="currPage==page&&page!=ellipse" v-text="page" class="current"></span>
            <a v-if="currPage!=page&&page!=ellipse" v-text="page" href="javascript:;" class="page-link" @click="onJumpPage(page)"></a>
        </li>
        <li v-if="last" :class="{'active':currPage==totalPages}">
            <span v-if="currPage==totalPages" v-text="last" class="current last"></span>
            <a v-else="currPage==totalPages" v-text="last" href="javascript:;" class="page-link last" @click="onJumpPage(totalPages)"></a>
        </li>
        <li v-if="next" :class="{'active':currPage==totalPages}">
            <span v-if="currPage==totalPages" v-text="next" class="current next"></span>
            <a v-else="currPage==totalPages" v-text="next" href="javascript:;" class="page-link next" @click="onNext"></a>
        </li>
        <li v-if="showSize">
            <div class="option-size"></div>
        </li>
    </ul>
</div>

</template>

<script>

// page样式
import './static/style';

// page.js
import page from './static/page.js'
export default page

</script>
