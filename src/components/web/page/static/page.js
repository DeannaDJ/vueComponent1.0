import Vue from 'vue'
import {
    props
} from './config.js'

export default {
    name: 'page',
    props: Object.assign(true, {}, props),

    data() {
        return {
            pages: [],
            totalPages: 0,
            ellipse: '...'
        };
    },

    created() {
        if (!this.url) {
            this.getPages();
            return;
        }

        // 后期实现
        // this.getData();
    },

    methods: {
        onJumpPage(page) {
            if (this.currPage != page) {
                this.currPage = page;
                this.$dispatch(this.eventName, {
                    currentPage: page,
                    pageSize: this.pageSize
                });

                // 重绘分页
                this.getPages();
            }
        },

        // 上一页
        onPrev() {
            this.onJumpPage(this.currPage - 1);
        },

        // 下一页
        onNext() {
            this.onJumpPage(this.currPage + 1);
        },

        // 重新获取分页数组
        getPages() {
            this.pages = [];
            this.totalPages = Math.ceil(this.total / this.pageSize);

            if (this.totalPages == 0) {
                return;
            }

            if (this.totalPages <= this.groups || this.totalPages <= 7) {
                for (let i = 1; i <= this.totalPages; i++) {
                    this.pages.push(i);
                }
                return;
            }

            var avg = Math.floor(this.groups / 2),
                startPage = [1, 2],
                middlePage = [],
                endPage = [this.totalPages - 1, this.totalPages];

            if (this.currPage < (this.groups - avg)) {
                for (let i = 3; i <= this.groups; i++) {
                    middlePage.push(i);
                }
            } else if (this.currPage > (this.totalPages - avg)) {
                let max = this.totalPages - 2,
                    i = this.totalPages - this.groups + 1;
                for (i; i <= max; i++) {
                    middlePage.push(i);
                }
            } else if ((this.currPage > avg) || (this.currPage + avg <= this.totalPages)) {

                var t = (-avg);
                for (let i = 0; i < this.groups; i++) {

                    let page = this.currPage + (t++);
                    if (page > startPage[1] && page < endPage[0]) {
                        middlePage.push(page);
                    }
                }
            }

            if ((startPage[1] + 1) < middlePage[0]) {
                startPage.push(this.ellipse);
            }

            if (middlePage[middlePage.length - 1] < (endPage[0] - 1)) {
                middlePage.push(this.ellipse + ' ');
            }

            this.pages = startPage.concat(middlePage).concat(endPage);
        },

        getData() {

        }
    },

    events: {

    },

    filters: {

    }

}
