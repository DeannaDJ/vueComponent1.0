<style scoped lang="sass">
    .canlendarpicker-demo {
        font-size: .16rem;
        .ci-co {
            height: .3rem;
            line-height: .3rem;
        }
        input {
            width: 1.2rem;
            text-align: center;
        }
    }
</style>
<template>
    <div id="canlendarpicker-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">canlendarpicker</label>
        </header>

        <section class="content canlendarpicker-demo">
            <label class="label">点击日期选择起始日期</label>
            <div class="ci-co" @click="onSelectCanlendar">
                <input type="text" readonly v-model="startDate"/>至
                <input type="text" readonly v-model="endDate"/>
            </div>
        </section>

        <v-canlendarpicker :show="show" :start="startDate" :end="endDate" event-name="onsure"></v-canlendarpicker>
    </div>
</template>

<script>

import vCanlendarpicker from 'appComponent/canlendarpicker/v-canlendarpicker.vue'
export default {
    data () {
        return {
            startDate: '2017-03-24',
            endDate: '2017-03-25',
            beginDate: '2016-10-10',
            show: false
        }
    },

    components: {
        vCanlendarpicker
    },

    methods: {
        onSelectCanlendar(){
            this.show = true;
        }
    },

    events: {
        onsure(){
            this.show = false;
        }
    }
}
</script>
