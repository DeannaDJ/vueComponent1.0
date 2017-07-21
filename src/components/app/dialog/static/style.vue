<style lang="sass">
@import "../lib/var";

.v-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    min-height: 2rem;
    background: rgba(0, 0, 0, .5);
    @extend %flex-center;
    .dialog {
        z-index: 1200;
        max-width: 90%;
        min-width: 2.8rem;
        font-size: $f15;
        overflow: hidden;
        text-align: center;
        border-top-left-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
        .hd {
            font-size: $f17;
            text-align: center;
            padding-top: 0.15rem;
            background: $color-white;
        }
        .bd {
            width: auto;
            overflow: auto;
            padding: 0.15rem;
            font-size: $f15;
            max-height: 2.5rem;
            line-height: 22px;
            text-align: center;
            background: $color-white;
            -webkit-overflow-scrolling: touch;
            border-bottom-left-radius: $borderRadius;
            border-bottom-right-radius: $borderRadius;
        }
        .bd .text-left {
            text-align: left;
        }
        .ft {
            height: $h44;
            line-height: $h44;
            margin-top: 30px;
            text-align: center;
        }
        .ft span {
            width: $h44;
            height: $h44;
            flex: inherit;
            margin-right: 50px;
            border-radius: 25px;
            display: inline-block;
            color: $color-darkgray;
            background-color: $color-white;
            &:last-child {
                margin-right: 0;
            }
            &.cancel-btn {
                color: $color-darkgray;
            }
        }
    }
}

</style>
