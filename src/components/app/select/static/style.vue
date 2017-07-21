<style lang="sass">
@import "../lib/var";

%flex-center {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    justify-content: center;
    align-items: center;
}

.v-select {
    position: fixed;
    z-index: 99998;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    .full-fade {
        position: fixed;
        z-index: -1;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, .5);
        opacity: 0;
        height: 100%;
        width: 100%;
    }
    .sl-wrap {
        position: absolute;
        left: 0;
        bottom: .1rem;
        width: 100%;
        max-width: 100%;
        max-height: 290px;
    }
    .sl-cont {
        margin: 0 .1rem;
        border-radius: .1rem;
        background: $colorWhite;
    }
    .sl-hd {
        width: 100%;
        text-align: start;
        position: relative;
        border-bottom: 1px solid $colorBorder;
        label {
            display: inline-block;
            height: 44px;
            line-height: 44px;
            font-size: 17px;
            padding: 0 .1rem;
            cursor: pointer;
            white-space: nowrap;
        }
        .sl-c {
            color: $colorGray1;
        }
        .sl-s {
            color: $colorPrimary1;
            float: right;
        }
    }
    .sl-cc {
        padding: 10px 0;
        margin: 0 auto;
        @extend %flex-center;
        .sl-cc-box {
            position: relative;
            height: 220px;
            width: 100%;
            overflow: hidden;
        }
        ul {
            text-decoration: none;
            position: absolute;
            width: 100%;
        }
        li {
            font-size: 15px;
            text-decoration: none;
            height: 44px;
            line-height: 44px;
            text-align: center;
            color: $colorMain;
            padding: 0 .15rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .sl-active-bg {
            position: absolute;
            top: 88px;
            width: 100%;
            height: 44px;
            line-height: 44px;
            background: $bgGray;
            z-index: -1;
        }
    }
}

</style>
