<style lang="sass">

.v-calendar {
    position: relative;
    .calendar-popup {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1000;
        float: left;
        min-width: 160px;
        padding: 0;
        margin: 2px 0 0;
        list-style: none;
        font-size: 12px;
        text-align: left;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 4px;
        -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
        background-clip: padding-box;
        direction: ltr;
    }
    .dropdown {
        top: 30px;
        left: 0;
        &:before {
            content: '';
            display: inline-block;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid #e2e2e2;
            border-top: 0;
            border-bottom-color: rgba(0, 0, 0, 0.2);
            position: absolute;
        }
        &:after {
        content: '';
        display: inline-block;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #f6f6f6;
        border-top: 0;
        position: absolute;
        }
        &.orient-top {
            &:before {
                top: -8px;
            }
            &:after {
                top: -7px;
            }
        }
        &.orient-left {
            &:before {
                left: 6px;
            }
            &:after {
                left: 7px;
            }
        }
    }
    .calendar {
        .head {
            height: 40px;
            line-height: 39px;
            font-size: 16px;
            padding: 0 5px;
            text-align: center;
            font-family: "微软雅黑";
            background-color: #f6f6f6;
            border-bottom: 1px solid #e2e2e2;
            cursor: pointer;
            div {
                display: inline-block;
                vertical-align: top;
            }
        }
        .table {
            width: 220px;
            margin: 0;
            padding: 5px;
            tr > th,
            tr > td {
                text-align: center;
                padding: 0px;
                border: none;
                color: #333;
                font-family: "微软雅黑";
                border-radius: 25px;
                &.day {
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    &.festival {
                        color: red;
                    }
                    &.today {
                        display: inline-block;
                        color: #333;
                        line-height: 25px;
                        background: white;
                        border-radius: 20px;
                        -webkit-border-radius: 20px;
                        -moz-border-radius: 20px;
                        border: 3px #58bc62 solid;
                        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
                    }

                    &.disabled {
                        color: #999999;
                        cursor: default;
                    }
                    &.active {
                        color: #ffffff;
                        background-color: #58bc62;
                        border-color: #58bc62;
                    }
                }
                &.old,
                &.new {
                    color: #999999;
                }
                &.active {
                    color: #ffffff;
                    background-color: #58bc62;
                    border-color: #58bc62;
                }
                span {
                    display: block;
                    width: 47px;
                    height: 47px;
                    line-height: 47px;
                    float: left;
                    margin: 1%;
                    cursor: pointer;
                    border-radius: 25px;
                    &.active {
                        color: #ffffff;
                        background-color: #58bc62;
                        border-color: #58bc62;
                    }
                    &.old,
                    &.new {
                        color: #999999;
                    }
                }
            }
            tr > th {
                font-weight: bold;
                font-size: 14px;
                &.week6,&.week7{
                    color: #58bc62;
                }
            }
        }
        .prev,
        .next {
            width: 30px;
        }
        .switch {
            width: 141px;
        }
    }
}

</style>
