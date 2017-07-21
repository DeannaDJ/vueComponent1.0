<style lang="sass">
@import "../lib/var.scss";

.v-canlendar {
    @include flexbox();
    @include flex-direction(column);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    z-index: 9999;
    overflow: hidden;
    background: $color-white;
    .header {
        @include ell;
        border: 0;
        height: $h44;
        line-height: $h44;
        font-size: $f17;
        position: relative;
        text-align: center;
        color: $color-white;
        background-color: $color-active;
        .title {
            @include ell;
            margin: 0 .5rem;
            font-size: $f17;
        }
        .affirm,.regret {
            position: absolute;
            top: 0;
            height: $h44;
            width: 0.6rem;
            cursor: pointer;
            font-size: $f17;
            &:active {
                opacity: .5;
            }
        }
        .regret {
            left: 0;
            text-align: left;
            padding-left: .13rem;
        }
        .affirm {
            right: 0;
            text-align: right;
            padding-right: 0.12rem;
        }
    }
    .flex {
        @include flex();
        position: relative;
        overflow-x: hidden;
    }

    .canlendar {
        @include flex-direction(column);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin:0;
        padding: 0;
        height: 100%;
        display: block;
        text-align: center;
        background-color: $color-white;

        .weeks {
            @include flex(none);
            position: relative;
            overflow: hidden;
            padding: 0 .1rem;
        }
        .month-bar {
            border: none;
            height: $h50;
            line-height: $h50;
            font-size: $f18;
            margin-top: .03rem;
            font-weight: normal;
            color: $color-main;
            background-color: $color-white;
        }
        .day-label {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
        }
        .week-bar {
            @include flexbox();
            width: 100%;
            height: $h22;
            line-height: $h22;
            font-size: $f15;
            color: $color-darkgray;
            background-color: $color-white;
            & > li {
                width: auto;
                @include flex();
            }
        }
        .week {
            width: 100%;
            height: 33px;
            border: none;
            color: $color-main;
            @include flexbox(inline-flex);
            & > li {
                @include flex();
                width: auto;
                height: $h27;
                position: relative;
                margin: .03rem -.01rem;
                &.start {
                    border-top-left-radius: 14px;
                    border-bottom-left-radius: 14px;
                }
                &.end {
                    border-top-right-radius: 14px;
                    border-bottom-right-radius: 14px;
                }
                &.range {
                    color: $color-white;
                    background-color: $color-active;
                    .now-today {
                        color: $color-white;
                    }
                }
            }
        }
        .day,
        .special {
            margin: 0;
            width: auto;
            font-size: $f15;
            line-height: $h27;
            vertical-align: top;
            display: inline-block;
        }
        .day {
            height: 24px;
            border-radius: 50%;
            background-clip: padding-box !important;
            -webkit-background-clip: padding-box !important;
        }
        .weekend {
            color: $color-active;
        }
        .special {
            color: $color-main;
        }
        .disabled {
            color: $color-gray;
            .special {
                color:$color-gray;
            }
        }
        .today > .day,
        .holiday > .day {
            display: none;
        }
        .now-today {
            color: $color-active;
        }
        .click-color {
            color: $color-white;
        }
    }

    .v-toast {
        left: 50%;
        bottom: 10%;
        opacity: 0;
        font-size: 0;
        max-width: 90%;
        min-width: 2.8rem;
        z-index: 99999;
        position: fixed;
        overflow: hidden;
        text-align: center;
        pointer-events: none;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -webkit-transition: opacity .4s ease-in-out;
        &.show {
            opacity: 1;
        }
        span {
            font-size: $f15;
            line-height: 20px;
            border-radius: 5px;
            padding: 10px 15px;
            color: $color-white;
            display: inline-block;
            background: rgba(0, 0, 0, 0.8);
        }
    }
}

</style>
