<style lang="sass">
@import "../lib/var";

.v-datepicker {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99998;
    .full-fade {
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }
    .sl-wrap {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: $f17;
        max-width: 100%;
        max-height: 280px;
        background: $color-white;
    }
    .sl-hd {
        width: 100%;
        padding: 0 .2rem;
        text-align: start;
        position: relative;
        border-bottom: 1px solid $color-border;
        label {
            display: inline-block;
            height: $h44;
            line-height: $h44;
            padding: 0 .1rem;
            cursor: pointer;
            white-space: nowrap;
        }
        .sl-c {
            color: $color-darkgray;
        }
        .sl-s {
            float: right;
            color: $color-active;
        }
    }
    .sl-cc {
        margin: 0 auto;
        padding: 10px 0;
        @extend %flex-center;
        .sl-cc-box {
            position: relative;
            width: 100%;
            height: 220px;
            overflow: hidden;
        }
        ul {
            width: 100%;
            position: absolute;
            text-decoration: none;
        }
        li {
            height: $h44;
            line-height: $h44;
            text-align: center;
            color: $color-gray;
            text-decoration: none;
            &.active {
                color: $color-active;
            }
        }
        .sl-active-bg {
            position: absolute;
            top: 88px;
            width: 100%;
            z-index: -1;
            height: $h44;
            line-height: $h44;
            background: $bg-gray;
        }
    }
}

</style>
