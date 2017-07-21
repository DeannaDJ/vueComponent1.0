import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Web from './web.vue'
import Index from './model/indexDemo'
import Dialog from './model/dialogDemo'
import Sidebar from './model/sidebarDemo'
import Select from './model/selectDemo'
import Suggest from './model/suggestDemo'
import Loading from './model/loadingDemo'
import Page from './model/pageDemo'
import Calendar from './model/calendarDemo'

import 'css/common/web/base'
import 'css/lib/web/bootstrap/bootstrap'
import 'css/webVueDemo/index'


//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()


// 路由 map
router.map({
    '/':{
        name:'index',
        component: Index
    },
    '/sidebar':{
        name:'sidebar',
        component: Sidebar
    },
    '/select':{
        name:'select',
        component: Select
    },
    '/page': {
        name:'page',
        component: Page
    },
    '/dialog':{
        name:'dialog',
        component: Dialog
    },
    '/loading': {
        name:'loading',
        component: Loading
    },
    '/suggest': {
        name:'suggest',
        component: Suggest
    },
    '/calendar': {
        name: 'calendar',
        component: Calendar
    }
})

router.start(Web, '#web')
