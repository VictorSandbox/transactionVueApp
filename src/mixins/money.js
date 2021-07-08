import Vue from 'vue';

export default Vue.mixin({
    methods: {
        formatMoney: function (amount) {
            let dollar = amount / 100;
            
            return '$ ' + dollar.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
    }
});