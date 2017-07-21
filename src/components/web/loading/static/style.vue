<style lang="sass">

.v-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    .loading-fade {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        -webkit-user-select: none;
        opacity: 0.3;
        background: rgb(0, 0, 0);
    }
    .inner-loading {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 10px;
        z-index: 9999;
        top: 50%;
        left: 50%;
        margin: -40px 0 0 -40px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        line-height: 1;
    }
    .inner-loading > .inner {
        display: block;
        text-align: center;
        border-radius: 5px;
        -webkit-background-clip: padding-box !important;
        background-clip: padding-box !important;
        color: #212121;
        font-size: 14px;
    }
    .inner-loading > .inner > .i-icon {
        display: block;
        margin-bottom: 10px;
        width: 80px;
        height: 80px;
        background-image: url(../images/loading.gif);
    }
}

</style>
