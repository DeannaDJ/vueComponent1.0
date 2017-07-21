<template>
    <div id="wrapper">
        <v-sidebar :configs="configs" :current-key="pageKey"></v-sidebar>
        <div class="demo-main">
            <router-view class="view" keep-alive></router-view>
        </div>
    </div>
</template>

<script>
import vSidebar from 'webComponent/sidebar/v-sidebar.vue'
export default {
    data () {
        return {
            pageKey: 'index',
            configs: [{
                key: 'webcomponent',
                name: 'webComponent',
                iconUnicode: '&#xf1b9;',
                open: true,
                subItem: [{
                    subKey: "index",
                    parentKey: 'webcomponent',
                    subName: "介绍",
                    url: "#!/",
                    show: true
                }, {
                    subKey: "standard",
                    parentKey: 'webcomponent',
                    subName: "规范",
                    url: "#!/",
                    show: true
                }],
                url: "#!/",
                show: true
            },{
                key: 'jscomponent',
                name: 'jsComponent',
                iconUnicode: '&#xf1d0;',
                open: true,
                subItem: [{
                    subKey: "sidebar",
                    parentKey: 'jscomponent',
                    subName: "sidebar侧边栏",
                    url: "#!/sidebar",
                    show: true
                }, {
                    subKey: "select",
                    parentKey: 'jscomponent',
                    subName: "select选择器",
                    url: "#!/select",
                    show: true
                }, {
                    subKey: "dialog",
                    parentKey: 'jscomponent',
                    subName: "dialog弹窗",
                    url: "#!/dialog",
                    show: true
                }, {
                    subKey: "suggest",
                    parentKey: 'jscomponent',
                    subName: "suggest筛选器",
                    url: "#!/suggest",
                    show: true
                }, {
                    subKey: "page",
                    parentKey: 'jscomponent',
                    subName: "page分页",
                    url: "#!/page",
                    show: true
                }, {
                    subKey: "loading",
                    parentKey: 'jscomponent',
                    subName: "loading加载器",
                    url: "#!/loading",
                    show: true
                }, {
                    subKey: "calendar",
                    parentKey: 'jscomponent',
                    subName: "calendar日历",
                    url: "#!/calendar",
                    show: true
                }],
                url: "#!/sidebar",
                show: true
            }]
        }
    },

    components: {
        vSidebar
    },

    methods: {

    }
}
</script>
