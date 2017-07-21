<style lang="sass">

.v-page {
    overflow: hidden;
    padding: 10px 0;

    ul {
        // float: right;
        & > li {
            float: left;
        }
    }

    a,span {
        float: left;
        color: #555;
        font-size: 12px;
        font-weight: normal;
        text-align: center;
        padding: 3px 6px;
        margin: 0 5px 0 0;
        background: #f5f5f5;
        line-height: 14px;
        min-width: 0px;
        border-radius: 2px;
    }
    .prev,
    .next,
    .first,
    .last {
        color: #53ac73;
        &:hover {
            background: #53ac73;
            color: #fff;
        }
    }
    .current {
        background: #53ac73;
        color: #fff;
        cursor: default;
    }
    .active {
        .prev,
        .next,
        .first,
        .last {
            color: #999999;
            background-color: #f5f5f5;
            cursor: default;
        }
    }
    .ellipse {
        background: none;
        border: none;
        box-shadow: none;
        font-weight: bold;
        cursor: default;
        color: #555;
    }
    .total-count {
        margin-right: 10px;
    }
}
