<style lang="sass">
$color-white: #ffffff;

// 字体
$f17: 17px;

// 高度
$h44: 44px;

// 圆角值
$borderRadius: 10px;

.v-action {
    position: fixed;
    left: 0;
    bottom: 0;
    top: .44rem; //不覆盖头部
    width: 100%;
    z-index: 99998;
    font-size: $f17;
    min-height: 2rem;
    background: rgba(0, 0, 0, 0);
    -webkit-transition: background .3s ease-in-out;
    //加上fullscreen layer全屏, 不加则不覆盖头部
    &.fullscreen {
        top: 0;
        height: 100%;
    }
    //加上show的时候背景有渐显动画
    &.show {
        background: rgba(0, 0, 0, .5);
    }
    .action-btn {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        max-width: 100%;
        text-align: center;
        li {
            border: none;
            line-height: $h44;
            background: $color-white;
            margin: 0.01rem 0.15rem 0;
            &:first-child {
                border-top-left-radius: $borderRadius;
                border-top-right-radius: $borderRadius;
            }
            &:last-child {
                margin-bottom: 10px;
                border-bottom-left-radius: $borderRadius;
                border-bottom-right-radius: $borderRadius;
            }
        }
        &.cancel {
            li {
                &:nth-last-child(2) {
                    border-bottom-left-radius: $borderRadius;
                    border-bottom-right-radius: $borderRadius;
                }

                &:last-child {
                    margin: 0.1rem 0.15rem;
                    border-radius: $borderRadius;
                }
            }
        }
    }
}

</style>
