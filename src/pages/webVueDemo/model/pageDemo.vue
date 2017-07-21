<template>
    <div id="page-demo" class="item-demo">
        <h1>page分页</h1>
        <h2>概述</h2>
        <p>page分页</p>

        <h2>实例</h2>
        <div class="page-demo">
            <label>默认分页样式：</label>
            <v-page :total="totalCount"></v-page>
        </div>
        <div class="page-demo">
            <label>带首尾页按钮样式：</label>
            <v-page :total="totalCount"
                    first="首页"
                    last="尾页">
            </v-page>
        </div>
        <div class="page-demo">
            <label>显示总页码样式：</label>
            <v-page :total="totalCount"
                    first="首页"
                    last="尾页" show-total>
            </v-page>
        </div>
        <div class="page-demo">
            <label>设置每页30条数据的样式：</label>
            <v-page :total="totalCount"
                    :page-size="pageSize"
                    show-total>
            </v-page>
        </div>
    </div>
</template>

<script>

import vPage from 'webComponent/page/v-page.vue'
export default {
    data () {
        return {
            totalCount: 130,
            pageSize:30
        }
    },
    components: {
        vPage
    },

    events: {
        jumpPage(data) {
            console.log(data);
        }
    }
}
</script>

<style scoped lang="sass">
    .page-demo {
        margin-bottom: 20px;
    }
</style>
