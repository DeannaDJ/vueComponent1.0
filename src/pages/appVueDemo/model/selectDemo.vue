<template>
    <div id="select-demo" class="item-demo">
        <header>
            <a class="back yo-ico" v-link="'/'">&#xf1c3;</a>
            <label class="title">select</label>
        </header>

        <section class="content">
            <input type="button" class="yo-btn yo-btn-m"  @click="onSelectlist" value="单项选择" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onSelectlist2" value="未分组" />
            <input type="button" class="yo-btn yo-btn-m"  @click="onSelectlist3" value="分组选择" />
        </section>

        <v-select :list="list" display-key="code" display-name="name" events-name="selectEvent"
            :current-value.sync="currentValue" :show.sync="showList"></v-select>
        <v-select :list="list2" :current-value.sync="currentValue2"
            :show.sync="showList2" events-name="selectCallback"></v-select>
        <v-select :list="list3"
                  :group="2"
                  :show.sync="showList3"
                  display-key="roomNo"
                  display-name="roomName"
                  group-name="roomTypeName"
                  :current-key.sync="currentRoomNo"
                  :current-value.sync="currentRoomName"
                  events-name="selectGroupCallback">
        </v-select>

    </div>
</template>

<script>

import vSelect from 'appComponent/select/v-select.vue'
export default {
    data () {
        return {
            list: [{
                code: 1,
                name: "线下客线下客人线下客人线下客人线下客人线下客人线下客人线下客人线下客人线下客人人"
            }, {
                code: 2,
                name: "呼呼呼呼呼呼呼呼呼呼呼呼呼呼呼"
            }, {
                code: 3,
                name: "呼呼呼分销呼呼呼分销呼呼呼分销呼呼呼分销呼呼呼分销"
            }, {
                code: 4,
                name: "淘宝淘宝淘宝淘宝淘宝淘宝淘宝"
            }, {
                code: 5,
                name: "途家途家途家途家途家"
            }, {
                code: 6,
                name: "去去去去去去去去去去去去去去去去去去去去去去去去"
            }, {
                code: 7,
                name: "携程携程携程携程携程携程携程携程"
            }, {
                code: 8,
                name: "艺龙艺龙艺龙艺龙艺龙艺龙艺龙"
            }, {
                code: 9,
                name: "小猪猪小猪猪小猪猪小猪猪小猪猪小猪猪小猪猪小猪猪"
            }],

            list2: ["线下客人", "呼呼呼", "呼呼呼分销", "淘宝", "途家", "去去去", "携程", "艺龙", "小猪猪"],

            list3: [{
                roomTypeNo: "111",
                roomTypeName: "房型一",
                roomNo: "1",
                roomName: "线下客人"
            }, {
                roomTypeNo: "112",
                roomTypeName: "房型二",
                roomNo: "2",
                roomName: "呼呼呼"
            }, {
                roomTypeNo: "333",
                roomTypeName: "房型三",
                roomNo: "3",
                roomName: "呼呼呼分销"
            }, {
                roomTypeNo: "112",
                roomTypeName: "房型二",
                roomNo: "4",
                roomName: "淘宝"
            }, {
                roomTypeNo: "111",
                roomTypeName: "房型一",
                roomNo: "5",
                roomName: "途家"
            }, {
                roomTypeNo: "112",
                roomTypeName: "房型二",
                roomNo: "6",
                roomName: "去去去"
            }, {
                roomTypeNo: "111",
                roomTypeName: "房型一",
                roomNo: "7",
                roomName: "携程"
            }, {
                roomTypeNo: "333",
                roomTypeName: "房型三",
                roomNo: "8",
                roomName: "艺龙"
            }, {
                roomTypeNo: "4444",
                roomTypeName: "房型四",
                roomNo: "9",
                roomName: "小猪猪"
            }],

            currentValue: '途家',
            currentValue2: '呼呼呼',
            currentRoomNo: '9',
            currentRoomName: '小猪猪',
            showList: false,
            showList2: false,
            showList3: false
        }
    },

    components: {
        vSelect
    },

    methods: {
        onSelectlist() {
            this.showList = true;
        },

        onSelectlist2() {
            this.showList2 = true;
        },

        onSelectlist3() {
            this.showList3 = true;
        }
    },

    events: {
        selectEvent(item) {
            console.log(this.currentValue);
            console.log(item);
        },

        selectCallback(item) {
            console.log(this.currentValue2);
            console.log(item);
        },

        selectGroupCallback(item) {
            console.log(this.currentRoomName);
            console.log(item);
        }
    }
}
</script>
