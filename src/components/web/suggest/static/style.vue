<style lang="sass">

.v-suggest {
    position: relative;
    display: inline-block;
    .suggest-input {
        outline: 0;
        height: 30px;
        padding: 0 10px;
        border: 1px solid #e2e2e2;
        border-radius: 2px;
        width: 100%;
    }
    .suggest-panel {
        position: absolute;
        top: 32px;
        padding: 5px 0;
        background-color: #ffffff;
        border: 1px solid #e2e2e2;
        border-radius: 2px;
        width: 100%;
        max-height: 200px;
        overflow: auto;
        z-index: 99;
    }
    ul > li {
        padding: 0 10px;
        list-style: none;
        line-height: 24px;
        height: 24px;
        vertical-align: middle;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:hover,&.selected {
            background: #f5f5f5;
        }
    }
}

</style>
