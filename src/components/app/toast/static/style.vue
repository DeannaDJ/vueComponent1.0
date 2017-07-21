<style lang="sass">

.v-toast {
    z-index: 99999;
    font-size: 0;
    overflow: hidden;
    max-width: 90%;
    min-width: 2.8rem;
    text-align: center;
    position: fixed;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    -webkit-transition: opacity .4s ease-in-out;
    &.bottom {
        bottom: 10%;
    }
    &.top {
        top: 10%;
    }
    &.center {
        top: 50%;
    }
    &.show {
        opacity: 1;
    }
    span {
        display: inline-block;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: .05rem;
        line-height: .2rem;
        font-size: .14rem;
        padding: 10px 15px;
    }
}

</style>
