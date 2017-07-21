import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './app.vue'
import Toast from './model/toastDemo.vue'
import Action from './model/actionDemo.vue'
import Select from './model/selectDemo.vue'
import Dialog from './model/dialogDemo.vue'
import Canlendar from './model/canlendarDemo.vue'
import Datepicker from './model/datepickerDemo.vue'
import Timepicker from './model/timepickerDemo.vue'
import Canlendarpicker from './model/canlendarpickerDemo.vue'
import 'css/common/base'
import 'css/appVueDemo/index'

//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由 map
router.map({
    '/toast': {
        name: 'toast',
        component: Toast
    },
    '/action': {
        name: 'action',
        component: Action
    },
    '/select': {
        name: 'select',
        component: Select
    },
    '/dialog': {
        name: 'dialog',
        component: Dialog
    },
    '/canlendar': {
        name: 'canlendar',
        component: Canlendar
    },
    '/datepicker': {
        name: 'datepicker',
        component: Datepicker
    },
    '/timepicker': {
        name: 'timepicker',
        component: Timepicker
    },
    '/canlendarpicker': {
        name: 'canlendarpicker',
        component: Canlendarpicker
    }
})

router.start(App, '#app')
