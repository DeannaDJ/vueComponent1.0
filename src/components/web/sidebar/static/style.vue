<style lang="sass">

$colorPrimary: #53ac73;
$colorDanger: #ff0000;
.v-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 179px;
    height: 100%;
    background: #fff;
    border-right: 1px solid #e2e2e2;
    box-shadow: 2px 0px 6px #f2f2f2;
    z-index: 10;
    // 二级导航
    .title {
        cursor: pointer;
        display: inline-block;
        min-height: 35px;
        line-height: 35px;
        width: 100%;
        &.active {
            color: $colorPrimary;
            .text {
                font-weight: bold;
            }
            &.not-sub {
                border-left: 4px solid $colorPrimary;
                background: #f5f5f5;
                .text {
                    margin-left: 12px;
                    font-weight: bold;
                }
                .i-icon {
                    left: 10px;
                }
            }
            .i-icon {
                color: $colorPrimary;
            }
        }
        .i-icon {
            display: inline-block;
            position: relative;
            top: -2px;
            left: 13px;
            text-align: center;
            width: 30px;
            font-size: 21px;
            vertical-align: middle;
            color: #333;
        }
        .text {
            margin-left: 16px;
            font-size: 14px;
        }
        .color-danger {
            color: $colorDanger;
        }
    }
    .subnav-item {
        padding-top: 10px;
    }
    ul {
        margin-top: -10px;
        li {
            a {
                display: block;
                padding-left: 50px;
                line-height: 30px;
                cursor: pointer;
                outline: none;
                &:hover {
                    color: $colorPrimary;
                }
            }
            &.active a {
                color: $colorPrimary;
                border-left: 4px solid $colorPrimary;
                background: #f5f5f5;
                padding-left: 46px;
            }
        }
    }
}

</style>
