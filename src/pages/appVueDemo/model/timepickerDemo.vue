<template>
    <div id="timepicker-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">timepicker</label>
        </header>

        <section class="content">
            <input type="text" readonly class="yo-btn yo-btn-m"  @click="onShowTime" v-model="datetime" />
            <input type="text" readonly class="yo-btn yo-btn-m"  @click="onShowTips" v-model="datetime2" />
        </section>

        <v-timepicker :show="showTime" :datetime="datetime" event-name="onsure"></v-timepicker>
        <v-timepicker :show="showTime2" :datetime="datetime2" event-name="onsure2"></v-timepicker>
    </div>
</template>

<script>

import vTimepicker from 'appComponent/timepicker/v-timepicker.vue'
export default {
    data () {
        return {
            datetime: '2017-06-20 10:30',
            datetime2: '2017-06-21 00:30',
            showTime: false,
            showTime2: false
        }
    },

    components: {
        vTimepicker
    },

    methods: {
        onShowTime() {
            this.showTime = true;
        },

        onShowTips() {
            this.showTime2 = true;
        }
    },

    events: {
        onsure(date) {
            this.showTime = false;
            if(!date) {
                return;
            }
            this.datetime = date;
            console.log(date);
        },

        onsure2(date) {
            this.showTime2 = false;
            if(!date) {
                return;
            }
            this.datetime2 = date;
            console.log(date);
        }
    }
}
</script>
