<style lang="sass">

.v-select {
    position: relative;
    vertical-align: top;
    text-align: left;
    font-size: 12px;
    outline: none;
    cursor: pointer;
    width: 150px;
    height: 30px;
    /*下拉菜单*/
    &.open {
        background: #fff;
        z-index: 10;
        .select-toggle {
            border: 1px solid #64be6c;
            border-bottom: 0;
            border-radius: 2px 2px 0 0;
        }
        .icon-arrowSelect {
            background-position: 0 -5px;
        }
        .icon-arrowSelect:before {
            line-height: 28px;
            content: '\f1c2';
            color: #747474;
        }
        .select-items {
            opacity: 1;
            display: block;
            visibility: visible;
            border: 1px solid #64be6c;
        }
    }
    .tip {
        display: none;
    }
    &.failed {
        .select-toggle,
        .select-items {
            border: 1px solid red;
        }
        .tip {
            position: absolute;
            display: block;
            cursor: pointer;
            text-align: left;
            top: -40px;
            left: 0;
        }
        .content {
            width: 100%;
            background: #fff;
            position: relative;
            color: #ff3f1a;
            line-height: 18px;
            border: 1px solid #d8d6d7;
            padding: 5px 8px;
            border-radius: 3px;
            -moz-border-radius: 3px;
            -webkit-border-radius: 3px;
            -o-border-radius: 3px;
            box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
        }
        .arrow {
            position: absolute;
            left: 20px;
            top: 30px;
            width: 14px;
            height: 0;
            margin: 0;
            border: 7px solid transparent;
            border-top-color: #d8d6d7;
            border-width: 7px 7px 0;
            bottom: -10px;
            i {
                position: absolute;
                top: -8px;
                left: -7px;
                width: 0;
                height: 0;
                margin: 0;
                border: 7px solid transparent;
                border-top-color: #fff;
            }
        }
    }
    &.disabled {
        background: #eee;
        .select-toggle {
            border: 1px solid #ddd;
            cursor: no-drop;
        }
    }
}

.form-inline {
    .v-select {
        display: inline-block;
        vertical-align: middle;
    }
}


/*下拉菜单按钮*/

.select-toggle {
    border: none;
    color: #333;
    padding: 0 10px;
    line-height: 28px;
    line-height: 30px\9;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 2px;
    &.no-border {
        border: 0;
    }
}

.select-value {
    vertical-align: top;
    line-height: 28px;
    line-height: 30px\9;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding-right: 15px;
    //宽度就在各自需要的地方自己加吧
}

.icon-arrowSelect {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 16px;
}

.icon-arrowSelect:before {
    line-height: 28px;
    content: '\f1c0';
    color: #747474;
}

.filter {
    position: absolute;
    top: 0px;
    background-color: #000;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
    border-radius: 2px 2px 0 0;
    z-index: -1;
}

.select-panel {
    position: fixed;
    top: 29px;
    left:0;
    width: 150px;
}

.select-items {
    color: #333;
    background: #fff;
    display: none;
    max-height: 250px;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-top: 0px;
    border-radius: 0 0 2px 2px;
    box-shadow: 0px 2px 2px #ddd;
    // position: absolute;
    // left: 0;
    // right: 0;
    // top: 29px;
    text-align: left;
    font-weight: normal;
    z-index: 10;
    .label-checkbox {
        width: 100%;
    }
}

.select-item,
.select-part {
    display: block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.select-item.selected,
.select-item:hover {
    background: #f5f5f5;
}


/**select2样式  dujuan.cao **/

.v-select.select-xs.open,
.v-select.select-xs {
    height: 26px;
    .select-toggle,
    .select-value {
        line-height: 24px;
        line-height: 26px\9;
    }
    .icon-arrowSelect:before {
        line-height: 24px;
    }
    .select-items {
        top: 24px;
    }
    .select-item,
    .select-part {
        display: block;
        height: 24px;
        line-height: 24px;
    }
    .select-items {
        top: 25px;
    }
}

</style>
