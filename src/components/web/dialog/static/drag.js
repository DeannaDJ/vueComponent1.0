// 拖拽属性以及方法配置
var dragConfig = {
    el: null, // 被拖拽的对象
    target: null, // 触发拖拽的对象
    disX: 0,
    disY: 0,

    // 初始化
    init(el) {
        var _this = this;
        var layout = document.getElementById(el);
        if (!layout) return;

        // 获取触发拖拽事件的对象target
        _this.el = layout.getElementsByClassName("v-dialog")[0];
        _this.target = layout.getElementsByClassName("hd")[0];

        // 事件绑定
        _this.target.onmousedown = function(e) {
            var e = e || event;
            _this.mouseDown(e);
        };
        _this.target.onmouseup = function(e) {
            var e = e || event;
            _this.mouseStop(e);
        };
    },

    // 鼠标按下
    mouseDown(e) {
        var _this = this;

        _this.disX = e.clientX - _this.el.offsetLeft;
        _this.disY = e.clientY - _this.el.offsetTop;

        // 事件绑定
        document.onmousemove = function(e) {
            var e = e || event;
            _this.mouseMove(e);
        };

        document.onmouseup = function(e) {
            var e = e || event;
            _this.mouseStop(e);
        };

        // 阻止默认事件
        return false;
    },


    // 鼠标移动
    mouseMove(e) {
        this.el.style.left = (e.clientX - this.disX) + 'px';
        this.el.style.top = (e.clientY - this.disY) + 'px';
    },


    // 鼠标移动停止
    mouseStop(e) {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

export default function(element) {
    let drag = Object.assign({}, dragConfig);
    drag.init(element);
    return drag;
}
