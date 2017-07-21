export let tpl = "<div class='dg-fade' v-show='show'></div>" +
    "<div id='v-dialog' class='v-dialog' :class='skin' v-show='show'>" +
    "<div class='dialog'>" +
    "<div class='hd' :class='dragClass'>" +
    "<button class='i-close' @click='_onClose'>×</button>" +
    "<i class='i-start' v-if='title'></i>" +
    "<span class='hd-title' v-if='title' v-text='title'></span></div>" +
    "<div class='bd' :style='contentStyle' v-html='content'></div>" +
    "<div class='ft'>" +
    "<span v-for='item in buttons' v-show='item.name' @click='_onClick(item)'>{{item.name}}</span>" +
    "</div>" +
    "</div>" +
    "</div>";

export let data = {
    title: "",
    content: "",
    skin: "",
    show: false,
    drag: false,
    buttons: [{
        name: '关闭',
        eventCallback: null
    }, {
        name: '确认',
        eventCallback: null
    }],
    contentStyle: {
        width: "auto",
        height: "auto",
        padding: ""
    }
};
