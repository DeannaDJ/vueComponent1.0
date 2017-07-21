import {
    props
} from './config.js';

export default {
    name: 'action',

    props: props,

    data() {
        return {
            list: [],
            display: false
        }
    },
    created() {
        this.list = Object.assign([],this.actionList);

        if(this.cancel) {
            this.list.push({
                name: '取消',
                eventName: ''
            });
        }
    },

    watch: {
        show(val) {
            this.display = val;
        }
    },

    methods: {
        _onAction(item) {
            this.$emit('vActionHide');

            if (item.eventName) {
                this.$dispatch(item.eventName, item);
            }
        },

        _onClose() {
            this.$emit('vActionHide');
        }
    },

    events: {
        vActionHide() {
            this.show = false;
        }
    }
}
