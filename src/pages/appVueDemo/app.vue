<template>
    <div id="wrapper">
        <section class="app-demo">
            <header class="demo-header" href="#">appComponent</header>
            <ul>
                <li>
                    <a class="item" v-link="'/toast'">
                        toast component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/select'">
                        select component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/dialog'">
                        dialog component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/action'">
                        action component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/canlendar'">
                        canlendar component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/datepicker'">
                        datepicker component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/timepicker'">
                        timepicker component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
                <li>
                    <a class="item" v-link="'/canlendarpicker'">
                        canlendarpicker component<i class="skip yo-ico">&#xf1c1;</i>
                    </a>
                </li>
            </ul>
        </section>
        <router-view class="view" keep-alive transition="slider-left"></router-view>
    </div>
</template>

<script>

export default {
    data () {
        return {

        }
    },

    methods: {
    }
}
</script>
