<style scoped lang="sass">
    .canlendar-demo {
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
    <div id="canlendar-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">canlendar</label>
        </header>

        <section class="content canlendar-demo">
            <label class="label">点击日期选择起始日期</label>
            <div class="ci-co" @click="onSelectCanlendar">
                <input type="text" readonly v-model="startDate"/>至
                <input type="text" readonly v-model="endDate"/>
            </div>
        </section>

        <v-canlendar :show.sync="show" :start.sync="startDate" :end.sync="endDate"></v-canlendar>
    </div>
</template>

<script>

import vCanlendar from 'appComponent/canlendar/v-canlendar.vue'
export default {
    data () {
        return {
            startDate: '2016-11-24',
            endDate: '2016-11-25',
            beginDate: '2016-10-10',
            show: false
        }
    },

    components: {
        vCanlendar
    },

    methods: {
        onSelectCanlendar(){
            this.show = true;
        }
    }
}
</script>
