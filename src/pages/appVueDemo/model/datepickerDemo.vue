<style scoped lang="sass">
    .datepicker-demo {
        font-size: .16rem;
        input {
            width: 1.6rem;
            height: .3rem;
            padding: 0 10px;
            line-height: .3rem;
            text-align: left;
            border: 1px solid #ddd;
            border-radius: 2px;
        }
        .item {
            .label {
                display: inline-block;
                width: .8rem;
                text-align: right;
            }
            text-align: left;
            padding: .1rem;
        }
    }
</style>
<template>
    <div id="datepicker-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">datepicker</label>
        </header>

        <section class="content datepicker-demo">
            <div class="item">
                <label class="label">默认今天：</label>
                <input type="text" readonly v-model="defaultDate" @click="showDefaultDate=true"/>
            </div>
            <div class="item">
                <label class="label">日期：</label>
                <input type="text" readonly v-model="date" @click="showDate=true"/>
            </div>
            <div class="item">
                <label class="label">时分日期：</label>
                <input type="text" readonly v-model="dateTime" @click="showDateTime=true"/>
            </div>
            <div class="item">
                <label class="label">日期限制：</label>
                <input type="text" readonly v-model="curDate" @click="showMinDate=true"/>
            </div>
        </section>

        <v-datepicker :show.sync="showDefaultDate" :value.sync="defaultDate"></v-datepicker>
        <v-datepicker :show.sync="showDate" :value.sync="date" format="yyyy-MM-dd"></v-datepicker>
        <v-datepicker :show.sync="showDateTime" :value.sync="dateTime" format="yyyy-MM-dd hh:mm"></v-datepicker>
        <v-datepicker :show.sync="showMinDate" :value.sync="curDate" :min-date="minDate"></v-datepicker>
    </div>
</template>

<script>

import vDatepicker from 'appComponent/datepicker/v-datepicker.vue'
export default {
    data () {
        return {
            minDate: '2016-11-20',
            curDate: '2016-11-29',
            date: '2016-11-20',
            dateTime: '2016-11-29 07:00',
            defaultDate: '',
            showDateTime: false,
            showDefaultDate: false,
            showDate: false,
            showMinDate: false
        }
    },

    components: {
        vDatepicker
    },

    methods: {
        onSelectDatepicker(){
            this.show = true;
        }
    }
}
</script>
