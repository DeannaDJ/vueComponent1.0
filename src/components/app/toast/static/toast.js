import {
    props
} from './config.js';

export default {
    name: 'toast',

    props: Object.assign(true, {}, props),

    data() {
        return {
            showName: ''
        }
    },

    watch: {
        show(val) {
            this.showName = val ? 'show' : '';
            if (!val) {
                return;
            }

            var vm = this;
            vm.$nextTick(() => {
                // 提示消失
                setTimeout(() => {
                    vm.show = false;
                }, +vm.duration);

                setTimeout(() => {
                    vm.display = false;
                }, +vm.duration + 1000);
            });
        }
    }
}
