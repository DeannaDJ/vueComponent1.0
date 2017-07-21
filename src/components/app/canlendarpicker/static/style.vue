<style lang="sass">
@import "../lib/var";

.v-canlendarpicker {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    min-height: 2rem;
    background: rgba(0, 0, 0, .5);
    @extend %flex-center;
    .canlendarpicker {
        z-index: 1200;
        max-width: 90%;
        min-width: 2.8rem;
        font-size: $f15;
        overflow: hidden;
        text-align: center;
        border-top-left-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
        .f24 {
            font-size: $f24;
        }
        .hd {
            font-size: $f24;
            padding: 0 .2rem;
            height: $h140;
            color: $color-white;
            background: linear-gradient(to right, $color-start, $color-end);
            background: -webkit-linear-gradient(to right, $color-start, $color-end);
            .year {
                height: $h100;
                line-height: $h100;
            }
            .year-first {
                float: left;
            }
            .year-sec {
                float: right;
            }
        }
        .bd {
            width: auto;
            overflow: auto;
            padding: 30px 20px;
            font-size: $f15;
            max-height: 2.5rem;
            line-height: 22px;
            text-align: center;
            color: $color-main;
            background: $color-white;
            -webkit-overflow-scrolling: touch;
            border-bottom-left-radius: $borderRadius;
            border-bottom-right-radius: $borderRadius;
            dl {
                margin-top: 0;
                margin-bottom: 20px;
                height: 30px;
                dt {
                    font-size: $f17;
                    margin-right: .05rem;
                }
                dt,dd {
                    display: inline-block;
                    font-weight: normal;
                }
            }

            .time-text {
                height:24px;
                line-height: 24px;
                cursor: default;
            }
            .slider {
                position: relative;
                width: 220px;
                height:8px;
                border-radius: 5px;
                background-color: $color-slider;
                .state-default {
                    position: absolute;
                    left:0;
                    top:-13px;
                    width: 30px;
                    height:30px;
                    background-color: #61CC6C;
                    border-radius: 50%;
                }
            }
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
