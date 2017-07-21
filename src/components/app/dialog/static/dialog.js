import {
    props
} from './config.js'

export default {
    name: 'dialog',
    props: Object.assign(true, {}, props),

    data() {
        return {
            display: false
        }
    },

    watch: {
        show(val) {
            this.display = val;
        }
    },

    methods: {
        _onClick(item) {
            this.$emit('vDialogHide');

            if (item.eventName) {
                this.$dispatch(item.eventName, item);
            }
        }
    },

    events: {
        vDialogHide() {
            this.show = false;
        }
    }
}
